import { useState } from "react";
import { useNavigate } from "react-router-dom";

const [searchType, setSearchType] = useState("search");

const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/${searchType}?q=${query}`);
};

<select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
    <option value="search">Web</option>
    <option value="images">Images</option>
</select>
{
    return (
        <div className="flex justify-center items-center mt-10">
            <form onSubmit={handleSearch} className="w-full max-w-lg">
                <input
                    type="text"
                    className="border p-2 rounded-lg w-4/5"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button 
                    type="submit"
                    className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;