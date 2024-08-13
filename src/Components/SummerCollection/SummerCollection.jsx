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
import { useTranslation } from 'react-i18next';



const SummerCollection = ({onItemSelect}) => {
    const {t, i18n} = useTranslation()
    const SummerData = [
        {
            title: t('summerData'),
            img: SummerImg,
            id: 1,
            cotegory: t('cotegorySummer')
        },
    
        {
            title: t('summerData2'),
            img: SummerImg2,
            id: 2,
            cotegory: t('cotegorySummer')
        },
    
        {
            title: t('summerData3'),
            img: SummerImg3,
            id: 3,
            cotegory: t('cotegorySummer')

        },
    
        {
            title: t('summerData4'),
            img: SummerImg4,
            id: 4,
            cotegory: t('cotegorySummer')
        },
    
        {
            title: t('summerData5'),
            img: SummerImg5,
            id: 5,
            cotegory: t('cotegorySummer')
        },
    
        {
            title: t('summerData6'),
            img: SummerImg6,
            id: 6,
            cotegory: t('cotegorySummer')
        },
    
        {
            title: t('summerData7'),
            img: SummerImg7,
            id: 7,
            cotegory: t('cotegorySummer')
        },
    
        {
            title: t('summerData8'),
            img: SummerImg8,
            id: 8,
            cotegory: t('cotegorySummer')
        },
    
        {
            title: t('summerData9'),
            img: SummerImg9,
            id: 9,
            cotegory: t('cotegorySummer')
        },
    
        {
            title: t('summerData10'),
            img: SummerImg10,
            id: 10,
            cotegory: t('cotegorySummer')
        }
    ]
    return (
        <div className='products'>
            <h1 className="products-title">{t('summerTitle')}</h1>
            <p className="products-desc">{t('product')}</p>
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
