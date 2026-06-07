import React from "react";

import { motion } from "framer-motion";

import Container from "../layout/Container";

import Card from "../ui/Card";
import Grid from "../ui/Grid";
import SectionHeading from "../ui/SectionHeading";


const WhatWeBuildSection = () => {
  return (
    <section className="what-we-build-section">
      <Container>
        <SectionHeading
          tag="What We Build"
          title="For communities, startups, and products"
          description="Brevto Innovations Pvt Ltd designs and ships modern digital experiences — with Brevto as the flagship social platform."
        />

        <Grid columns={4}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Card>
              <h3>Social Platforms</h3>
              <p>Brevto as the flagship social product — trust-first and mobile-first.</p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          >
            <Card>
              <h3>Startup Websites</h3>
              <p>Brand-first website systems engineered for launch-ready startups.</p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.10 }}
          >
            <Card>
              <h3>SaaS Products</h3>
              <p>Scalable SaaS experiences with premium UX and reliable architecture.</p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
          >
            <Card>
              <h3>Branding Systems</h3>
              <p>Identity and design foundations that make growth feel inevitable.</p>
            </Card>
          </motion.div>
        </Grid>
      </Container>
    </section>
  );
};

export default WhatWeBuildSection;

