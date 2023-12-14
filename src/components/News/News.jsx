import React from 'react';
import { useParams } from 'react-router-dom';

const News = () => {
    const {news_id} = useParams();
    return (
        <div>
            <h3>news is comming : {news_id}</h3>
        </div>
    );
};

export default News;