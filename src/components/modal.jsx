import React from 'react'

export default function Modal({ isOpen, setModalOpen, selectedEmployee }) {

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
        padding: '20px'
    }

    const modal_button = {
        borderRadius: '5px',
    }

    if (isOpen){
        return (
            <div style={background_style}>  
                <div style={modal_style}>
                    <div>
                        <h2>{selectedEmployee.fun_nome}</h2>
                        <p>Código: {selectedEmployee.fun_codigo}</p>
                    </div>
                    <button style={modal_button} onClick={setModalOpen}>Salvar e fechar</button>
                    
                </div>
            </div>
        )  
    }
    
    return null;
  
}
