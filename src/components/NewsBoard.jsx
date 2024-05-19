import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'

const NewsBoard = () => {
  
    const [article,setArticle]=useState([])

    useEffect(()=>{
        let url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`
         fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticle(data.articles);
      })
      .catch(error => {
        setArticle({ error });
      });
    },[])

  return (
    <div>
        <h2 className='text-center'>Latest<span className='badge bg-danger'>News</span></h2>
        {article.map((news,index)=>{
            return <NewsItem 
                        key={index} 
                        news={news}    
                    />
        })}
    </div>
  )
}

export default NewsBoard