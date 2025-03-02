import { saveSearchHistory } from "./auth";

const handleSearch = async () => {
    const results = await fetchSearchResults(query);
    setResults(results);

    if (isAuthenticated()) {
        await saveSearchHistory(query);
    }
};