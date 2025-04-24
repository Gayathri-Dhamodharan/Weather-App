
"use client";
import { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";
import { fetchCities } from "../Services/fetchCities";

export function useCitySearch(query) {
  const debouncedQuery = useDebounce(query, 50);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      setError("");
      return;
    }

    const search = async () => {
      setLoading(true);
      try {
        const cities = await fetchCities(debouncedQuery);
        const filtered = cities.filter((city) =>
          city.toLowerCase().startsWith(debouncedQuery.toLowerCase())
        );

        setResults(filtered);
        setError(filtered.length === 0 ? "No place available" : "");
      } catch (err) {
        setResults([]);
        setError("No place available");
      } finally {
        setLoading(false);
      }
    };

    search();
  }, [debouncedQuery]);

  return { results, error, loading };
}
