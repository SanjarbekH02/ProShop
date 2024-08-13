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
import { useTranslation } from 'react-i18next';


const AutumnCollection = ({onItemSelect}) => {

    const {t, i18n} = useTranslation()

    const AutumnData = [
        {
            title: t('autumnData'),
            img: AutumnImg,
            id: 1,
            cotegory: t('cotegoryAutumn')
        },
    
        {
            title: t('autumnData2'),
            img: AutumnImg2,
            id: 2,
            cotegory: t('cotegoryAutumn')
        },
    
        {
            title: t('autumnData3'),
            img: AutumnImg3,
            id: 3,
            cotegory: t('cotegoryAutumn')
        },
    
        {
            title: t('autumnData4'),
            img: AutumnImg4,
            id: 4,
            cotegory: t('cotegoryAutumn')
        },
    
        {
            title: t('autumnData5'),
            img: AutumnImg5,
            id: 5,
            cotegory: t('cotegoryAutumn')
        },
    
        {
            title: t('autumnData6'),
            img: AutumnImg6,
            id: 6,
            cotegory: t('cotegoryAutumn')
        },
    
        {
            title: t('autumnData7'),
            img: AutumnImg7,
            id: 7,
            cotegory: t('cotegoryAutumn')
        },
    
        {
            title: t('autumnData8'),
            img: AutumnImg8,
            id: 8,
            cotegory: t('cotegoryAutumn')
        },
    
        {
            title: t('autumnData9'),
            img: AutumnImg9,
            id: 9,
            cotegory: t('cotegoryAutumn')
        },
    
        {
            title: t('autumnData10'),
            img: AutumnImg10,
            id: 10,cotegory: t('cotegoryAutumn')
        }
    ]
    return (
        <div className='products'>
            <h1 className="products-title">{t('autumnTitle')}</h1>
            <p className="products-desc">{t('product')}</p>
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
