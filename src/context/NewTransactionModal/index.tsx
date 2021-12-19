import { createContext, ReactNode, useState } from "react";

interface NewTransactionModalContextProps {
  statusModal: boolean;
  openModal: () => void;
  closeModal: () => void;
}

interface NewTransactionModalProviderProps {
  children: ReactNode;
}

export const NewTransactionModalContext = createContext<NewTransactionModalContextProps>(
  {} as NewTransactionModalContextProps
);

export function NewTransactionModalProvider({children}: NewTransactionModalProviderProps) {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

  function openModal() {
    setIsNewTransactionModal(true);
  }

  function closeModal() {
    setIsNewTransactionModal(false);
  }

  return(
    <NewTransactionModalContext.Provider value={{
      statusModal: isNewTransactionModal, 
      closeModal, 
      openModal
    }}>
      {children}
    </NewTransactionModalContext.Provider>
  )
}