import styled from 'styled-components';

export const Container = styled.section`
  margin: 1em;
`;

export const ButtonSearchContainer = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  padding: 0 1.2em;

  button {
    border: none;
    background: no;
    color: #ffffff;
    background: #4167ac;
    height: 2em;
    border-radius: 5px;
    width: 30%;
    margin: 1em 0;
    @media screen and (min-width: 600px) {
      & {
        width: 20%;
      }
    }

    @media screen and (min-width: 1200px) {
      & {
        width: 8%;
      }
    }
  }
`;
