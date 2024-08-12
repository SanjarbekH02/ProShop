import React from 'react';
import Products from '../Products/Products';
import AutumnCollection from '../AutumnCollection/AutumnCollection';
import SummerCollection from '../SummerCollection/SummerCollection';

const Collection = () => {
    return (
        <div>
            <Products />
            <AutumnCollection />
            <SummerCollection />
        </div>
    );
}

export default Collection;
