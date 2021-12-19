import styled from "styled-components";
import { Form, Field } from 'formik';
import { transparentize } from 'polished';

export const Formulario = styled(Form)`
  width: 100%;

  background: #ffffff;
  padding: 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    h2 {
      font-size: 1.125rem;
    }

    button {
      display: flex;
      align-items:center;
      justify-content: center;

      background: transparent;

      padding: 0.5rem;
    }
  }

  div {
    margin-bottom: 0.5rem;
  }

  button[type="submit"] {
    width: 100%;
    height: 3rem;

    background: var(--green);
    border-radius: 5px;
    transition: filter 0.2s;

    margin-top: 1rem;

    font-size: 0.9375rem;
    font-weight: bold;
    color: var(--white);

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
export const Input = styled(Field)`
  width: 99%;
  height: 3rem;

  font-size: 1rem;
  color: #333333;

  border-radius: 5px;
  border: 2px solid #d7d7d7;
  background:#ffffff;

  padding-left: 1rem;
  outline: 0;

  &::placeholder {
    color: #333333;
  } 
`;
export const Error = styled.span`
  font-size: 0.875rem;
  color: var(--red);
  padding-left: 0.5rem;
`;

export const BoxTypeTransaction = styled.div`
  display: flex;
`;


interface ButtonProps {
  typeTransaction: string;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 3rem;

  font-size: 15px;
  color: #333333;

  border-radius: 5px;
  background: ${({typeTransaction}) => typeTransaction 
    ? transparentize(0.6, typeTransaction) 
    : 'transparent'
  };

  border: 2px solid ${({typeTransaction}) => typeTransaction 
    ? 'transparent' 
    : '#d7d7d7'
  };

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 0.875rem;
  }

  &:first-child {
    margin-right: 1rem;
  }
`;