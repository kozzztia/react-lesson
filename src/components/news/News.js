import React from 'react';
import style from "./style.module.scss";

const News = () => {
  const news = [{ id: 1, title: "news one", link: "#" }, { id: 2, title: "news two", link: "#" }, { id: 3, title: "news three", link: "#" }];
  return (
    <div className={style.news}>
        <h4>News</h4>
        {
          news.map(news => 
          <div key={news.id} className={style.newsItem}>
            <p>{news.title}</p>
            <a href={news.link}>learn more</a>
        </div>)
        }
    </div>
  )
}

export default News