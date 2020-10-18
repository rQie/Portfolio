import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"
import SocialLink from "../constants/socialLinks"

export const query = graphql`
  {
    file(relativePath: { eq: "qie-img.PNG" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>RIFQIE AKMA</h1>
            <h4>freelance web and mobile development</h4>
            <Link to="/contact" className="btn">
              contcact me
            </Link>
            <SocialLink />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />;
      </div>
    </header>
  )
}

export default Hero
