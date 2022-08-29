export const projectPathQuery = `
  query ProjectPathQuery($path: ID!) {
    project(fullPath: $path) {
      repository {
        tree(ref: "master", recursive: true) {
          blobs {
            nodes {
              path
            }
          }
        }
      }
    }
  }
`;

export const projectRawBlobQuery = `
  query ProjectRawBlobQuery($path: ID!, $paths: [String!]!, $last: Int) {
    project(fullPath: $path) {
      repository {
        blobs(ref: "master", paths: $paths, last: $last) {
          nodes {
            rawBlob
            rawTextBlob
            fileType
          }
        }
      }
    }
  }
`;
