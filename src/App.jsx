
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'
import './App.css'
import React from 'react'
import axios from 'axios';

function App() {

  
  const baseURL = "http://187.17.164.80:3000/public/funcionario";
   const [post, setPost] = React.useState(null);

   React.useEffect(()=> {
    axios.get(baseURL) //utilizando a biblioteca Axios para fazer uma requisição http get para o baseURL
    .then((response) => setPost(response.data)) //recebe uma função que é chamada quando a requisição é bem-sucedida
    .catch((error) => console.error("Erro ao buscar dados: ", error)); //usada para lidar com erros durante a aquisição
   }, []);

  return (
    <>
      <div>
        <h1>Tabela de Funcionários</h1>
      </div>
      
      <div className="container">
        <Table>

          <thead>
            <tr>
              <th width='80'>Código</th>
              <th width='400'>Funcionário</th>
            </tr>
          </thead>

          <tbody>
            {post && post.map((funcionario, index) => ( // && verifica se post é verdadeiro antes de executar post.map()
            <tr key={index}>
              <td>{funcionario.fun_codigo}</td>
              <td>{funcionario.fun_nome}</td>
            </tr>
            ))}
          </tbody>

        </Table>
      </div>
    </>
  )
}

export default App
