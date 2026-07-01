import React from "react";

import PageSkeleton from "../components/ui/PageSkeleton";
import usePageSkeleton from "../hooks/usePageSkeleton";

import Container from "../components/layout/Container";
import Grid from "../components/ui/Grid";
import Tag from "../components/ui/Tag";

import blogs from "../data/blogs";

import "../styles/blogs.css";

const Blogs = () => {
  const isLoading = usePageSkeleton();

  if (isLoading) return <PageSkeleton variant="cards" />;

  return (
    <div className="blogs-page">

      {/* ========================================
          HERO
      ======================================== */}

      <section className="blogs-hero">

        <Container>

          <div className="blogs-hero-content">

            {/* <span className="blogs-label">
              JOURNAL
            </span> */}

            <h1 className="blogs-title">
              <span className="hero-filled-text">Ideas worth</span>{" "}
              <span className="outline-text">building.</span> <br />
              <span className="hero-filled-text">Stories worth</span>{" "}
              <span className="outline-text">sharing.</span>
            </h1>

            <p className="blogs-description">
              Insights from our work building startups,
              brands, digital products, and modern web
              experiences.
            </p>

          </div>

        </Container>

      </section>

      {/* ========================================
          BLOG GRID
      ======================================== */}

      <section className="blogs-grid-section">
        <span className="blogs-tag">Blogs</span>

        <Container>

          <Grid columns={3}>

            {blogs.map((blog) => (

              <a
                key={blog.id}
                href={blog.url}
                className="blog-card-link"
                aria-label={`Read ${blog.title}`}
              >
                <article className="blog-card">

                  {/* IMAGE */}

                  <div className="blog-image-wrapper">

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="blog-image"
                    />

                    <div className="blog-image-overlay" />

                    <Tag className="blog-category">
                      {blog.category}
                    </Tag>

                  </div>

                  {/* CONTENT */}

                  <div className="blog-content">

                    <h3 className="blog-title-card">
                      {blog.title}
                    </h3>

                    <p className="blog-excerpt">
                      {blog.excerpt}
                    </p>

                    <div className="blog-meta">

                      <span>
                        {blog.date}
                      </span>

                      <span>•</span>

                      <span>
                        {blog.readTime}
                      </span>

                    </div>

                  </div>

                </article>
              </a>

            ))}

          </Grid>

        </Container>

      </section>

    </div>
  );
};

export default Blogs;