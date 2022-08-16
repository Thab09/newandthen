import styled from "styled-components";

export const Foot = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding: 15px 0;
  border-top: 2px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
`;
