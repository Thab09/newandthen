import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
  h1 {
    padding: 30px 0px 0px 0px;
  }
  .nav {
    margin-top: 1rem;
    padding: 4px 0px;
    border-top: 2.5px solid;
    border-bottom: 2.5px solid;
    display: flex;
    color: #121212;
    h4 {
      padding-right: 15px;
      &:hover {
        color: #000000;
      }
    }
  }
`;
