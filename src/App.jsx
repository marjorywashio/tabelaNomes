
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'
import './App.css'
import React, { useEffect, useState } from 'react'
import Modal from './components/modal'

function App() {

  const baseURL = "http://187.17.164.80:3000/public/funcionario";

  const [post, setPost] = React.useState(null);

  const [openModal, setOpenModal] = useState(false)

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleOpenModal = (employee) => {
    setSelectedEmployee(employee);
    setOpenModal(true);
  };
  

  useEffect(() => {
    fetch(baseURL)
    .then(response => response.json())
    .then(data => setPost(data))
    .catch(error => console.error(error));
   }, []);

  return (
    <>
      <div>
        <h1>Tabela de Funcionários</h1>
      </div>
      
      <div className="container">
        <Table className="Table">

          <thead>
            <tr>
              <th width='80'>Código</th>
              <th width='400'>Funcionário</th>
              <th width='80'>Editar</th>
            </tr>
          </thead>

          <tbody>
            {post && post.map((funcionario, index) => ( // && verifica se post é verdadeiro antes de executar post.map()
            <tr key={index}>
              <td>{funcionario.fun_codigo}</td>
              <td>{funcionario.fun_nome}</td>
              <td>
                  <button onClick={() => handleOpenModal(funcionario)}>
                    <img src="src/assets/img/editar.png" alt="Editar contato" />
                  </button>
              </td>
            </tr>
            ))}
          </tbody>
        </Table>

        <div>
        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} selectedEmployee={selectedEmployee}/>        </div>

      </div>
    </>
  )
}

export default App
