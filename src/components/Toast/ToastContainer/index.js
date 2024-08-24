import { Container } from "./styles";

import ToastMessage from "../ToastMassage";
import { useState } from "react";

export default function ToastContainer() {
  const [message, setMessage] = useState([
    { id: Math.random(), type: "default", text: "Default toast!" },
    { id: Math.random(), type: "danger", text: "Error toast" },
    { id: Math.random(), type: "success", text: "Success toast" }
  ]);

  return (
    <Container>
      {message.map((item) => (
        <ToastMessage
          key={item.id}
          type={item.type}
          message={item.text}
        />
      ))}
    </Container>
  )
}
