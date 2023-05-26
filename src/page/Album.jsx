import React, { useEffect, useState } from "react";
import { API } from "../config/api";

import { Link } from "react-router-dom";

function Album() {
  const [Albums, setAlbums] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getAlbums = async () => {
    // Mengambil data JSONPlaceholder menggunakan axios
    const res = await API.get(`/albums`);
    setAlbums(res.data);
    if (res) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAlbums();
  }, []);

  if (isLoading) {
    return <div className="pt-16">Loading...</div>;
  }
  return (
    <div>
      <div className="pt-16 text-3xl text-neutral-900 font-medium ml-10">
        Albums
      </div>
      <div className="p-20 text-zinc-800 flex flex-wrap gap-5 justify-center">
        {Albums?.map((data, i) => (
          <Link key={i} to={`/detail-album/${data.id}`}>
            <div className="w-56 h-24 bg-white p-5">{data.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Album;
