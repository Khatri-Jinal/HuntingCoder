import { useRouter } from "next/router";
import React, { useState } from "react";

function Slug(props) {
  const [blog, setBlog] = useState(props.myBlog);
  return (
    <div className="container">
      <h1>{blog && blog.title}</h1>
      <hr />
      <p>{blog && blog.content}</p>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { slug } = context.query;
  const data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`);
  const myBlog = await data.json();
  return {
    props: { myBlog },
  };
}

export default Slug;
