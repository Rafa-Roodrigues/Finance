import { useContext, useState } from 'react';
import Modal from 'react-modal';
import { NewTransactionModalContext } from '../../context/NewTransactionModal';

import {BsArrowDownCircle, BsArrowUpCircle} from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

import { Formulario, Input, BoxTypeTransaction, Button } from './styles';
import { Formik } from 'formik';

Modal.setAppElement("#root");

export function NewTransactionModal() {
  const [typeTransaction, setTypeTransaction] = useState("deposit");

  const { statusModal, closeModal} = useContext(NewTransactionModalContext);


  return (
    <Modal
      isOpen={statusModal}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="overlay-modal"
    >
      <Formik
        initialValues={{title: "", value: 0}}
        onSubmit={() => {}}
      >
        <Formulario>
          <header>
            <h2>Cadastrar nova Transação</h2>

            <button type="button" onClick={closeModal}><GrClose/></button>
          </header>
          <div>
            <Input name="title" id="title" placeholder="Titulo"/>
            {/* <Error>Este campo é obrigatorio.</Error> */}
          </div>
          <div>
            <Input name="value" id="value" type="number"/>
            <span></span>
          </div>
          <BoxTypeTransaction>
            <Button 
              typeTransaction={typeTransaction === "deposit" ? '#4caf50' : ''} 
              onClick={() => setTypeTransaction('deposit')
            }>
              <BsArrowUpCircle color="#4caf50" size={20}/>
              Entrada
            </Button>

            <Button 
              typeTransaction={typeTransaction === "withdraw" ? '#E62E4D' : ''} 
              onClick={() => setTypeTransaction('withdraw')
            }>
              <BsArrowDownCircle color="#E62E4D" size={20}/>
              Saída
            </Button>
          </BoxTypeTransaction>
          <button type="submit">Cadastrar</button>
        </Formulario>
      </Formik>
    </Modal>
  )
}