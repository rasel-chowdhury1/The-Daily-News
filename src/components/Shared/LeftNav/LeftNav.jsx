import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories,setCategory] = useState([]);
    
    useEffect( ()=>{
        fetch('http://localhost:3000/categories')
        .then(res => res.json())
        .then(data => setCategory(data))
        .catch( error => console.log(error))
    },[])

    console.log(categories)

    return (
        <div>
            <h3>All Category</h3>
            <div className="ps-4">
                {
                    categories.map(category => 
                    <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                     </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;