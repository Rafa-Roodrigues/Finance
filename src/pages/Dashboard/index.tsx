import { useContext } from "react";
import { BoxTransactions } from "../../components/BoxTransactions";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionContext } from "../../context/Transaction";

import { RegisterTransaction} from './style';

export function Dashboard() {
  const {transactions} = useContext(TransactionContext);

  return (
    <>
      <Header/>
     {(transactions.length > 0) ? (
       <>
        <Summary/>
        <BoxTransactions/>
       </>
     ): <RegisterTransaction>Cadastre uma nova transação</RegisterTransaction>}
    </>
  )
}