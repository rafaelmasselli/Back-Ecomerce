import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #2e3133;
`;
export const Bar = styled.li`
  float: left;

  a {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 20px 10px;
    text-decoration: none;
    &:hover {
      background-color: #dcdcdc;
    }
  }
`;
export const Links = styled.a`
  display: block;
  padding: 1px;
  background-color: black;
`;

export const Image = styled.img`
  width: 200px;
  height: 50px;
  margin-right: 90px;

  @media (max-width: 700px) {
    width: 190px;
    height: 40px;
    margin-right: 5px;
  }
`;
