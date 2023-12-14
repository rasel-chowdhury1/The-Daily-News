import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const {category_id} = useParams();
    return (
        <div>
            <h2>This is category: {category_id}</h2>
        </div>
    );
};

export default Category;