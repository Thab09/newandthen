import styled, { css } from "styled-components";

export const NewsContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme.card};
  overflow: hidden;
  height: 320px;
  padding: 15px;
  opacity: 0.9;
  cursor: pointer;

  transition: all 0.1s ease;

  border: 2px solid ${(props) => props.theme.secondary};
  img {
    height: 40%;
    width: 100%;
    object-fit: cover;
  }
  h4 {
    color: ${(props) => props.theme.primary};
    line-height: 120%;
    padding-top: 8px;
    padding-bottom: 5px;
    font-size: 18px;
  }
  h5 {
    font-size: 10px;
    font-weight: 400;
  }

  p {
    line-height: 135%;
    padding-top: 10px;
    font-size: 14px;
    color: ${(props) => props.theme.paragraph};
    font-weight: 500;
  }
  &:hover {
    border: 2px solid ${(props) => props.theme.primary};
    opacity: 1;
  }

  ${(props) =>
    props.catCard &&
    css`
      height: 200px;
      h4 {
        padding-top: 0;
      }
    `}
  @media (max-width: 1200px) {
    height: 350px;
    padding: 10px;
  }
  @media (max-width: 900px) {
    height: 300px;
    padding: 10px;
  }
  @media (max-width: 500px) {
    height: 300px;
    padding: 15px;
  }
`;
