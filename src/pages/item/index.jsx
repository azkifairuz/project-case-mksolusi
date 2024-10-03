/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Item() {
  const token = localStorage.getItem("token");
  const [error, setError] = useState(null);
  const [item, setItem] = useState([]);
  const fetchMember = async () => {
    try {
      const response = await axios.post(
        "https://api2024.mksolusi.id/api/master/item/index",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      setItem(response.data);
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
    }
  };
  useEffect(() => {
    fetchMember();
  }, []);
  return (
    <section className="container mx-auto p-6 font-mono">
      <Link to={"/dashboard/item/add"} className="mb-6 ml-auto">
        <button className="py-2 px-4 rounded-lg bg-primary mb-6  text-white">
          Tambah Data
        </button>
      </Link>
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">item code</th>
                <th className="px-4 py-3">name</th>
                <th className="px-4 py-3">item type</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {item.map((data, index) => {
                return (
                  <tr key={index} className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold text-black">
                            {data.item_code}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      {data.name}
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        {data.item_type.name}{" "}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </section>
  );
}
