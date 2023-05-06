import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';
import useTitle from '../../../hooks/useTitle';

const Category = () => {
    const {id} = useParams()
    useTitle('category')

    const categoryNews = useLoaderData()

    return (
        <div>
            {id && <h1>This category News: {categoryNews.length}</h1>}
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;