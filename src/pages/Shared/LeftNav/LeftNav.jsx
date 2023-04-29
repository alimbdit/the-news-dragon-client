import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Insight from './Insight';

const LeftNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://the-news-dragon-server-alimbdit.vercel.app/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
        .catch(error=> console.error(error))
    }, [])


    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4'>
                {
                    categories.map(category => <p key={category.id}>
                        <Link className='text-black text-decoration-none' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }

            </div>
            <Insight></Insight>
        </div>
    );
};

export default LeftNav;