import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  display: block;
  animation: ${rotate} 1.4s infinite linear;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 50px auto;
  background: #4fbf4f;
  background: linear-gradient(
    to right,
    #4fbf4f 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  transform: translateZ(0);

  ::after {
    background: white;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

export default Loader;
