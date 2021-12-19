import { useContext } from "react";
import { NewTransactionModalContext } from "../../context/NewTransactionModal";
import { Container } from "./styles";

export function Header() {
  const { openModal } = useContext(NewTransactionModalContext);

  return (
    <Container>
      <h2>Finances</h2>
      <button type="button" onClick={() => openModal()}>Nova Transação</button>
    </Container>
  )
}