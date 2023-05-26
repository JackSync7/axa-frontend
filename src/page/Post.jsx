import React, { useEffect, useState } from "react";
import { API } from "../config/api";
import axios from "axios";
import { Link } from "react-router-dom";

function Post() {
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [idPost, setIdPost] = useState(111);
  const [form, setForm] = useState({
    userId: 1,
    Id: 111,
    title: "",
    body: "",
    edit: true,
  });

  const getPosts = async () => {
    // Mengambil data JSONPlaceholder menggunakan axios
    const res = await API.get(`/posts`);
    setPosts(res.data);
    setIsLoading(false);
  };
  const handleOnChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addPost = () => {
    setPosts((prev) => [...prev, form]);
    setForm({
      userId: 1,
      Id: 111,
      title: "",
      body: "",
      edit: true,
    });
  };

  const handleEdit = () => {
    let tempComment = [...posts];
    tempComment.splice(idPost, 1, form);
    setPosts(tempComment);
  };

  const deletePost = (id) => {
    let tempPosts = [...posts];
    tempPosts.splice(id, 1);
    setPosts(tempPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (isLoading) {
    return <div className="pt-16">Loading...</div>;
  }
  return (
    <div>
      {/* modal add post */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box bg-white text-zinc-900 relative" htmlFor="">
          <h3 className="text-lg font-bold">
            {!editMode ? "Add Post" : "Edit Post"}
          </h3>
          <div className="flex flex-col justify-center gap-5">
            <input
              className="bg-zinc-200 px-2 py-1 w-full"
              name="title"
              value={form.title}
              onChange={handleOnChange}
              type="text"
              placeholder="Title"
              required
            />

            <input
              className="bg-zinc-200 px-2 py-1 w-full"
              name="body"
              value={form.body}
              onChange={handleOnChange}
              type="text"
              placeholder="Body Post"
              required
            />
            {!editMode ? (
              <input onClick={addPost} className="btn" type="submit" />
            ) : (
              <input onClick={handleEdit} className="btn" type="submit" />
            )}
          </div>
        </label>
      </label>
      {/* end Modal */}

      <div className="pt-16 text-3xl text-neutral-900 font-medium ml-10">
        <div className="flex justify-between">
          <label>Post</label>
          <label
            onClick={() => setEditMode(false)}
            htmlFor="my-modal-4"
            className="border-2 rounded-md p-1 cursor-pointer mr-36"
          >
            + Post
          </label>
        </div>
      </div>
      <div className="p-20 text-zinc-800 flex flex-row-reverse flex-wrap-reverse gap-5 justify-center">
        {posts?.map((data, i) => (
          <div key={i}>
            <div className="flex">
              <div
                onClick={() => deletePost(i)}
                className="text-red-600 cursor-pointer"
              >
                Delete
              </div>
              {data.edit && (
                <label
                  onClick={() => {
                    setEditMode(true);
                    setIdPost(i);
                  }}
                  htmlFor="my-modal-4"
                  className="ml-4 text-blue-600 cursor-pointer"
                >
                  Edit
                </label>
              )}
            </div>
            <Link to={`/detail-Post/${data.id}`}>
              <div className="w-56  bg-white p-5">
                <div className="h-16 p-2 text-lg font-semibold overflow-hidden">
                  {data.title}
                </div>
                <div className=" h-24 mt-3 overflow-hidden">{data.body}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
