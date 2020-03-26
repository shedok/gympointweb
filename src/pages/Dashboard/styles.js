import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: auto;

  display: flex;
  flex-direction: column;

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    text {
      text-align: left;
      margin-left: 15px;
      font-size: 24px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.8);
    }

    nav {
      display: flex;
      align-items: center;
      align-self: center;

      button {
        height: 32px;
        width: 150px;
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

      input {
        background: #fff;
        margin: 10px 0 10px 6px;
        border: 1px solid;
        border-color: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        height: 32px;

        &::placeholder {
          color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
`;

export const Table = styled.div`
  /* max-width: 900px; */
  /* margin: auto; */

  display: flex;
  flex-direction: column;
  background: #fff;
  margin-top: 30px;
  border-radius: 4px;
  align-items: left;

  header {
    display: flex;
    justify-content: space-between;
    padding: 10px;

    text {
      text-align: left;
      font-size: 24px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.8);
    }
  }
`;

export const List = styled.div`
  list-style: none;
  margin-top: 5px;
  background: #fff;
  margin: 0 10px 0 10px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
