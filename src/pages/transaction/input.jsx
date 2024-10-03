import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddItem() {
    const [itemCode, setItemCode] = useState("");
    const [type, setType] = useState("");
    const [name, setName] = useState("");
    const [stock, setStock] = useState("");
    const [price, setPrice] = useState("");
    const [itemTypes, setItemTypes] = useState([]); 
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchItemTypes = async () => {
            try {
                const response = await axios.post("https://api2024.mksolusi.id/api/master/item_type/index", 
                  {},
                  {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                  }
                );
                setItemTypes(response.data);
            } catch (error) {
                console.error("Error fetching item types:", error);
            }
        };

        fetchItemTypes();
    }, [token]);

    const inputItem = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://api2024.mksolusi.id/api/master/item/save", 
                {
                    item_code: itemCode,
                    type,
                    name,
                    stock: parseInt(stock), 
                    price: parseFloat(price)
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log(response.data);
            navigate('/dashboard/item'); 
        } catch (err) {
            console.error(err);
            setError("Failed to submit. Please check your inputs.");
        }
    };

    return (
        <div className="rounded-lg p-6 flex flex-col gap-4 w-[500px] shadow-md">
            <h1 className="text-lg">Add Item</h1>
            <form className="w-full" onSubmit={inputItem}>
                <div className="space-y-3">
                    <div className="space-y-2">
                        <label htmlFor="item_code" className="text-sm font-medium">
                            Item Code
                        </label>
                        <input
                            id="item_code"
                            className="border bg-background ring-offset-background flex h-10 w-full rounded-md px-3 py-2 text-sm"
                            placeholder="Enter item code"
                            value={itemCode}
                            onChange={(e) => setItemCode(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="type" className="text-sm font-medium">
                            Type
                        </label>
                        <select
                            id="type"
                            className="border bg-background ring-offset-background flex h-10 w-full rounded-md px-3 py-2 text-sm"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="" disabled>
                                Select Type
                            </option>
                            {itemTypes.map((itemType) => (
                                <option key={itemType.id} value={itemType.id}>
                                    {itemType.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                            Name
                        </label>
                        <input
                            id="name"
                            className="border bg-background ring-offset-background flex h-10 w-full rounded-md px-3 py-2 text-sm"
                            placeholder="Enter item name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="stock" className="text-sm font-medium">
                            Stock
                        </label>
                        <input
                            id="stock"
                            type="number"
                            className="border bg-background ring-offset-background flex h-10 w-full rounded-md px-3 py-2 text-sm"
                            placeholder="Enter stock quantity"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="price" className="text-sm font-medium">
                            Price
                        </label>
                        <input
                            id="price"
                            type="number"
                            className="border bg-background ring-offset-background flex h-10 w-full rounded-md px-3 py-2 text-sm"
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    {error && <p className="text-red-500">{error}</p>}

                    <button
                        type="submit"
                        className="bg-primary text-white w-full py-2 rounded-md"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
