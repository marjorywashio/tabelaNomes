
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'
import './App.css'
import React, { useEffect, useState } from 'react'
import Modal from './components/modal'

function App() {

  // URL base do endpoint da API
  const baseURL = "http://187.17.164.80:3000/public/funcionario";

  // armazena os dados dos funcionários recuperados da API
  const [post, setPost] = React.useState(null);

  // controla se o modal está aberto ou fechado
  const [openModal, setOpenModal] = useState(false)

  // armazena os dados do funcionário selecionado para edição
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // função que é acionada quando o botão de edição é clicado. Recebe o objeto selectedEmployee e abre o modal
  const handleOpenModal = (employee) => {
    setSelectedEmployee(employee);
    setOpenModal(true);
  };

  //busca os dados da API
  useEffect(() => {
    fetch(baseURL) // solicitação GET para a URL
    .then(response => response.json()) // converte a resposta em JSON
    .then(data => setPost(data)) // define os dados como post
    .catch(error => console.error(error)); // erros
   }, []);

   // função para atualizar os dados de um funcionários (no post e no selectedEmployee)
                              // recebe updatedData como parâmetro
   const updateEmployeeData = (updatedData) => {

    // Encontra e atualiza os dados do funcionário no estado
                            // map: percorre todo o array de funcionários no post
    const updatedPost = post.map(employee => {
      // verifica se os códigos são iguais
      if (employee.fun_codigo === updatedData.fun_codigo) {
        // se forem iguais, é substituído pelos dados atualizados
        return updatedData;
      }
      // retorna sem alterações
      return employee;
    });

    // o post é atualizado com novo array de funcionários (dados novos)
    setPost(updatedPost);

    // o selectedEmployee é atualizado com os novos dados
    setSelectedEmployee(updatedData);
  };

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
            {/* map itera sobre os elementos da array */}
            {post && post.map((funcionario, index) => ( // && verifica se post é verdadeiro antes de executar post.map()
            <tr key={index}>
              <td>{funcionario.fun_codigo}</td>
              <td>{funcionario.fun_nome}</td>
              <td>
                  <button className='editar' onClick={() => handleOpenModal(funcionario)}>
                    <img src="src/assets/img/editar.png" alt="Editar contato" />
                  </button>
              </td>
            </tr>
            ))}
          </tbody>
        </Table>

        <div>
          {selectedEmployee && ( // se tiver um funcionário selecionado
            <Modal 
              isOpen={openModal} // controlar o estado de abertura do modal
              setModalOpen={setOpenModal}  //função que atualiza o estado de abertura
              selectedEmployee={selectedEmployee}  // qual funcionário selecionado será exibido no modal
              setSelectedEmployee={updateEmployeeData} // atualiza o funcionário selecionado
            />
          )}
        </div>
      </div>
    </>
  )
}

export default App