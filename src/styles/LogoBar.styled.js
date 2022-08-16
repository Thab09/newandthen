import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const Logo = styled.h1`
  font-size: 38px;
  color: ${(props) => props.theme.primary};
`;

export const Toggle = styled.button`
  cursor: pointer;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.primary};
  &:focus {
    outline: none;
  }
  transition: all 0.1s ease;
`;
