import React from 'react';
import avatar from './../avatar.png'
import './Modal.css';

const Modal = () => {
    return (
        <div className="section">

            <div className="modal">

                <img src={avatar}/>

                <div className="info">
                   <h5><span>E</span>rror no has ingresa nada, vuelve a intentarlo</h5>
                </div>

                <button className="btn">OK</button>

            </div>
            
        </div>
    )
}

export default Modal
