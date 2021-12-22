import { useContext } from 'react';
import { TransactionContext } from '../../context/Transaction';
import { formatCurrency } from '../../utils/formatCurrency';
import { Container } from './style';

export function BoxTransactions() {
  const { transactions } = useContext(TransactionContext);

  return(
    <Container>
      {transactions.map(transaction => (
        <div key={transaction.id}>
          <strong>{transaction.title}</strong>
          <p className={transaction.type}>
            {transaction.type === "withdraw" 
            ? `- ${formatCurrency(transaction.value)}` 
            : formatCurrency(transaction.value)}
          </p>
          <span>
            {Intl.DateTimeFormat("pt-br").format(new Date(transaction.createdAt))}
          </span>
        </div>
      ))}
    </Container>
  )
}