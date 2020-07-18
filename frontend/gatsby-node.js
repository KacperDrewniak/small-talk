const path = require(`path`)

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;
    return graphql(`  
   query  {
      allStrapiCategories {
        edges {
          node {
            id
            title
            articles {
              title
              id
            }
          }
        }
      }
      allStrapiArticles {
        edges {
          node {
            id
            title
            description
            created
          }
        }
      }
    }
    `).then(res => {
        const categories = res.data.allStrapiCategories.edges;
        const articles = res.data.allStrapiArticles.edges;


        categories.forEach(category => {
            const {title} = category.node;
            createPage({
                path: `/category/${title}`,
                component: path.resolve(`./src/templates/category.js`),
                context: {
                    name: title,
                },

            })
        })
        articles.forEach(article => {
            const {title} = article.node;
            createPage({
                path: `/article/${title}`,
                component: path.resolve(`./src/templates/category.js`),
                context: {
                    name: title,
                },

            })
        })
    })
}