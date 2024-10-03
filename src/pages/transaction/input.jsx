import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTransaction() {
    const [transactionNumber, setTransactionNumber] = useState("");
    const [customer, setCustomer] = useState("");
    const [items, setItems] = useState([{ id: "", qty: "", discount: "" }]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const addItemField = () => {
        setItems([...items, { id: "", qty: "", discount: "" }]);
    };

    const handleItemChange = (index, field, value) => {
        const newItems = items.map((item, i) => (
            i === index ? { ...item, [field]: value } : item
        ));
        setItems(newItems);
    };

    const removeItemField = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const inputTransaction = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "https://api2024.mksolusi.id/api/transaction/save", 
                {
                    transaction_number: transactionNumber,
                    customer: parseInt(customer),
                    items: items.map(item => ({
                        id: parseInt(item.id),
                        qty: parseInt(item.qty),
                        discount: parseFloat(item.discount)
                    }))
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            console.log(response.data);
            navigate('/dashboard/transactions'); 
        } catch (err) {
            console.error(err);
            setError("Failed to submit. Please check your inputs.");
        }
    };

    return (
        <div className="rounded-lg p-6 flex flex-col gap-4 w-[500px] shadow-md">
            <h1 className="text-lg">Add Transaction</h1>
            <form className="w-full" onSubmit={inputTransaction}>
                <div className="space-y-3">
                    <div className="space-y-2">
                        <label htmlFor="transaction_number" className="text-sm font-medium">
                            Transaction Number
                        </label>
                        <input
                            id="transaction_number"
                            className="border bg-background ring-offset-background flex h-10 w-full rounded-md px-3 py-2 text-sm"
                            placeholder="Enter transaction number"
                            value={transactionNumber}
                            onChange={(e) => setTransactionNumber(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="customer" className="text-sm font-medium">
                            Customer ID
                        </label>
                        <input
                            id="customer"
                            type="number"
                            className="border bg-background ring-offset-background flex h-10 w-full rounded-md px-3 py-2 text-sm"
                            placeholder="Enter customer ID"
                            value={customer}
                            onChange={(e) => setCustomer(e.target.value)}
                        />
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-sm font-medium">Items</h2>
                        {items.map((item, index) => (
                            <div key={index} className="flex gap-3 items-center">
                                <input
                                    type="number"
                                    placeholder="Item ID"
                                    value={item.id}
                                    onChange={(e) => handleItemChange(index, "id", e.target.value)}
                                    className="border bg-background ring-offset-background flex h-10 rounded-md px-3 py-2 text-sm w-1/3"
                                />
                                <input
                                    type="number"
                                    placeholder="Quantity"
                                    value={item.qty}
                                    onChange={(e) => handleItemChange(index, "qty", e.target.value)}
                                    className="border bg-background ring-offset-background flex h-10 rounded-md px-3 py-2 text-sm w-1/3"
                                />
                                <input
                                    type="number"
                                    placeholder="Discount"
                                    value={item.discount}
                                    onChange={(e) => handleItemChange(index, "discount", e.target.value)}
                                    className="border bg-background ring-offset-background flex h-10 rounded-md px-3 py-2 text-sm w-1/3"
                                />
                                {items.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeItemField(index)}
                                        className="text-red-500 text-sm"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={addItemField}
                            className="text-blue-500 text-sm"
                        >
                            + Add Item
                        </button>
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
