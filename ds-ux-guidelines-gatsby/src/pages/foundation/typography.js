import React from "react"
import Layout from "../../ds-components/layout/layout"
import ContentHeader from "../../ds-components/content-header/contenHeader"
import SEO from "../../ds-components/seo"


const TypographyPage = () => (
  <Layout>
    <SEO title="CBP Design System | Typography" />
    <ContentHeader title="Typography" />

    <article>
      <p class="cbp-body">
        Having a well thought-out and managed typography system drives retention
        and understanding of information, and helps our users make the informed
        decisions that keep our country safe. This isn't simply what typeface we
        would like to use, but also the hierarchy, treatments, spacial
        relationships, and other refinements which augment legibility.
        <br /> <br />
        At its core, values such as consistency, accessibility, and legibility
        should be valued above all others.
      </p>
    </article>
  </Layout>
)

export default TypographyPage
