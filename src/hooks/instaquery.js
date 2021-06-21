// import { useStaticQuery, graphql } from "gatsby";
// import _get from "lodash/get";

// function instaQuery() {
//     const data = useStaticQuery(graphql`
//     query InstagramQuery {
//       allInstagramContent {
//         edges {
//           node {
//             localImage {
              
//               childImageSharp {
//                 fixed(width: 200, height: 200) {
//                   ...GatsbyImageSharpFixed
//                 }
//             }
//           }
//         }
//       }
//     }
//   }
//   `)
    
//     let arrayOfInstaImages = _get(data, 'allInstagramContent.edges')
//     return arrayOfInstaImages
// }
