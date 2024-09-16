import React from "react";
import styled from "styled-components";
import Icon from "../Icon";

interface Props {
  message: string;
}

function ErrorAlert({ message }: Props) {
  return (
    <Alert>
      <Icon id="warning" size={17} color="red" strokeWidth={1.2} />
      {message}
    </Alert>
  );
}

const Alert = styled.span`
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: ${14 / 16}rem;
  color: red;
  line-height: 1;
`;

export default ErrorAlert;
