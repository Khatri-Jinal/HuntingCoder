import React, { useEffect, useState } from "react";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";

function Blog(props) {
  const [Blog, setBlog] = useState(props.allBlogs);
  return (
    <div className="container">
      <h1 className="title">Blogs</h1>

      {Blog.map((item, index) => {
        return (
          <div className="blog-item" key={index}>
            <Link href={`/blogpost/${item.slug}`}>
              <h3>{item.title}</h3>
            </Link>
            <p>{item.content.substr(0, 400)}</p>
            <p>{item.slug}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export async function getServerSideProps(context) {
  const data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs },
  };
}

export default Blog;

//
