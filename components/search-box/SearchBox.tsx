"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchBox() {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        router.push(`/search/${search}`);
        setSearch('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search movies here" className="w-500 me-5 h-5 p-5 placeholder-gray-200 rounded-md outline-none flex-1"
                value={search} onChange={(e) => setSearch(e.target.value)}
            />
            <button className="text-[#f5c518] disabled:text-gray-400 me-5" disabled={search === ''}>
                Search
            </button>
        </form>
    )
}
