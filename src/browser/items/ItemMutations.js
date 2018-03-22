import gql from 'graphql-tag';

export const CreateItem = gql`
 mutation CreateItem{
  insertItem(name:"boob",description:"boobos",book:"TMG",pageNumber:435){
    id
  }
}
`;

export const CreateFormField = gql`
  mutation createFormField($createFormFieldInput: CreateFormFieldInput!) {
    createFormField(input: $createFormFieldInput) {
      field {
        id
      }
    }
  }
`;
