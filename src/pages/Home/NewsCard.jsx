import React from 'react';
import { Link } from 'react-router-dom'; // or whatever library you're using for routing

const NewsCard = ({ news }) => {
    const { title, thumbnail_url, details , _id} = news;
    return (
        <div className="card bg-base-100 shadow-xl border-b-2">
            <figure><img src={thumbnail_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {details.length > 200
                        ? <>{details.slice(0, 200)} <Link 
                            className='text-green-400' to={`/news/${_id}`}>read more..</Link></>
                        : details
                    }
                </p>
            </div>
        </div>
    );
};

export default NewsCard;
