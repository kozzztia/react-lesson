import React from 'react';
import style from './style.module.scss';

const Blog = () => {
  const blogs = [{ id: 1, title: "blog one", link: "#" }, { id: 2, title: "blog two", link: "#" }, { id: 3, title: "blog three", link: "#" }, { id: 4, title: "blog four", link: "#" }];

  return (
    <div className={style.blog}>
      <h4>Blog</h4>
      {
        blogs.map(blog => 
        <div key={blog.id} className={style.blogItem}>
          <p>{blog.title}</p>
          <a href={blog.link}>go to</a>
      </div>)
      }
    </div>
  )
}

export default Blog