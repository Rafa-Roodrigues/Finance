import { NewTransactionModal } from "./components/NewTransactionModal";
import { NewTransactionModalProvider } from "./context/NewTransactionModal";

import { Router } from "./Routes";

import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <NewTransactionModalProvider>
      <Router/>
      <GlobalStyle/>
      <NewTransactionModal />
    </NewTransactionModalProvider>
  )
}

export default App;
