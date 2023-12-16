import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories,setCategory] = useState([]);
    
    useEffect( ()=>{
        fetch('https://the-daily-news-server-6ll8ooa1x-rasel-chowdhury1s-projects.vercel.app/categories')
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