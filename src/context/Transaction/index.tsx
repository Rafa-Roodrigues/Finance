import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from 'react-toastify';

import { api } from "../../services/api";
import { NewTransactionModalContext } from "../NewTransactionModal";

interface TransactionProps {
  title: string;
  value: number;
  type: string;
}

interface DataServerProps {
  id: string;
  title: string;
  value: number;
  type: string;
  createdAt: string;
}

interface TransactionContextProps {
  createTransaction: (data: TransactionProps) => void;
  transactions: DataServerProps[];
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

export function TransactionProvider({children}: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<DataServerProps[]>([]);

  const { closeModal } = useContext(NewTransactionModalContext);

  useEffect(() => {
    async function getTransactions() {
      const response = await api.get("/transaction");
      setTransactions(response.data.transactions);
    }

    getTransactions();
  }, [])

  async function createTransaction(data: TransactionProps) {
   try {
    const response = await api.post("/transaction", data);
    setTransactions([...transactions, response.data.transaction]);
    closeModal();
    toast.success("Transação efetuada com sucesso!")
   } catch(err) {
    toast.success("Erro no cadastro da transação.")
   }
  }

  return (
    <TransactionContext.Provider value={{createTransaction, transactions}}>
      {children}
    </TransactionContext.Provider>
  )
}