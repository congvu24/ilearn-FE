import moment from "moment";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postLiveSearch } from "../../api/page";

export default function HomeSearch() {
  const [result, setResult] = useState([]);

  const handleSearch = async (q) => {
    const res = await postLiveSearch(q);
    const { content } = res;
    setResult(content);
  };

  return (
    <div className="w-full max-w-xl mx-auto relative ">
      <div className="z-10 relative flex items-center w-full max-w-xl  bg-white rounded-md justify-between shadow-sm">
        <input
          onChange={(e) => handleSearch(e.target.value)}
          className="w-5/6 mx-2 h-full py-3 px-4 text-xl font-light"
          placeholder="Enter your key words"
        />
        <button className="py-2 px-4 text-gray-500 h-full">
          <i class="fas fa-search"></i>
        </button>
      </div>
      {result && result.length > 0 && (
        <div className="z-0 w-full bg-white h-40 absolute top-0 left-0 rounded-md pt-16 px-2">
          <ul>
            {result.map((item) => (
              <Link to={`/detail/${item.ClassId}`}>
                <li className="p-2 hover:bg-gray-100">
                  <p className="text-xl">
                    {item.Topic}
                    <span className="text-base"> by {item.OwnerName}</span>
                  </p>
                  <p>{moment(item.StartTime).format("lll")}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
