import { Container } from './style';

export function BoxTransactions() {
  return(
    <Container>
      <div>
        <strong>Aluguel</strong>
        <p className="deposit">R$ 1.000,00</p>
        <span>12/12/2012</span>
      </div>
      <div>
        <strong>Aluguel</strong>
        <p className="withdraw">- R$ 1.000,00</p>
        <span>12/12/2012</span>
      </div>
      <div>
        <strong>Aluguel</strong>
        <p className="withdraw">- R$ 1.000,00</p>
        <span>12/12/2012</span>
      </div>
    </Container>
  )
}