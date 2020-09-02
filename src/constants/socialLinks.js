import React from "react"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"
import { AiFillInstagram, AiFillGithub } from "react-icons/ai"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/rifqiea",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/Rifqie_Akma?s=09",
  },
  {
    id: 2,
    icon: <AiFillInstagram className="social-icon"></AiFillInstagram>,
    url: "https://t.co/90uexxD1Om?amp=1",
  },
  {
    id: 3,
    icon: <AiFillGithub className="social-icon"></AiFillGithub>,
    url: "https://github.com/rQie",
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
