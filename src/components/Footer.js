import React from "react"
import SocialLink from "../constants/socialLinks"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLink styleClass="footer-links"></SocialLink>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span> Qie </span>
          all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
