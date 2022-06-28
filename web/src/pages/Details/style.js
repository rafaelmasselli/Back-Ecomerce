import styled from "styled-components";

export const Image = styled.img`
  height: 500px;
  width: 500px;
  margin-top: 20px;
  @media (max-width: 812px) {
    height: 300px;
    width: 300px;
  }
`;

export const DetalhesX = styled.div`
  text-align: center;
  p {
    font-size: 22px;
    margin-top: 10px;
  }

  h3 {
    margin-top: 30px;
    font-size: 48px;
  }
`;
export const Interface = styled.div`
  border-radius: 10px;
  display: inline-block;
`;

export const PriceCarrinho = styled.div`
  margin: 50px;
  display: inline-block;
  img {
    max-width: 50px;
  }
`;
export const ImageDireta = styled.div`
  display: inline-block;
`;
