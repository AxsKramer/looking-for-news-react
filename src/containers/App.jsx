import React, { Fragment, useState, useEffect } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import ListNews from '../components/ListNews';

function App() {

    const [category, setCategory] = useState('');
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getDataFromAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=2cad70a7a97c4a6e9c23bb7a7c7cc6f3`;
            const response = await fetch(url);
            const news = await response.json();
            setNews(news.articles);
        }
        getDataFromAPI();
    }, [category]);

    return (
        <Fragment>
            <Header title='Search News' />
            <div className="container white">
                <Form setCategory={setCategory}/>
                <ListNews news={news}/>
            </div>
        </Fragment>
    );
}

export default App;