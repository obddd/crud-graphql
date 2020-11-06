import { gql } from "@apollo/client";

export const createMessageMutation = gql`
  mutation createMessage($data: messageInput) {
    createMessage(input: $data) {
      message
      id
    }
  }
`;
export const getAllMessages = gql`
  query getAllMessages {
    getAllMessages {
      message
      id
    }
  }
`;
