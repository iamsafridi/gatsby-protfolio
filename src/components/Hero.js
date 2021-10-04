import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import resume from "../assets/Shahid Afridi Resume.pdf"
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "man.png" }) {
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
            <h1>i'm afridi</h1>
            <h4>web developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <a href={resume} download="CV.pdf" className="btnr">
              resume
            </a>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
