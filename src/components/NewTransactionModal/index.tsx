import { useContext, useState } from 'react';
import { Formik } from 'formik';
import Modal from 'react-modal';
import { api } from '../../services/api';
import * as yup from 'yup';

import { NewTransactionModalContext } from '../../context/NewTransactionModal';

import {BsArrowDownCircle, BsArrowUpCircle} from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';

import { Formulario, Input, BoxTypeTransaction, Button, Error } from './styles';
import { TransactionContext } from '../../context/Transaction';

interface FormProps {
  title: string;
  value: string;
}

Modal.setAppElement("#root");

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionContext);

  const [typeTransaction, setTypeTransaction] = useState("deposit");

  const { statusModal, closeModal} = useContext(NewTransactionModalContext);

  function validateForm() {
    const schema = yup.object().shape({
      title: 
        yup.string()
        .min(3, "Minimo de 3 caracteres")
        .max(50, "Maximo de 50 caracteres")
        .required("Este campo é obrigatório."),
      value: 
        yup.number()
        .max(10000000, "Valor maximo de transação é de 10 milhões")
        .positive("O valor precisa ser maior que zero")
        .required("Este campo é obrigatório.")
    });

    return schema;
  }

  function handleSubmit({title, value}: FormProps) {
    createTransaction({
      title,
      value : Number(value),
      type: typeTransaction
    });
  }

  return (
    <Modal
      isOpen={statusModal}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="overlay-modal"
    >
      <Formik
        initialValues={{title: "", value: ""}}
        onSubmit={handleSubmit}
        validationSchema={validateForm}
      >
        {({errors, touched }) => (
          <Formulario>
            <header>
              <h2>Cadastrar nova Transação</h2>
              <button type="button" onClick={closeModal}><GrClose/></button>
            </header>

            <div>
              <Input 
                name="title"  
                id="title" 
                placeholder="Titulo"
                error={errors.title && touched.title}
              />
              {(errors.title && touched.title) && (<Error>{errors.title}</Error>)}
            </div>

            <div>
              <Input 
                name="value"
                id="value"
                type="number"
                placeholder="Valor"
                error={errors.value && touched.value}
              />
              {(errors.value && touched.value) && (<Error>{errors.value}</Error>)}
            </div>

            <BoxTypeTransaction>
              <Button
                type="button" 
                typeTransaction={typeTransaction === "deposit" ? '#4caf50' : ''} 
                onClick={() => setTypeTransaction('deposit')
              }>
                <BsArrowUpCircle color="#4caf50" size={20}/>
                Entrada
              </Button>

              <Button
                type="button" 
                typeTransaction={typeTransaction === "withdraw" ? '#E62E4D' : ''} 
                onClick={() => setTypeTransaction('withdraw')}
              >
                <BsArrowDownCircle color="#E62E4D" size={20}/>
                Saída
              </Button>
            </BoxTypeTransaction>

            <button type="submit">Cadastrar</button>
          </Formulario>
        )}
      </Formik>
    </Modal>
  )
}