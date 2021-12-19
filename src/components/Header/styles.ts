import styled from 'styled-components';

export const Container = styled.header`
  max-width: var(--max-width);

  margin: 0 auto;
  padding: 2rem 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
 
  h2 {
    font-family: 'Acme', sans-serif;
    color: #ffffff;
    font-size: 1.75rem;
  }

  button {
    background: #002C5A;
    border-radius: 5px;

    color: var(--white);
    font-size: 1rem;

    padding: 0.6875rem 2rem;
  }
`;