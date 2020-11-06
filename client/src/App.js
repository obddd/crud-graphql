import React, { createRef } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { createMessageMutation, getAllMessages } from "./gqlSchema/index";

function App() {
  const messageValue = createRef();
  const [addMessage] = useMutation(createMessageMutation);
  
  const { data, error } = useQuery(getAllMessages);
  console.log("data", data, "error", error);

  const submit = () => {
    let message = messageValue.current.value;
    addMessage({ variables: { data: { message } } })
      .then(data => console.log("response", data))
      .catch(error => console.log("response", error));
  };

  return (
    <div>
      <input ref={messageValue} placeholder="Add Message" />
      <button onClick={submit}>Add!</button>
    </div>
  );
}

export default App;
