import React from 'react';
import Products from '../../Components/Products/Products';
import AutumnCollection from '../../Components/AutumnCollection/AutumnCollection';
import SummerCollection from '../../Components/SummerCollection/SummerCollection';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './Collection.css'

const Collection = ({ onItemSelect, }) => {
    return (
        <div className="">
            {/* <div className="collection-left">
                <h2 className="collection-title">To'plam</h2>
                <Link to={'/collection'} className="collection-link">Qishki to'plam</Link>
                <Link to={'/spring'} className="collection-link">Bahorgi to'plam</Link>
                <Link to={'/summer'} className="collection-link">Yozgi to'plam</Link>
                <Link to={'/collection/autumn'} className="collection-link">Kuzgi to'plam</Link>
            </div>
            <div>
                <Routes >
                    <Route path='/'>
                        <Route path='/' index element={<Products onItemSelect={onItemSelect} />} />
                        <Route path=':autumn' element={<AutumnCollection onItemSelect={onItemSelect} />} />
                    </Route>
                </Routes> */}
            <Products onItemSelect={onItemSelect} />
            <AutumnCollection onItemSelect={onItemSelect} />
            <SummerCollection onItemSelect={onItemSelect} />
        </div>

    );
}

export default Collection;
