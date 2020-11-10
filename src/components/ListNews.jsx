import React from 'react';
import News from './News';

const ListNews = ({news}) =>  ( 
        <div className="row">
            { news.map(topic => <News key={topic.url} news={topic} />) }
        </div>
);

export default ListNews;