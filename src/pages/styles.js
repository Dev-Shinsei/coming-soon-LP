import styled from "styled-components";
import backgroundImg from "../assets/constructor-worker.jpg";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Container = styled.form`
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
  h2 {
    font-size: 24px;
    margin-block: 48px;
  }
  a {
    margin-top: 124px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
