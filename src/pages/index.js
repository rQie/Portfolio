import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"

export default () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
    </Layout>
  )
}
