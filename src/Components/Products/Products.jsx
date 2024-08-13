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
import { useTranslation } from 'react-i18next';





const Products = ({onItemSelect}) => {
    const {t,i18n} = useTranslation()
    const winterData = [
        {
            title: t('winterData'),
            img: WinterImg,
            id: 1,
            cotegory: t('cotegoryWinter')
        },
    
        {
            title: t('winterData2'),
            img: WinterImg2,
            id: 2,
            cotegory: t('cotegoryWinter')
        },
    
        {
            title: t('winterData3'),
            img: WinterImg3,
            id: 3,
            cotegory: t('cotegoryWinter')
        },
    
        {
            title: t('winterData4'),
            img: WinterImg4,
            id: 4,
            cotegory: t('cotegoryWinter')
        },
    
        {
            title: t('winterData5'),
            img: WinterImg5,
            id: 5,
            cotegory: t('cotegoryWinter')
        },
    
        {
            title: t('winterData6'),
            img: WinterImg6,
            id: 6,
            cotegory: t('cotegoryWinter')
        },
    
        {
            title: t('winterData7'),
            img: WinterImg7,
            id: 7,
            cotegory: t('cotegoryWinter')
        },
    
        {
            title: t('winterData8'),
            img: WinterImg8,
            id: 8,
            cotegory: t('cotegoryWinter')
        },
    
        {
            title: t('winterData9'),
            img: WinterImg9,
            id: 9,
            cotegory: t('cotegoryWinter')
        },
    
        {
            title: t('winterData10'),
            img: WinterImg10,
            id: 10,
            cotegory: t('cotegoryWinter')
        }
    ]

    return (
        <div className='products'>
            <h1 className="products-title">{t('winterTitle')}</h1>
            <p className="products-desc">{t('product')}</p>
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
