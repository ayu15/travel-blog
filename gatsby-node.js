const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const fiftyFiftyTemplate = path.resolve(`src/templates/fifty-fifty/index.tsx`);
    const sideMasonryTemplate = path.resolve(`src/templates/side-masonry/index.tsx`);
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                template
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return reject(result.errors);
      }
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        switch (node.frontmatter.template) {
          case 'fifty-fifty':
            createPage({
              path: node.fields.slug,
              component: fiftyFiftyTemplate,
              context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                pathSlug: node.fields.slug
              }
            });
            break;
          case 'side-masonry':
            createPage({
              path: node.fields.slug,
              component: sideMasonryTemplate,
              context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                pathSlug: node.fields.slug
              }
            });
          default:
            break;
        }
      });
      resolve();
    });
  });
};
