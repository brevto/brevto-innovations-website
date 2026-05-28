import React from "react";

import Container from "../layout/Container";

import Card from "../ui/Card";
import Grid from "../ui/Grid";
import SectionHeading from "../ui/SectionHeading";
import Tag from "../ui/Tag";

const BlogPreviewSection = () => {
  return (
    <section className="blog-preview-section">

      <Container>

        <SectionHeading
          center={true}
          tag="Insights"
          title="Latest Articles & Thought Leadership"
        />

        <Grid columns={3}>

          <Card>

            <Tag>Startup</Tag>

            <h3>
              Building Premium Startup Websites
            </h3>

            <p>
              Strategies for modern startup presentation
              and digital credibility.
            </p>

          </Card>

          <Card>

            <Tag>Design</Tag>

            <h3>
              Why Product-Led Design Matters
            </h3>

            <p>
              Understanding modern UX systems
              for scalable digital products.
            </p>

          </Card>

          <Card>

            <Tag>Technology</Tag>

            <h3>
              The Future of Web Experiences
            </h3>

            <p>
              Exploring immersive frontend systems
              and startup-focused execution.
            </p>

          </Card>

        </Grid>

      </Container>

    </section>
  );
};

export default BlogPreviewSection;