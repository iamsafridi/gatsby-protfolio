import React from "react"
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-iconfb"></FaFacebookSquare>,
    url: "https://www.facebook.com/Iamsafridi",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-iconlk"></FaLinkedin>,
    url: "https://www.linkedin.com/in/iamsafridi",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icongit"></FaGithubSquare>,
    url: "https://github.com/iamsafridi",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
