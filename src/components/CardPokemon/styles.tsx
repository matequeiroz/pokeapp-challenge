import styled, { keyframes } from 'styled-components';

const animationFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  background: #312e38;
  margin: 0.5em 1em;
  border-radius: 10px;
  padding: 1em;
  height: 97%;
  animation: ${animationFade} 2s;

  &:hover {
    border: 1px solid #e6bc2f;
  }
`;

export const HeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 100px;
    width: 100px;
    margin-bottom: 10px;
  }

  h3 {
    font-family: 'Play', sans-serif;
    text-transform: capitalize;
    font-size: 1.5em;
  }
`;

export const BodyContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 2em 0;
`;

export const Abilities = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    text-align: center;
  }

  p {
    margin: 0.5em 0;
    background-color: #4168ad;
    font-family: 'Play', sans-serif;
    text-align: center;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    padding: 0.2em;
    width: 95%;
  }
`;

export const Types = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    text-align: center;
  }

  p {
    margin: 0.5em 0;
    background-color: #e6bc2f;
    font-family: 'Play', sans-serif;
    text-align: center;
    border-radius: 10px;
    color: #2a2a2a;
    font-weight: 700;
    padding: 0.2em;
    width: 75%;
  }
`;

export const Forms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    img {
      height: 4em;
      width: 4em;
    }
  }
`;

export const HeightAndWight = styled.div`
  display: flex;
  flex-direction: row;

  p {
    padding: 1em;
    font-weight: 100;
  }
`;
