import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../config/api";

function DetailAlbum() {
  const { id } = useParams();
  const [album, setAlbum] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getAlbumPhoto = async () => {
    // Mengambil data JSONPlaceholder menggunakan axios
    const res = await API.get(`/albums/${id}/photos`);
    setAlbum(res.data);
    if (res) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAlbumPhoto();
  }, []);

  if (isLoading)
    return <div className="pt-20 text-5xl bg-white text-black">Loading...</div>;
  return (
    <div>
      <div className="pt-16 text-4xl text-zinc-900 font-medium ml-6 ">
        Photos from Album
      </div>
      <div className="flex flex-wrap gap-5 justify-center mt-10">
        {album?.map((data, i) => (
          <div className="w-56 bg-white" key={i}>
            <img src={data.url} />
            <p className="mt-5 p-2">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailAlbum;
