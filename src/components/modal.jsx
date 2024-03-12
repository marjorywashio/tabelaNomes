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

    // função que atualiza o selectedEmployee com os dados do editedEmployee
    const dataEmployee = () => {
        setSelectedEmployee(editedEmployee);
    };

    // atualiza o editedEmployee sempre que o selectedEmployee mudar. O [] especifica que o efeito só deve ser executado quando selectedEmployee mudar
    useEffect(() => {
        setEditedEmployee(selectedEmployee || {});
    }, [selectedEmployee]);

    // salva os dads no servidor e fecha o modal
    const handleSaveAndClose = async () => {
        try {
            // Faz uma solicitação PUT para atualizar os dados do funcionário com base no fun_codigo
            await fetch(`http://187.17.164.80:3000/public/funcionario/${editedEmployee.fun_codigo}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editedEmployee),
            });
            // Após a atualização bem-sucedida, fecha a modal e atualiza o estado
            setModalOpen(false);
            // atualiza o estado selectedEmployee com os dados novos
            dataEmployee();
            // console.log("ok"); teste
            
        } catch (error) { //erro
            console.error('Erro ao atualizar os dados do funcionário:', error);
        }
    };

    if (isOpen){
        return (
            <div style={background_style}>  
                <div style={modal_style}>
                    <div>
                        <label>Nome:</label>
                        {/* ao editar os dados, a função setEditedEmployee é chamada para atualizar o editedEmploree (... = cópia) */}
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