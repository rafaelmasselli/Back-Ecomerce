import styled from "styled-components";

export const Geral = styled.div`
  h2 {
    font-size: 29px;
    margin-top: 50px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
  h3 {
    margin-top: 20px;
    @media (max-width: 768px) {
      font-size: 20px;
    }
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
    padding: 0 22px;
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
`;

export const Container = styled.div`
  text-align: center;
  font-size: 29px;
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  margin: 10px;

  &:hover {
    width: 65px;
    height: 65px;
  }
`;

export const Logo = styled.img`
  margin-top: 100px;
  width: 200px;
  height: 200px;
  text-align: center;
  border-radius: 100px;
`;
