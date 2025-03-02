import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Results = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:5000/search?q=${query}&page=${page}`);
                setResults(response.data.organic_results || []);
            } catch (error) {
                console.error("Error fetching search results", error);
            }
            setLoading(false);
        };

        if (query) fetchResults();
    }, [query, page]);

    return (
        <div className="container mx-auto p-4">
            {loading && <p>Loading...</p>}
            {!loading && results.length === 0 && <p>No results found.</p>}
            <ul>
                {results.map((result, index) => (
                    <li key={index} className="border-b py-2">
                        <a href={result.link} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                            {result.title}
                        </a>
                        <p className="text-sm">{result.snippet}</p>
                    </li>
                ))}
            </ul>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
                <button onClick={() => setPage(page - 1)} disabled={page === 1} className="px-4 py-2 bg-gray-300 rounded">
                    Previous
                </button>
                <span className="mx-4">{page}</span>
                <button onClick={() => setPage(page + 1)} className="px-4 py-2 bg-gray-300 rounded">
                    Next
                </button>
            </div>
        </div>
    );
};

export default Results;