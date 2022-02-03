import React from 'react';
import Axios from 'axios'
import { useEffect, useState } from 'react'
import Article from "../Article/Article"

function Right() {

    const [articles, setArticles] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getItem()

    }, [])



    const getItem = () => {
        Axios.get('https://newsapi.org/v2/everything?q=Apple&from=2022-02-03&sortBy=popularity&apiKey=a069e917715e4dffbbae4cfe81b8a316').then((res) => {
            setArticles([res])
            setLoading(false);

        })
    }

    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

    return (
        <>
            <div className="p-4 flex flex-col border-solid border-4 border-t-0 border-r-0 border-black justify-between h-max "
            >
                {
                    articles[0].data.articles.map((a, idx) =>
                        <div>
                            <Article key={idx} info={a} />
                        </div>
                    )

                }
            </div>
        </>
    )
}



export default Right;
