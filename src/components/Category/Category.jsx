import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const {category_id} = useParams();
    console.log(category_id);
    const categoryNews = useLoaderData();

    return (
        <div>
            {category_id && <h2>This Category News: {categoryNews.length}</h2>}
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}>
                    </NewsCard>)
            }
        </div>
    );
};

export default Category;