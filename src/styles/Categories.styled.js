import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryContainer = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const CategoryCard = styled(Link)`
  border: 2px solid #bababa;
  text-align: center;
  font-size: 18px;
  padding: 15px 0px;
  opacity: 0.9;
  &:hover {
    opacity: 1;
    border: 2px solid #000000;
  }
`;
