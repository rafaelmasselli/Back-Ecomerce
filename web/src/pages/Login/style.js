import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const Formulario = styled.form`
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  margin-top: 70px;

  @media (max-width: 700px) {
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 250px;
  }

  p {
    margin-top: 5px;

    font-size: 20px;
  }
  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid blue;
    border-radius: 4px;
    box-sizing: border-box;
    color: black;
  }

  button {
    align-items: center;
    background-color: initial;
    background-image: linear-gradient(#464d55, #25292e);
    border-radius: 8px;
    border-width: 0;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    font-family: expo-brand-demi, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    font-size: 18px;
    height: 36px;
    justify-content: center;
    line-height: 1;
    margin: 0;
    outline: none;
    overflow: hidden;
    padding: 0 32px;
    text-align: center;
    text-decoration: none;
    transform: translate3d(0, 0, 0);
    transition: all 150ms;
    vertical-align: baseline;
    white-space: nowrap;
    margin-top: 30px;

    &:disabled {
      pointer-events: none;
    }

    &:hover {
      box-shadow: rgba(0, 1, 0, 0.2) 0 2px 8px;
      opacity: 0.85;
    }
    &:active {
      outline: 0;
    }
  }

  h3 {
    margin-top: 20px;
  }
`;

export const Flex = styled.div`
  margin-top: 10px;
`;

export const RegisterLink = styled(Link)`
  margin: 10px;
  font-size: 20px;
`;
