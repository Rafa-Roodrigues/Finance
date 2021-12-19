import styled from 'styled-components';

export const Container = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;
  margin-top: 4rem;
  padding: 0 1rem;

  display: grid;
  gap: 1rem;

  div {
    padding: 1.125rem;
    background: #ffffff;
    border-radius: 5px;
    
    display: grid;
    font-weight: bold;

    strong {
      font-size: 1rem;
    }

    p.deposit {
      color: var(--green);
    }

    p.withdraw {
      color: var(--red);
    }

    span {
      color: var(--gray);
    }

    p, strong, span {
      display: flex;
      align-items: center;
    }
    
  }

  /* RESPONSIVIDADE DO CONTAINER E O CARD */

  @media (max-width: 400px) {
    grid-template-columns: 1fr;

    div {
      grid-template-columns: 1fr;

      p {
        padding: 1rem 0;
      }
    }
  }

  @media (min-width: 401px) {
    grid-template-columns: 1fr 1fr;

    div {
      grid-template-columns: 1fr;

      p {
        padding: 1rem 0;
      }
    }
  }

  @media (min-width: 685px) {
    grid-template-columns: 1fr;

    div {
      grid-template-columns: 4fr 1fr 1fr;

      p {
        padding: 0;
      }
    }
  }
`;