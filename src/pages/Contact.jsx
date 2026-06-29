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

const Contact = () => {
  const isLoading = usePageSkeleton();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef(null);

  const validateField = (name, value) => {
    const trimmedValue = value.trim();

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const hasMinimumInput = Object.entries(formData).every(([name, value]) => {
    return validateField(name, value) === "";
  });

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
                Let&apos;s <span className="outline-text">Build</span>{" "}
                <br />
                <span className="hero-line-two">
                  Something <span className="outline-text">Great</span>
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

              <Button
                variant="primary"
                type="submit"
                fullWidth={false}
                disabled={!hasMinimumInput}
              >
                Send Message
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
            <h3>Message sent</h3>
            <p>Thanks for reaching out. We&apos;ll get back to you shortly.</p>
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