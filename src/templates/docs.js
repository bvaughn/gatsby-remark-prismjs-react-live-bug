import React from "react"

const BlogPostTemplate = ({data}) => (
  <div
    dangerouslySetInnerHTML={{
      __html: data.markdownRemark.html,
    }}
  />
);

export default BlogPostTemplate

export const pageQuery = graphql`
  query TemplateBlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`