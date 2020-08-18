import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"

export default ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="feutured projects" showLink />
      <Blogs blogs={blogs} title="latest blog" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { feutured: { eq: true } }) {
      nodes {
        github
        id
        url
        title
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: { order: DESC, fields: date }, limit: 3) {
      nodes {
        content
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
