import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id}>
      <article>
        <Image fluid={image.childImageSharp.fluid} className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

Blog.propTypes = {}

export default Blog
