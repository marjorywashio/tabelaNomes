
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap'
import './App.css'

function App() {

  const data = [
    {"fun_codigo":7,"fun_nome":"CAMILA GALDINO LOBO"},
    {"fun_codigo":22,"fun_nome":"DOUGLAS MARTINS DE FREITAS"},
    {"fun_codigo":15,"fun_nome":"FELIPE DE SOUZA"},
    {"fun_codigo":1,"fun_nome":"JOÃO FRANCISCO FERNANDES"},
    {"fun_codigo":26,"fun_nome":"RAFAEL BOAVENTURA"}
  ];

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
            {data.map((funcionario, index) => (
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
