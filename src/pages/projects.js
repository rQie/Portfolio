import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import SEO from "../components/SEO"

const projectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export default projectsPage

export const query = graphql`
  {
    allStrapiProjects {
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
  }
`
