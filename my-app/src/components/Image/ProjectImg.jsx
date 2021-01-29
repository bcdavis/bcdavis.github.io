import React from 'react';
import Image from 'react-bootstrap/Image'
//import { StaticQuery, graphql } from 'gatsby';
//import PropTypes from 'prop-types';
//import Img from 'gatsby-image';

export default function ProjectImg(filename, alt) {
  //const imageFluid = image.node.childImageSharp.fluid;
  return <Image src={alt} fluid/>;

}
  // <StaticQuery
  //   query={graphql`
  //     query {
  //       images: allFile {
  //         edges {
  //           node {
  //             relativePath
  //             name
  //             childImageSharp {
  //               fluid(maxWidth: 1366) {
  //                 ...GatsbyImageSharpFluid
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `}
  //   render={(data) => {
  //     const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

  //     if (!image) return null;

//       const imageFluid = image.node.childImageSharp.fluid;
//       return <Img alt={alt} fluid={imageFluid} />;
//   //   }}
//   // />
// );

// ProjectImg.propTypes = {
//   filename: PropTypes.string,
//   alt: PropTypes.string,
// };

// export default ProjectImg;
