import { useEffect, useState } from "react";
import axios from "axios";

const Trending = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await axios.get("https://search-engine-backend.onrender.com");
                setTrending(response.data);
            } catch (error) {
                console.error("Error fetching trending searches", error);
            }
        };
        fetchTrending();
    }, []);

    return (
        <div className="mt-6">
            <h2 className="text-lg font-semibold">Trending Searches</h2>
            <ul>
                {trending.map((item, index) => (
                    <li key={index} className="text-blue-500">{item._id} ({item.count})</li>
                ))}
            </ul>
        </div>
    );
};

export default Trending;