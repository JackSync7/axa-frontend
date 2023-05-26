import React, { useEffect, useState } from "react";
import { API } from "../config/api";

import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    // Mengambil data JSONPlaceholder menggunakan axios
    const res = await API.get(`/Users`);
    setUsers(res.data);
    if (res) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return <div className="pt-16">Loading...</div>;
  }
  return (
    <div>
      <div className="pt-16 text-3xl text-neutral-900 font-medium ml-10">
        Users
      </div>
      <div className="p-20 text-zinc-800 flex flex-wrap gap-5 justify-center">
        {users?.map((data, i) => (
          <Link key={i} to={`/user-post/${data.id}`}>
            <div className="w-72 bg-white p-5">
              <div className="text-3xl ">{data.username}</div>
              <div className="text-zinc-400">{data.name}</div>
              <div className="text-sky-600">{data.email}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default User;
