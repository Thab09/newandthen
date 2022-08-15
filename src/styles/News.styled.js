import styled, { css } from "styled-components";

export const NewsContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const Card = styled.div`
  overflow: hidden;
  height: 320px;
  padding: 10px;
  opacity: 0.9;
  cursor: pointer;
  border: 2px solid #bababa;
  img {
    height: 40%;
    width: 100%;
    object-fit: cover;
  }
  h4 {
    color: #121212;
    line-height: 120%;
    padding-top: 8px;
    padding-bottom: 5px;
    font-size: 18px;
  }
  h5 {
    font-size: 12px;
  }

  p {
    line-height: 135%;
    padding-top: 10px;
    font-size: 14px;
    color: #5a5a5a;
    font-weight: 500;
  }
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border: 2px solid #000000;
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
`;
