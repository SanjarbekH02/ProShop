import React from 'react';
import Products from '../../Components/Products/Products';
import AutumnCollection from '../../Components/AutumnCollection/AutumnCollection';
import SummerCollection from '../../Components/SummerCollection/SummerCollection';

const Collection = ({onItemSelect}) => {
    return (
        <div>
            <Products onItemSelect={onItemSelect} />
            <AutumnCollection onItemSelect={onItemSelect} />
            <SummerCollection onItemSelect={onItemSelect} />
        </div>
    );
}

export default Collection;
