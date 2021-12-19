import { BoxTransactions } from "../../components/BoxTransactions";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

export function Dashboard() {
  return (
    <>
      <Header/>
      <Summary/>
      <BoxTransactions/>
    </>
  )
}