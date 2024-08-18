import { Container } from "./styles";

import ToastMessage from "../ToastMassage";

export default function ToastContainer() {
  return (
    <Container>
      <ToastMessage message="Default toast!"/>
      <ToastMessage message="Error toast" type="danger" />
      <ToastMessage message="Success toast" type="success"/>
    </Container>
  )
}
