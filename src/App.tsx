import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { NewTransactionModal } from "./components/NewTransactionModal";

import { TransactionProvider } from './context/Transaction';
import { NewTransactionModalProvider } from "./context/NewTransactionModal";

import { Router } from "./Routes";

import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <NewTransactionModalProvider>
      <TransactionProvider>
        <Router/>
        <ToastContainer autoClose={2500}/>
        <GlobalStyle/>
        <NewTransactionModal />
      </TransactionProvider>
    </NewTransactionModalProvider>
  )
}

export default App;
