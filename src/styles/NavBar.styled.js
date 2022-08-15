import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  h1 {
    font-size: 38px;
    padding: 30px 0px 0px 0px;
  }
  .nav {
    margin-top: 10px;
    padding: 4px 0px;
    border-top: 2.5px solid;
    border-bottom: 2.5px solid;
    display: flex;
    justify-content: space-between;
    color: #121212;
    .links {
      display: flex;
      h4 {
        padding-right: 25px;
      }
    }
    h4 {
      font-size: 16px;
      &:hover {
      }
    }
  }
`;
