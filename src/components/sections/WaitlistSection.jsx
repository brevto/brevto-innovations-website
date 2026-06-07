import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import Container from "../layout/Container";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

import "../../styles/waitlist.css";


// NOTE: Firebase Firestore is preferred, but optional.
// This implementation uses localStorage fallback to avoid backend dependency.
const WAITLIST_KEY = "brevto_waitlist_emails";

const isValidEmail = (email) => {
  // Simple, pragmatic validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
};

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "idle", // idle | success | error
    message: "",
  });

  const existingEmails = useMemo(() => {
    try {
      const raw = localStorage.getItem(WAITLIST_KEY);
      if (!raw) return new Set();
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr)) return new Set();
      return new Set(arr);
    } catch {
      return new Set();
    }
  }, [status.type]);

  useEffect(() => {
    // keep in sync when status changes to success/error
    // (existingEmails memo depends on status.type)
  }, [existingEmails]);

  const persistEmail = (normalizedEmail) => {
    const current = (() => {
      try {
        const raw = localStorage.getItem(WAITLIST_KEY);
        if (!raw) return [];
        const arr = JSON.parse(raw);
        return Array.isArray(arr) ? arr : [];
      } catch {
        return [];
      }
    })();

    const next = Array.from(new Set([...current, normalizedEmail]));
    localStorage.setItem(WAITLIST_KEY, JSON.stringify(next));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setStatus({ type: "error", message: "Email is required." });
      return;
    }

    if (!isValidEmail(normalizedEmail)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    if (existingEmails.has(normalizedEmail)) {
      setStatus({ type: "error", message: "You’re already on the early access list." });
      return;
    }

    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      // Preferred: Firebase Firestore
      // If you provide a Firebase config + initializeFirestore, you can post here.
      // Keeping as a fallback-only implementation by default.
      //
      // Example pseudo-code:
      // await addDoc(collection(db, "waitlist"), { email: normalizedEmail, createdAt: serverTimestamp() })

      await new Promise((r) => setTimeout(r, 650));

      persistEmail(normalizedEmail);

      setStatus({
        type: "success",
        message: "Thanks! You’re in. Watch your inbox for early access updates.",
      });

      setEmail("");
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again in a moment.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="waitlist-section">
      <Container>
        <SectionHeading
          tag="Early Access"
          title="Join the Brevto waitlist"
          description="Get notified when Brevto’s product is ready — plus early access and launch updates."
        />

        <div className="waitlist-card-wrap">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <Card className="waitlist-card">
              <form className="waitlist-form" onSubmit={onSubmit}>
              <Input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />

              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? "Joining…" : "Join Early Access"}
              </Button>

              {status.type !== "idle" && (
                <div
                  className={`waitlist-status ${
                    status.type === "success" ? "success" : "error"
                  }`}
                  role="status"
                >
                  {status.message}
                </div>
              )}

              <p className="waitlist-privacy">
                By joining, you agree to receive early access updates from Brevto.
                We respect your inbox.
              </p>

              <div className="waitlist-dup-hint">
                Duplicate prevention is enabled on this device.
              </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WaitlistSection;

