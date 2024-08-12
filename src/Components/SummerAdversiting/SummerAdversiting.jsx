import React from 'react';
import './SummerAdversiting.css'
import AdvenImg from '../../Img/spalni3.png'

const SummerAdversiting = () => {
    return (
        <div className='advertising summer'>
            <div className="advertising-left">
                <h1 className="adven-left-title">100%</h1>
                <p className="adven-desc">Material sifati</p>
            </div>

            <img className='adven-img' src={AdvenImg} alt="image" />

            <div className="advertising-right">
                <h1 className="adven-right-title">"Buxoro tabiiy mahsuloti"</h1>
                <p className="adven-desc">Ko'p yillar davomida butun dunyoda foydalanish uchun paxta matolarini ishlab chiqaradigan kampaniya bo'lib kelgan</p>
                <button className="btn btn-light p-2 pe-5 ps-5 rounded-pill color-primary">To'plam</button>
            </div>
        </div>
    );
}

export default SummerAdversiting;
