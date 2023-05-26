import React, { useEffect, useState } from "react";
import { API } from "../config/api";

function ShowComment({ id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [inputComment, setInputComment] = useState("");
  const [comments, setComments] = useState();

  const getComments = async () => {
    // Mengambil data JSONPlaceholder menggunakan axios
    const res = await API.get(`/comments?postId=${id}`);
    setComments(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getComments();
  }, []);

  const deleteComment = (id) => {
    let tempComment = [...comments];
    tempComment.splice(id, 1);
    setComments(tempComment);
  };

  const handleComment = () => {
    setComments((prev) => [
      ...prev,
      { body: inputComment, email: "email", name: "User" },
    ]);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" flex flex-col items-center justify-center mt-10">
      <div className="w-2/3 bg-white">
        <div className="p-5">
          <input
            value={inputComment}
            onChange={(e) => setInputComment(e.target.value)}
            className="text-neutral-800 px-5 py-2 bg-neutral-300 ml-5 rounded-full w-5/6"
            type="text"
            placeholder="add a comment"
          />
          <button
            onClick={handleComment}
            className="bg-neutral-300 rounded-2xl font-bold text-zinc-800 px-2 ml-2 py-2"
          >
            sent
          </button>
        </div>
        <div className="flex h-96 flex-col-reverse overflow-auto">
          {comments?.map((data, i) => (
            <div key={i} className="border-2 m-2 p-2">
              <div
                onClick={() => deleteComment(i)}
                className="text-red-600 text-end cursor-pointer"
              >
                delete
              </div>
              <div className="text-slate-900 font-medium">{data.name}</div>
              <div>{data.body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowComment;
