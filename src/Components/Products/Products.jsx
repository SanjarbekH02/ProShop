import React from 'react';
import './Products.css';
import WinterImg from '../../Img/qish1.jpg'
import WinterImg2 from '../../Img/qish2.jpg'
import WinterImg3 from '../../Img/qish3.jpg'
import WinterImg4 from '../../Img/qish4.jpg'
import WinterImg5 from '../../Img/qish5.jpg'
import WinterImg6 from '../../Img/qish6.jpg'
import WinterImg7 from '../../Img/qish7.jpg'
import WinterImg8 from '../../Img/qish8.jpg'
import WinterImg9 from '../../Img/qish9.jpg'
import WinterImg10 from '../../Img/qish10.jpg'
import { Link } from 'react-router-dom';



const winterData = [
    {
        title: 'Kvadratchalar',
        img: WinterImg,
        id: 1,
        descriptionTitle: "Choyshablar to'plami Kvadratchalar",
        description: ""
    },

    {
        title: "Ikat",
        img: WinterImg2,
        id: 2,
        descriptionTitle: "Choyshablar to'plami Ikat",
        description: ""
    },

    {
        title: 'Davralar',
        img: WinterImg3,
        id: 3,
        descriptionTitle: "Choyshablar to'plami Davralar",
        description: ""
    },

    {
        title: "Geometriya ko'k",
        img: WinterImg4,
        id: 4,
        descriptionTitle: "Choyshablar to'plami Geometriya ko'k",
        description: ""
    },

    {
        title: 'Tropik barglar',
        img: WinterImg5,
        id: 5,
        descriptionTitle: "Choyshablar to'plami Tropik barglar",
        description: ""
    },

    {
        title: 'Bambi',
        img: WinterImg6,
        id: 6,
        descriptionTitle: "Choyshablar to'plami Bambi",
        description: ""
    },

    {
        title: 'Vizantiya',
        img: WinterImg7,
        id: 7,
        descriptionTitle: "Choyshablar to'plami Vizantiya",
        description: ""
    },

    {
        title: 'Kechki bog',
        img: WinterImg8,
        id: 8,
        descriptionTitle: "Choyshablar to'plami Kechki bog",
        description: ""
    },

    {
        title: 'Pat Markiz',
        img: WinterImg9,
        id: 9,
        descriptionTitle: "Choyshablar to'plami Pat Markiz",
        description: ""
    },

    {
        title: 'Lavanda atirgullari',
        img: WinterImg10,
        id: 10,
        descriptionTitle: "Choyshablar to'plami Lavanda atirgullari",
        description: ""
    }
]

const Products = ({onItemSelect}) => {

    return (
        <div className='products'>
            <h1 className="products-title">Qish kolleksiyasi</h1>
            <p className="products-desc">Buxoro tabiiy mahsuloti</p>
            <div className="products-block">
                {
                    winterData.map((item, id) => (
                        <Link to={'/products'} key={item.id} onClick={() => onItemSelect(item)} className="products-card">
                            <img src={item.img} alt="" className="products-img" />
                            <h4 className="products-block-title">{item.title}</h4>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default Products;
