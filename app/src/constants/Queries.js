import gql from "graphql-tag";

export const GET_COMPANIES = gql`
  {
    companies {
      name
      logoUrl
      id
      createdAt
      websiteUrl
      jobs {
        title
        applyUrl
        isFeatured
      }
    }
  }
`;
