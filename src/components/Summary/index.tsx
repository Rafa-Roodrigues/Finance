import { useContext } from 'react';
import {BsArrowDownCircle, BsArrowUpCircle} from 'react-icons/bs';
import {CgDollar} from 'react-icons/cg';
import { TransactionContext } from '../../context/Transaction';
import { formatCurrency } from '../../utils/formatCurrency';

import { Container } from './style';

export function Summary() {
  const { transactions } = useContext(TransactionContext);

  let summary = {
   total: 0,
   deposit: 0,
   withdraw: 0
  }

  transactions.forEach((transaction) => {
    if(transaction.type === "deposit") {
      summary.deposit += transaction.value
    } else {
      summary.withdraw += transaction.value
    }

    summary.total = summary.deposit - summary.withdraw
  });

  return (
    <Container>
      <div className="entrada">
        <header>
          <span>Entrada</span>
          <BsArrowUpCircle color="#4caf50" size={22}/>
        </header>
        <strong>{formatCurrency(summary.deposit)}</strong>
      </div>
      <div className="saida">
        <header>
          <span>Saída</span>
          <BsArrowDownCircle color="#E62E4D" size={22}/>
        </header>
        <strong>{formatCurrency(summary.withdraw)}</strong>
      </div>
      <div className="total">
        <header>
          <span>Total</span>
          <CgDollar size={20}/>
        </header>
        <strong>{formatCurrency(summary.total)}</strong>
      </div>
    </Container>
  )
}