import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const Error = () => {
  return (
    <Layout>
      <Helmet title="error page  | Rifqie Akma" defer={false} />
      <main className="error-page">
        <div className="error-container">
          <h1>oops it`s error 404</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
