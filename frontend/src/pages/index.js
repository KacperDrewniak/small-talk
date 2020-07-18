import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from "gatsby"

const IndexPage = ({data}) => {
    console.log(data)
    return (
        <Layout>
            <SEO title="Home"/>
            <h1>Hi people</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
        </Layout>
    )
}

export const query = graphql`
  query {
     strapiCategories {
        id
        title
      }
      strapiArticles {
        id
        title
        description
      }
  }
`

export default IndexPage
