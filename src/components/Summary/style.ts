import styled from 'styled-components';

export const Container = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;

  padding: 0 1rem;

  display: grid;
  grid-template-areas:"entrada saida total";

  div {
    background: var(--white);
    border-radius: 5px;
    padding: 1rem;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      display: block;
    }

    &.total {
      background-color: var(--green);
      color: var(--white);
    }

    div.total {
      grid-area: total;
    }

    div.entrada {
      grid-area: entrada;
    }

    div.saida {
      grid-area: saida;
    }
  }

  /* RESPONSIVIDADE DO CONTAINER */

  @media (max-width: 650px) {
    grid-template-areas:"entrada saida" "total .";
    gap: 1rem;

    strong {
      font-size: 1.125rem;
      margin-top: 1.25rem;
    }
  }

  @media (min-width: 651px) and (max-width: 775px) {
    gap: 1.5rem;

    strong {
      font-size: 1.25rem;
      margin-top: 1.5rem;
    }
  }

  @media (min-width: 776px) {
    gap: 2rem;

    strong {
      font-size: 1.5rem;
      margin-top: 2rem;
    }

    div header span {
      font-size: 1.25rem;
    }
  }
`;