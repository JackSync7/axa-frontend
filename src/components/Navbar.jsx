import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="w-full bg-neutral-800 fixed text-white h-12 items-center px-10 flex justify-between">
        <div className="flex gap-10">
          <Link to={"/user"}>
            <p>User</p>
          </Link>
          <Link to={"/"}>
            <p>Post</p>
          </Link>
          <Link to={"/album"}>
            <p>Album</p>
          </Link>
        </div>

        <div></div>

        <div>
          <label className="border-2 rounded-md p-1 cursor-pointer">
            AXA Frontend Test
          </label>
        </div>
      </div>

      {/* Put this part before </body> tag */}
    </div>
  );
}

export default Navbar;
