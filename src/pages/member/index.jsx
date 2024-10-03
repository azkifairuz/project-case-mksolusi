import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Member() {
  const token = localStorage.getItem("token");
  const [error, setError] = useState(null);
  const [memberData, setMemberData] = useState([]);
  console.log(token);
  const fetchMember = async () => {
    try {
      const response = await axios.post(
        "https://api2024.mksolusi.id/api/master/user/index",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      setMemberData(response.data);
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
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">fullname</th>
                <th className="px-4 py-3">username</th>
                <th className="px-4 py-3">role</th>
                <th className="px-4 py-3">action</th>

              </tr>
            </thead>
            <tbody className="bg-white">
              {memberData.map((data, index) => {
                return (
                  <tr key={index} className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold text-black">{data.detail.fullname}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      {data.username}
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        {data.detail_type}{" "}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm border">
                      <Link>
                      <button className="bg-primary py-2 px-4 text-white rounded-lg">Detail</button>
                      </Link>
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
