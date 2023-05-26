import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../config/api";
import ShowComment from "../components/ShowComment";

function DetailPost() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const postItem = [];

  const getPost = async () => {
    // Mengambil data JSONPlaceholder menggunakan axios
    const res = await API.get(`/Posts/${id}`);
    setPost(res.data);
    if (res) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getPost();
  }, []);

  if (isLoading)
    return <div className="pt-20 text-5xl bg-white text-black">Loading...</div>;
  return (
    <div>
      <div className="pt-16 text-4xl text-zinc-900 font-medium ml-6 ">
        Detail Post
      </div>
      <div className="flex flex-wrap gap-5 justify-center mt-10 ">
        <div className="w-2/3 bg-white p-5 text-zinc-500 ">
          <p className="mt-5 p-2 text-3xl text-zinc-800 font-semibold">
            {post.title}
          </p>
          <p className="mt-2 p-2 text-lg">{post.body}</p>
        </div>
      </div>
      <div>
        <ShowComment id={post.id} />
      </div>
    </div>
  );
}

export default DetailPost;
