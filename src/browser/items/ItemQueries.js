import gql from 'graphql-tag';

export const GetItemsList = gql`
   query ItemsList{
    inventory{
    data{
      name
      id
      description
      book
      pageNumber
    }
  }
  }
`;
