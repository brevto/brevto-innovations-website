import React from "react";

import { motion } from "framer-motion";

import Container from "../layout/Container";

import Card from "../ui/Card";
import Grid from "../ui/Grid";
import SectionHeading from "../ui/SectionHeading";


const steps = [
  { id: "discovery", title: "Discovery", desc: "Align goals, users, and success metrics." },
  { id: "design", title: "Design", desc: "Create premium UX/UI and product architecture." },
  { id: "development", title: "Development", desc: "Build scalable web experiences and systems." },
  { id: "testing", title: "Testing", desc: "Validate quality with performance and UX checks." },
  { id: "deployment", title: "Deployment", desc: "Launch with reliability, monitoring, and SEO basics." },
  { id: "growth", title: "Growth", desc: "Improve conversion through iteration and insights." },
];

const ProcessPipelineSection = () => {
  return (
    <section className="process-pipeline-section">
      <Container>
        <SectionHeading
          tag="Process"
          title="From idea to launch"
          description="A clear, repeatable pipeline designed for startups and product teams."
        />

        <div className="process-grid">
          {steps.map((s) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <Card className="process-step">
                <div className="process-step-title">{s.title}</div>
                <p className="process-step-desc">{s.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProcessPipelineSection;

