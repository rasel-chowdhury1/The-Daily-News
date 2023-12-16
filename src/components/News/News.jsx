import React from 'react';
import { Link, useLoaderData} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaArrowLeft } from 'react-icons/fa';
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
    const news = useLoaderData();
    // console.log(news)
    const {image_url,title,details,category_id} = news;
    return (
        <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {details}
            </Card.Text>
            <Link to={`/category/${category_id}`}>
               <Button variant="danger">
                   <FaArrowLeft/>  All New in this Category
                </Button>
            </Link>
        </Card.Body>

        <EditorsInsights></EditorsInsights>
        </Card>
    );
};

export default News;