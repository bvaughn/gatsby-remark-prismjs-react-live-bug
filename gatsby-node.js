const {resolve} = require('path');

exports.createPages = async ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators;

  const template = resolve('./src/templates/docs.js');

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);

    reject(allMarkdown.errors);
  }

  allMarkdown.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug;

    createPage({
      path: slug,
      component: template,
      context: {
        slug,
      },
    });
  });
};

exports.onCreateNode = ({node, boundActionCreators, getNode}) => {
  const {createNodeField} = boundActionCreators;

  switch (node.internal.type) {
    case 'MarkdownRemark':
      const {relativePath} = getNode(node.parent);

      const slug = `/${relativePath.replace('.md', '.html')}`;

      createNodeField({
        node,
        name: 'slug',
        value: slug,
      });
      return;
  }
};
