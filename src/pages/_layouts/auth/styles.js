import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackContet = styled.div`
  width: 360px;
  height: 448px;
  align-items: center;
  align-self: center;
  background: #fff;
  max-width: 315px;
  border-radius: 4px;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 30px;
  text-align: center;
  background: #fff;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }
  text {
    text-align: left;
    margin-left: 15px;
    font-size: 14px;
    font-weight: bold;
  }

  input {
    background: #fff;
    margin: 10px 15px 10px 15px;
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    height: 44px;
    padding: 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  span {
    color: #ff1a40;
    align-self: flex-start;
    margin: 0 0 0 14px;
    font-weight: bold;
  }

  button {
    margin: 10px 15px 10px 15px;
    height: 44px;
    background: #ee4d64;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#ee4d64')};
    }
  }
`;
