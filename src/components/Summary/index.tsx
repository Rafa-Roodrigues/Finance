import {BsArrowDownCircle, BsArrowUpCircle} from 'react-icons/bs';
import {CgDollar} from 'react-icons/cg';

import { Container } from './style';

export function Summary() {
  return (
    <Container>
      <div className="entrada">
        <header>
          <span>Entrada</span>
          <BsArrowUpCircle color="#4caf50" size={22}/>
        </header>
        <strong>R$ 1.000.000,00</strong>
      </div>
      <div className="saida">
        <header>
          <span>Saída</span>
          <BsArrowDownCircle color="#E62E4D" size={22}/>
        </header>
        <strong>R$ 1.000.000,00</strong>
      </div>
      <div className="total">
        <header>
          <span>Total</span>
          <CgDollar size={20}/>
        </header>
        <strong>R$ 1.000.000,00</strong>
      </div>
    </Container>
  )
}