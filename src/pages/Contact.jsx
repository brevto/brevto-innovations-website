import React from "react";

import Container from "../components/layout/Container";

import SectionHeading from "../components/ui/SectionHeading";
import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

import company from "../data/company";

import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-page">

      <section className="contact-hero">

        <Container>

          <SectionHeading
            center={true}
            tag="Contact"
            title="Let’s Build Something Great"
            description="Connect with us for product inquiries, startup websites, partnerships, and careers."
          />

        </Container>

      </section>

      <section className="contact-content-section">

        <Container>

          <div className="contact-grid">

            <Card className="contact-info">

              <h3>Business Contact</h3>

              <p>
                {company.emails.business}
              </p>

              <p>
                {company.emails.support}
              </p>

              <p>
                {company.location}
              </p>

            </Card>

            <Card className="contact-form-card">

              <form className="contact-form">

                <Input
                  placeholder="Your Name"
                />

                <Input
                  type="email"
                  placeholder="Email Address"
                />

                <Input
                  placeholder="Subject"
                />

                <TextArea
                  placeholder="Your Message"
                />

                <Button
                  variant="primary"
                  type="submit"
                >
                  Send Message
                </Button>

              </form>

            </Card>

          </div>

        </Container>

      </section>

    </div>
  );
};

export default Contact;