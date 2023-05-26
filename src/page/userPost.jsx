import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../config/api";

function UserPost() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState("posts");

  const getPost = async () => {
    // Mengambil data JSONPlaceholder menggunakan axios
    const res = await API.get(`/users/${id}/${content}`);
    setPost(res.data);
    if (res) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, [content]);
  console.log(content);
  if (isLoading)
    return <div className="pt-20 text-5xl bg-white text-black">Loading...</div>;
  return (
    <div>
      <div className="pt-16 text-4xl text-zinc-900 font-medium ml-6 ">
        User Content
      </div>
      <div>
        <select
          className="bg-white text-blue-500 mt-10 ml-10 p-2 font-bold"
          name="content"
          onChange={(e) => setContent(e.target.value)}
        >
          <option value="posts">Posts</option>
          <option value="albums">Albums</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-5 justify-center mt-10">
        {post?.map((data, i) => (
          <div className="w-56 bg-white" key={i}>
            <p className="text-xl text-neutral-800 p-2">{data.title}</p>
            <p className="mt-5 p-2">{data.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPost;
