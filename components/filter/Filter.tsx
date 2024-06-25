"use client"

import { year } from "@/constants/year";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Filter(props: any) {
    const moviesQuery = props.search;
    const [value, setValue] = useState<string>('1970');
    const router = useRouter();

    const handleFilterSubmit = (e: any) => {
        e.preventDefault();
        router.push(`/search/${moviesQuery}/filter/${value}`);
    };

    return (
        <div className="flex w-max mb-10 items-center">
            <h2 className="text-md text-yellow-400 me-5"><b>Filter by year</b></h2>
            <select value={value} onChange={(e) => setValue(e.target.value) } className="w-500 me-5 p-2 rounded-md outline-none flex-1">
                {
                    year.map( (item: any, index: number) => (
                        <option key={index} selected value={item.year}>{item.year}</option>
                    ))
                }
            </select>
            <button onClick={handleFilterSubmit} className="text-[#f5c518] disabled:text-gray-400 me-5" disabled={value === ''}>
                Filter
            </button>
        </div>
    )
}
