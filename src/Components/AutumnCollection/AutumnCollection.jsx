import React from 'react';
import AutumnImg from '../../Img/kuz1.jpg'
import AutumnImg2 from '../../Img/kuz2.jpg'
import AutumnImg3 from '../../Img/kuz3.jpg'
import AutumnImg4 from '../../Img/kuz4.jpg'
import AutumnImg5 from '../../Img/kuz5.jpg'
import AutumnImg6 from '../../Img/kuz6.jpg'
import AutumnImg7 from '../../Img/kuz7.jpg'
import AutumnImg8 from '../../Img/kuz8.jpg'
import AutumnImg9 from '../../Img/kuz9.jpg'
import AutumnImg10 from '../../Img/kuz10.jpg'
import { Link } from 'react-router-dom';


const AutumnData = [
    {
        title: 'Safari',
        img: AutumnImg,
        id: 1,
    },

    {
        title: "Ko'p rangli ametist",
        img: AutumnImg2,
        id: 2,
    },

    {
        title: 'shlyapali bezak',
        img: AutumnImg3,
        id: 3
    },

    {
        title: "Zumrad (AB)",
        img: AutumnImg4,
        id: 4,
    },

    {
        title: 'Malaxit qutisi',
        img: AutumnImg5,
        id: 5,
    },

    {
        title: 'Bahorning hidlari',
        img: AutumnImg6,
        id: 6,
    },

    {
        title: 'Kuzgi barglar tushishi (AB)',
        img: AutumnImg7,
        id: 7,
    },

    {
        title: 'Moviy shabada (AB)',
        img: AutumnImg8,
        id: 8,
    },

    {
        title: 'Moviy suv (AB)',
        img: AutumnImg9,
        id: 9,
    },

    {
        title: 'Plaid',
        img: AutumnImg10,
        id: 10,
    }
]

const AutumnCollection = ({onItemSelect}) => {
    return (
        <div className='products'>
            <h1 className="products-title">Kuz kolleksiyasi</h1>
            <p className="products-desc">Buxoro tabiiy mahsuloti</p>
            <div className="products-block">
                {
                    AutumnData.map((item, id) => (
                        <Link  to={'/products'} key={item.id} onClick={() => onItemSelect(item)} className="products-card">
                            <img src={item.img} alt="" className="products-img" />
                            <h4 className="products-block-title">{item.title}</h4>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default AutumnCollection;
