import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../services/api";

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

  useEffect(() => {
    async function getTransactions() {
      const response = await api.get("/transaction");
      setTransactions(response.data.transactions);
    }

    getTransactions();
  }, [])

  async function createTransaction(data: TransactionProps) {
    const response = await api.post("/transaction", data);
    setTransactions([...transactions, response.data.transaction]);
  }

  return (
    <TransactionContext.Provider value={{createTransaction, transactions}}>
      {children}
    </TransactionContext.Provider>
  )
}