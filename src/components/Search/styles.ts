import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  input {
    width: 50%;
    padding: 12px 24px;
    background-color: transparent;
    transition: transform 250ms ease-in-out;
    font-size: 0.9em;
    line-height: 18px;
    color: white;
    border-radius: 50px;
    border: 1px solid white;
    transition: all 250ms ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;

    &::placeholder {
      color: white;
      letter-spacing: 1.5px;
    }

    &:hover,
    &:focus {
      padding: 12px 0;
      outline: 0;
      border: 1px solid transparent;
      border-bottom: 1px solid white;
      border-radius: 0;
      background-position: 100% center;
    }
  }

  .search {
    width: 22px;
    height: 22px;
    margin-left: -32px;
    cursor: pointer;
    color: white;
  }
`;
