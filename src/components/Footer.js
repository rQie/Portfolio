import React from "react"
import SocialLink from "../constants/socialLinks"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLink styleClass="footer-links"></SocialLink>
        <h4>
          <span> Rifqie Akma </span>
          copyright&copy;{new Date().getFullYear()}
        </h4>
      </div>
    </footer>
  )
}

export default Footer
