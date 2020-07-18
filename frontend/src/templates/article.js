import React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo'

export default ({pathContext}) => {
    console.log(pathContext);
    return (
        <Layout>
            <SEO title="category"/>
            <h1>Kategoria</h1>
        </Layout>
    )
}