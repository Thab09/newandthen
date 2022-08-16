import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 20px;
  h1 {
    font-size: 38px;
    padding: 30px 0px 0px 0px;
  }
  .nav {
    margin-top: 5px;
    padding: 4px 0px;
    border-top: 2.5px solid ${(props) => props.theme.primary};
    border-bottom: 2.5px solid ${(props) => props.theme.primary};
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.primary};
    .links {
      display: flex;
      h4 {
        padding-right: 35px;
      }
    }
    h4 {
      font-size: 18px;
      &:hover {
      }
    }
    @media (max-width: 500px) {
      .date {
        display: none;
      }
    }
  }
`;
