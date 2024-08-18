import PropTypes from "prop-types";
import { Container } from "./styles";

import xCircleIcon from "../../../assets/images/icons/x-circle.svg";
import checkCircleIcon from "../../../assets/images/icons/check-circle.svg";

export default function ToastMessage({ type, message }) {
  return (
    <Container type={type}>
      {type === "danger" && <img src={xCircleIcon} alt="danger" />}
      {type === "success" && <img src={checkCircleIcon} alt="success" />}
      <strong>{message}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["default", "error", "success"])
};

ToastMessage.defaultProps = {
  type: "default"
};
