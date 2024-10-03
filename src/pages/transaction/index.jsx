/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Transaction() {
  const token = localStorage.getItem("token");
  const [error, setError] = useState(null);
  const [transactions, setTransactions] = useState([]);
  
  const fetchTransactions = async () => {
    try {
      const response = await axios.post(
        "https://api2024.mksolusi.id/api/transaction/index",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      setTransactions(response.data);
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your credentials.");
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <section className="container mx-auto p-6 font-mono">
      <Link to={"/dashboard/transaction/add"} className="mb-6 ml-auto">
        <button className="py-2 px-4 rounded-lg bg-primary mb-6 text-white">
          Tambah Data
        </button>
      </Link>
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Transaction Number</th>
                <th className="px-4 py-3">Transaction Time</th>
  
                <th className="px-4 py-3">Detail</th>


              </tr>
            </thead>
            <tbody className="bg-white">
              {transactions.map((transaction, index) => {
                return (
                  <tr key={index} className="text-gray-700">
                    <td className="px-4 py-3 border">
                      <div className="flex items-center text-sm">
                        <div>
                          <p className="font-semibold text-black">
                            {transaction.transaction_number}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      {transaction.transaction_time}
                    </td>
                 
                    <td className="px-4 py-3 text-ms font-semibold border">
                    <ul>
                      {transaction.sales_transactions.map((sale, idx) => (
                        <li key={idx}>
                          Item ID: {sale.item_id}, Qty: {sale.qty}, Price: {sale.item_price}, 
                          Total Gross: {sale.total_gross_price}, Discount: {sale.discount}
                        </li>
                      ))}
                    </ul>
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
