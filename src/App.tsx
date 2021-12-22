import { NewTransactionModal } from "./components/NewTransactionModal";

import { TransactionProvider } from './context/Transaction';
import { NewTransactionModalProvider } from "./context/NewTransactionModal";

import { Router } from "./Routes";

import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <TransactionProvider>
      <NewTransactionModalProvider>
        <Router/>
        <GlobalStyle/>
        <NewTransactionModal />
      </NewTransactionModalProvider>
    </TransactionProvider>
  )
}

export default App;
