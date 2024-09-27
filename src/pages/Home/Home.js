import React from 'react';
import style from './style.module.scss';
import Banner from "../../components/banner/Banner";
import Blog from "../../components/blog/Blog";
import News from '../../components/news/News';

const Home = () => {
  return (
    <main className={style.home}>
        <Banner/>
        <section className={style.homeWrapper}>
          <Blog/>
          <News/>
        </section>
    </main>
  )
}

export default Home