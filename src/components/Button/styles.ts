import styled from "styled-components";

export const Container = styled.div`
  button {
    width: 365px;
    height: 40px;
    border-radius: 8px;
    border: 0;
    background-color: #4395d8;
    color: #fefefe;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    transition: all 0.2s ease-in;

    &:hover {
      background-color: #3672a3;
    }

    &:active {
      opacity: 0.8;
    }
  }
`;
