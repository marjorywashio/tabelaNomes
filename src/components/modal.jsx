import React, { useEffect, useState } from 'react'
// import { useRouter } from 'next/router';

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

    const [editedEmployee, setEditedEmployee] = useState(selectedEmployee || {});

    const dataEmployee = () => {
        setSelectedEmployee(editedEmployee);
    };

    useEffect(() => {
        setEditedEmployee(selectedEmployee || {});
    }, [selectedEmployee]);

    if (isOpen){
        return (
            <div style={background_style}>  
                <div style={modal_style}>
                    <div>
                        <label>Nome:</label>
                        <input value={editedEmployee.fun_nome} onChange={e => setEditedEmployee({editedEmployee, fun_nome: e.target.value})}/>
                    </div>
                    <div>
                        <label>Código: </label>
                        <input value={editedEmployee.fun_codigo} onChange={e => setEditedEmployee({editedEmployee, fun_codigo: e.target.value})}/>
                    </div>
                    <button style={modal_button} onClick={() => [setModalOpen(), 
                                                                 dataEmployee(),
                                                                ]}>Salvar e fechar</button>
                    
                </div>
            </div>
        )  
    }
    
    return null;
  
}
