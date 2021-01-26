import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  input {
    width: 50%;
    padding: 12px 36px;
    background-color: transparent;
    transition: transform 250ms ease-in-out;
    font-size: 0.9em;
    color: white;
    border-radius: 50px;
    border: 1px solid white;
    transition: all 250ms ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;

    &::placeholder {
      color: white;
    }

    &:hover,
    &:focus {
      padding: 12px 38px;
      outline: 0;
      border: 1px solid transparent;
      border-bottom: 1px solid white;
      border-radius: 0;
    }
  }

  svg {
    margin-top: 3px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    color: white;
  }

  .clear {
    z-index: 1;
    margin-left: -30px;
  }

  button {
    z-index: 1;
    margin-right: -30px;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;
