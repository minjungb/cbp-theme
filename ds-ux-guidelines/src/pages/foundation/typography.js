import React from "react"
import Layout from "../../ds-components/layout/layout"
import ContentHeader from "../../ds-components/content-header/contentHeader"
import SEO from "../../ds-components/seo"


const TypographyPage = () => (
  <Layout>
    <SEO title="CBP Design System | Typography" />
    <ContentHeader title="Typography" contentType="foundation"/>

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

      <section class="section-spacing">
      <h2 class="cbp-heading-2 section-pad-temp"> Usage </h2>

      <h5 class="cbp-heading-5">Using the 14px Base Scale</h5>
      <br/>

      <h6 class="cbp-heading-6">Pros</h6><br/>
      <ul>
        <li>- Minimal disruption to existing site architectures.</li>
        <li>- A lot of heading values sync up with existing theme values.</li>
        <li>- Keeps base value on the low end of the equation to help our more dense applications.</li>
      </ul>

      <br/>

      <h6 class="cbp-heading-6">Cons</h6><br/>
      <ul class="section-pad-temp">
        <li>- Because the base value is on the lower side (default is 16px), some of our users might become dependent on zoom features.</li>
        <li>- There is still not a lot of size variation between text levels (Although this can be both a pro and a con to have them match up).</li>
      </ul>

      <h5 class="cbp-heading-5">Line Height</h5><br/>
      <p class="cbp-body section-pad-temp">
        Human beings operate on identifying patterns. The Principle of Repetition brings familiarity to different items in a layout. It gives the layout structure.
        When we mix this with typography, we enhance overall legibility because the user's eye is allowed to flow smoothly and is not interrupted by unexpected and jarring relationships between items in the layout.
        <br/><br/>
        This is mostly manifested in what is referred to as the "Baseline Grid". This grid is different from the various other terms referred to as grid in web design in that it specifically refers to a set of 
        "invisible" lines that go down the page to which all layout elements are aligned. Because communication of information is at the heart of all websites and applications, this grid is tightly tied
        to our typography settings. Specifically to the line-height of body copy (because it is the base unit in our typographical system).
        <br/><br/>
        Earlier we established that our body copy will be 14px. It's a good industry standard practice to use a 4px baseline grid, meaning all spacing will be a multiple or factor of 4.
      </p>
    </section>
    </article>
  </Layout>
)

export default TypographyPage
