import React, { useEffect, useRef, useState } from "react";

import PageSkeleton from "../components/ui/PageSkeleton";
import usePageSkeleton from "../hooks/usePageSkeleton";

import Container from "../components/layout/Container";

import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";
import Button from "../components/ui/Button";

import ContactCTASection from "../components/sections/ContactCTASection";

import "../styles/contact.css";

import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db, isFirebaseConfigured, getFirebaseSetupErrorMessage } from "../lib/firebaseClient";
import { sendAdminEmail } from "../lib/emailjsClient";

const Contact = () => {
  const isLoading = usePageSkeleton();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    agreeToPolicies: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const modalRef = useRef(null);


  const validateField = (name, value) => {
    const stringValue = typeof value === "string" ? value : "";
    const trimmedValue = stringValue.trim();

    switch (name) {
      case "name":
        return trimmedValue.length >= 2
          ? ""
          : "Please enter at least 2 characters for your name.";
      case "email":
        return /.+@.+\..+/.test(trimmedValue) && trimmedValue.length >= 6
          ? ""
          : "Please enter a valid email address.";
      case "subject":
        return trimmedValue.length >= 5
          ? ""
          : "Please enter a subject with at least 5 characters.";
      case "message":
        return trimmedValue.length >= 20
          ? ""
          : "Please share at least 20 characters about your project.";
      case "agreeToPolicies":
        return value ? "" : "You must agree to our Terms of Use and Privacy/Cookie policies.";
      default:
        return "";
    }
  };

  const validateForm = (data) => {
    const nextErrors = {};

    Object.entries(data).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) {
        nextErrors[name] = error;
      }
    });

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const withTimeout = (promise, timeoutMs = 12000) =>
    Promise.race([
      promise,
      new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error("Submission timed out. Please check your connection and Firestore rules."));
        }, timeoutMs);
      }),
    ]);

  const createSubmissionDocument = async (payload) => {
    const submissionRef = doc(collection(db, "messages"));
    await withTimeout(setDoc(submissionRef, payload));
    return submissionRef;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const nextErrors = validateForm(formData);

    // policy agreement validation
    if (!formData.agreeToPolicies) {
      nextErrors.agreeToPolicies =
        "You must agree to our Terms of Use and Privacy/Cookie policies.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      if (!isFirebaseConfigured || !db) {
        throw new Error(getFirebaseSetupErrorMessage());
      }

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        agreeToPolicies: formData.agreeToPolicies,
        createdAt: serverTimestamp(),
      };

      const docRef = await createSubmissionDocument(payload);

      void sendAdminEmail({
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        submission_id: docRef.id,
      }).catch((emailError) => {
        console.error("Contact email notification failed:", emailError);
      });

      setSubmitted(true);
      setErrors({});
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        agreeToPolicies: false,
      });
    } catch (err) {
      console.error("Contact submission failed:", err);
      setSubmitted(false);

      const errorMessage =
        err?.code === "permission-denied" ||
        err?.message?.includes("permission") ||
        err?.message?.includes("Missing or insufficient permissions")
          ? "Your message could not be saved because Firestore is blocking writes. Please update the Firestore rules to allow creates in the messages collection."
          : err?.code === "failed-precondition" ||
            err?.message?.includes("database") ||
            err?.message?.includes("not enabled") ||
            err?.message?.includes("enable Firestore")
            ? "Firestore is not ready for writes yet. Please enable the Firestore database in Firebase Console and publish the rules."
            : err?.message?.includes("timed out")
              ? err.message
              : err?.message || "Failed to send your message. Please try again in a few moments.";

      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Keep the send button enabled and rely on validation messaging on submit.
  // Disable only during in-flight submission to avoid double posts.
  const hasMinimumInput = true;

  const closeModal = () => {
    setSubmitted(false);
  };

  useEffect(() => {
    if (!submitted) {
      return undefined;
    }

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [submitted]);

  return (
    <div className="contact-page">
      {isLoading && <PageSkeleton variant="hero" />}
      {!isLoading && (
        <>

      {/* HERO */}
      <section className="contact-hero">
        <Container>
          <SectionHeading
            center
            title={
              <>
                <span className="hero-filled-text">Let&apos;s</span>{" "}
                <span className="outline-text">Build</span>{" "}
                <br />
                <span className="hero-line-two">
                  <span className="hero-filled-text">Something</span>{" "}
                  <span className="outline-text">Great</span>
                </span>
              </>
            }
            description="Whether you're launching a startup, scaling a business, or looking to collaborate, we'd love to hear from you."
          />
        </Container>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-section">
        <Container>
          <Card className="contact-form-card">
            <div className="contact-form-header">
              <div className="contact-form-topline">
                <span className="contact-form-pill">Fast response</span>
                <span className="contact-form-pill">Startup-ready</span>
                <span className="contact-form-pill">India HQ</span>
              </div>

              <SectionHeading
                tag="Message"
                title="Tell Us About Your Project"
                description="Share some details about what you're building. We'll review your message and get back to you as soon as possible."
              />
            </div>

            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form-row">
                <div className="contact-form-field">
                  <label htmlFor="contact-name">Name</label>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <p className="contact-form-error">{errors.name}</p>}
                </div>

                <div className="contact-form-field">
                  <label htmlFor="contact-email">Email</label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <p className="contact-form-error">{errors.email}</p>}
                </div>
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-subject">Subject</label>
                <Input
                  id="contact-subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                {errors.subject && <p className="contact-form-error">{errors.subject}</p>}
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-message">Project details</label>
                <TextArea
                  id="contact-message"
                  name="message"
                  rows={7}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                {errors.message && <p className="contact-form-error">{errors.message}</p>}
              </div>

              <div className="contact-form-field">
                <label className="contact-form-checkbox">
                  <input
                    type="checkbox"
                    name="agreeToPolicies"
                    checked={formData.agreeToPolicies}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        agreeToPolicies: e.target.checked,
                      }))
                    }
                    required
                  />
                  <span>
                    I agree to the <a href="/terms-of-use">Terms of Use</a>, <a href="/privacy-policy">Privacy Policy</a>, and <a href="/cookie-policy">Cookie Policy</a> of Brevto Innovations Private Limited.
                  </span>
                </label>

                {errors.agreeToPolicies && (
                  <p className="contact-form-error">{errors.agreeToPolicies}</p>
                )}
              </div>

              {submitError && <p className="contact-form-error">{submitError}</p>}

              <Button
                variant="primary"
                type="submit"
                fullWidth={false}
                disabled={!hasMinimumInput || isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </Container>
      </section>

      {submitted && (
        <div className="contact-success-modal-overlay" role="dialog" aria-modal="true">
          <div className="contact-success-modal" ref={modalRef}>
            <button
              type="button"
              className="contact-success-close"
              onClick={closeModal}
              aria-label="Close success message"
            >
              ×
            </button>

            <div className="contact-success-icon">✓</div>
            <h3>Message Sent</h3>
            <p>Your message has been received and is now in our hands. We value your time and will reach out with care and priority.</p>
          </div>
        </div>
      )}

      {/* CTA */}
      <ContactCTASection />

        </>
      )}
    </div>
  );
};

export default Contact;