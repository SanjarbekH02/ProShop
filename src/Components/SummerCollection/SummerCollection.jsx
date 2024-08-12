import React from 'react';
import SummerImg from '../../Img/yoz1.jpg'
import SummerImg2 from '../../Img/yoz2.jpg'
import SummerImg3 from '../../Img/yoz3.jpg'
import SummerImg4 from '../../Img/yoz4.jpg'
import SummerImg5 from '../../Img/yoz5.jpg'
import SummerImg6 from '../../Img/yoz6.jpg'
import SummerImg7 from '../../Img/yoz7.jpg'
import SummerImg8 from '../../Img/yoz8.jpg'
import SummerImg9 from '../../Img/yoz9.jpg'
import SummerImg10 from '../../Img/yoz10.jpg'
import { Link } from 'react-router-dom';

const SummerData = [
    {
        title: 'Vintage uslubi',
        img: SummerImg,
        id: 1,
    },

    {
        title: "hilpiragan karahindiba",
        img: SummerImg2,
        id: 2,
    },

    {
        title: 'Fransuz Riviera',
        img: SummerImg3,
        id: 3
    },

    {
        title: "Qo'y Dolli",
        img: SummerImg4,
        id: 4,
    },

    {
        title: "Alp tog'lari o'simliklari",
        img: SummerImg5,
        id: 5,
    },

    {
        title: 'Ilhomlantiruvchi',
        img: SummerImg6,
        id: 6,
    },

    {
        title: 'Yashil lotus',
        img: SummerImg7,
        id: 7,
    },

    {
        title: "Tog'li makkajo'xori",
        img: SummerImg8,
        id: 8,
    },

    {
        title: 'Sakura filiali',
        img: SummerImg9,
        id: 9,
    },

    {
        title: 'Zaytun novdasi',
        img: SummerImg10,
        id: 10,
    }
]


const SummerCollection = ({onItemSelect}) => {
    return (
        <div className='products'>
            <h1 className="products-title">Yoz kolleksiyasi</h1>
            <p className="products-desc">Buxoro tabiiy mahsuloti</p>
            <div className="products-block">
                {
                    SummerData.map((item, id) => (
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

export default SummerCollection;
