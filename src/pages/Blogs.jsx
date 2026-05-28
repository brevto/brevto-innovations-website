import React from "react";

import Container from "../components/layout/Container";

import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Grid from "../components/ui/Grid";
import Tag from "../components/ui/Tag";

import blogs from "../data/blogs";

import "../styles/blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-page">

      <section className="blogs-hero">

        <Container>

          <SectionHeading
            center={true}
            tag="Blogs"
            title="Insights, Technology & Product Thinking"
            description="Thought leadership around startups, web experiences, and digital products."
          />

        </Container>

      </section>

      <section className="blogs-grid-section">

        <Container>

          <Grid columns={3}>

            {blogs.map((blog) => (

              <Card key={blog.id}>

                <Tag>
                  {blog.category}
                </Tag>

                <h3>
                  {blog.title}
                </h3>

                <p>
                  {blog.excerpt}
                </p>

                <div className="blog-meta">

                  <span>
                    {blog.author}
                  </span>

                  <span>
                    {blog.date}
                  </span>

                </div>

              </Card>

            ))}

          </Grid>

        </Container>

      </section>

    </div>
  );
};

export default Blogs;