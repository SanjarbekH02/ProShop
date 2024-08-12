import React from 'react';
import './Home.css'
import HomeImg from '../../Img/home.png'
import Curier from '../../Img/kurier.svg'
import Guarantee from '../../Img/kafolat.svg'
import Faq from '../../Img/naush.svg'
import Payment from '../../Img/tolov.svg'
import Advertising from '../Advertising/Advertising';
import Products from '../Products/Products';
import AutumnAdversiting from '../AutumnAdversiting/AutumnAdversiting';
import AutumnCollection from '../AutumnCollection/AutumnCollection';

const Home = ({onItemSelect}) => {
    return (
        <div>
            <div className="home">
                <div className="home-left">
                    <img src={HomeImg} alt="home img" className="home-img" />
                </div>
                <div className="home-right">
                    <div className="home-right-block">
                        <h4 className="home-city">Buxoro</h4>
                        <h3 className="home-title">Tabiy</h3>
                        <h1 className="home-produc-title">Mahsulotlar</h1>
                    </div>
                </div>
            </div>

            <div className="info">
                <div className="info-card">
                    <img src={Curier} alt="kurier rasmi" className="curier" />
                    <div className="info-card-block">
                        <h5 className="info-title">Yetkazib berish bepul</h5>
                        <p className="info-desc">Barcha buyurtmalar uchun bepul yetkazib berish</p>
                    </div>
                </div>

                <div className="info-card">
                    <img src={Guarantee} alt="kurier rasmi" className="curier" />
                    <div className="info-card-block">
                        <h5 className="info-title">Qaytish kafolati</h5>
                        <p className="info-desc">30 kunlik pulni qaytarish</p>
                    </div>
                </div>

                <div className="info-card">
                    <img src={Faq} alt="kurier rasmi" className="curier" />
                    <div className="info-card-block">
                        <h5 className="info-title">24/7 onlayn qo'llab-quvvatlash</h5>
                        <p className="info-desc">24/7 texnik yordam</p>
                    </div>
                </div>

                <div className="info-card">
                    <img src={Payment} alt="kurier rasmi" className="curier" />
                    <div className="info-card-block">
                        <h5 className="info-title">Xavfsiz to'lov</h5>
                        <p className="info-desc">Barcha to'lov usullari qabul qilinadi</p>
                    </div>
                </div>
            </div>
            <Advertising />
            <Products onItemSelect={onItemSelect} />
            <AutumnAdversiting />
            <AutumnCollection />
        </div>
    );
}

export default Home;
