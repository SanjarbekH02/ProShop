import React from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import './ProductsWiew.css'
import Products from '../Products/Products';

const ProductsWiew = ({ selectedData }) => {
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
                                <td className="text-secondary products-table">Material:</td>
                                <td className="text-secondary products-table">100% paxta flanel</td>
                            </tr>
                            <tr>
                                <td className="text-secondary products-table">Yostiq kiyimi:</td>
                                <td className="text-secondary products-table">50x70 sm (2 dona)</td>
                            </tr>

                            <tr>
                                <td className="text-secondary products-table">Choyshab:</td>
                                <td className="text-secondary products-table">260×280 sm (1 dona)</td>
                            </tr>

                            <tr>
                                <td className="text-secondary products-table">Ko'rpa-to'shak:</td>
                                <td className="text-secondary products-table">160x220 sm (2 dona)</td>
                            </tr>

                            <tr>
                                <td className="text-secondary products-table">Hajmi:</td>
                                <td className="text-secondary products-table">Maxsus o'lcham</td>
                            </tr>

                            <tr>
                                <td className="text-secondary products-table">Ishlab chiqaruvchi:</td>
                                <td className="text-secondary products-table">Buxoro tabiiy mahsuloti</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="cotegory text-secondary">Kategoriya: <span className="cotegory-name text-danger">Qishki kolleksiya </span></div>
                </div>
            </div>

            <hr className='mt-5 mb-5' />

            <div className="description-block mt-5">
                <h3>Tavsif</h3>
                <h3 className='pt-3 pb-3'>Choyshablar toplami {selectedData.title}</h3>
                <p className="products-table text-secondary">Choyshab - bu qulaylik va go'zallik uchun mo'ljallangan uy-ro'zg'or buyumlari va yotoqxona dekoratsiyasi. Choyshab, adyol, yostiq hunarmandchiligi va boshqa aksessuarlarni o'z ichiga olgan turli xil to'shak to'plamlarini tanlashingiz mumkin. Ularda turli dizaynlar, bosma naqshlar, kashtalar yoki boshqa dizayn elementlari mavjud. Ular oson va tez tozalanadi va tozalanadi. Ular yumshoq materiallardan tayyorlangan bo'lib, ular yotoqxonangizni qulay va qulay qiladi.</p>
            </div>

            
        </div>
    );
}

export default ProductsWiew;









