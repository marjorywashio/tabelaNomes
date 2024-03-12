import React, { useEffect, useState } from 'react'

export default function Modal({ isOpen, setModalOpen, selectedEmployee, setSelectedEmployee}) {

    const background_style = {
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        backgroundColor: 'rgb(0, 0, 0, 0.7)',
        zIndex: '1000',
        pointerEvents: isOpen ? 'auto' : 'none',
    }

    const modal_style = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '20px',
    }

    const modal_button = {
        borderRadius: '5px',
    }

    // guarda os dados do funcionário a ser editado no modal. É iniciado com o selectedEmployee
    const [editedEmployee, setEditedEmployee] = useState(selectedEmployee);

    
    const handleSaveAndClose = () => {
        // Atualiza os dados do funcionário no estado do componente App
        setSelectedEmployee(editedEmployee);
        setModalOpen(false);
      };

    if (isOpen){
        return (
            <div style={background_style}>  
                <div style={modal_style}>
                    <div>
                        <label>Nome:</label>
                        {/* ao editar os dados, a função setEditedEmployee é chamada para atualizar o editedEmployee (... = cópia) */}
                        <input value={editedEmployee.fun_nome} onChange={e => setEditedEmployee({...editedEmployee, fun_nome: e.target.value})}/>
                    </div>
                    <div>
                        <label>Código: </label>
                        {/* disabled pois o código não pode ser alterado */}
                        <input disabled value={editedEmployee.fun_codigo}/>
                    </div>
                    <button style={modal_button} onClick={handleSaveAndClose}>Salvar e fechar</button>
                    
                </div>
            </div>
        )  
    }
    return null;
}