import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import './ProductsWiew.css'
import { useTranslation } from 'react-i18next';
const ProductsWiew = ({ selectedData }) => {
    const {t, i18n} = useTranslation()
    if (!selectedData) {
        return <p>Choose an item</p>;
    }
    return (
        <div >
            <div className="products-info-block">
                <div className="products-info-img">
                    <InnerImageZoom
                        src={selectedData?.img}
                        zoomSrc={selectedData?.img}
                        zoomType="hover"
                        zoomPreload={true}
                    />
                </div>
                <div className="products-info-right">
                    <h1 className="products-info-title">{selectedData?.title}</h1>


                    <table class="table table-bordered">
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-secondary products-table">{t('material')}</td>
                                <td className="text-secondary products-table">{t('quality')}</td>
                            </tr>
                            <tr>
                                <td className="text-secondary products-table">{t('clothes')}</td>
                                <td className="text-secondary products-table">50x70 sm (2 dona)</td>
                            </tr>

                            <tr>
                                <td className="text-secondary products-table">{t('sheets')}:</td>
                                <td className="text-secondary products-table">260×280 sm (1 dona)</td>
                            </tr>

                            <tr>
                                <td className="text-secondary products-table">{t('korpa')}</td>
                                <td className="text-secondary products-table">160x220 sm (2 dona)</td>
                            </tr>

                            <tr>
                                <td className="text-secondary products-table">{t('size')}:</td>
                                <td className="text-secondary products-table">{t('spes')}</td>
                            </tr>

                            <tr>
                                <td className="text-secondary products-table">{t('seh')}</td>
                                <td className="text-secondary products-table">{t('product')}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="cotegory text-secondary">{t('cotegory')} <span className="cotegory-name text-danger">{selectedData.cotegory}</span></div>
                </div>
            </div>

            <hr className='mt-5 mb-5' />

            <div className="description-block mt-5">
                <h3>{t('description')}</h3>
                <h3 className='pt-3 pb-3'>{t('collecShop')} {selectedData.title}</h3>
                <p className="products-table text-secondary">{t('descText')}</p>
            </div>

            
        </div>
    );
}

export default ProductsWiew;









