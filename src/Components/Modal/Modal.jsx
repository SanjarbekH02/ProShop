import React from 'react';
import { useTranslation } from 'react-i18next';
import './Modal.css'
import close from '../../Img/close.jpg'

const Modal = ({openModal, setOpenModal}) => {
    const closeHandle = () => {
        setOpenModal(false)
    }

    const {t, i18n} = useTranslation()
    
    return (
        <div className={`modal ${openModal ? 'modal-open' : ''}`}>
            <div className="modal-content">
                <img onClick={closeHandle} src={close} alt="x" className="close-img" />
                <h5 className="modal-text">{t('modalText')}</h5>
            </div>
        </div>
    );
}

export default Modal;
