import Link from "next/link";
import React from "react";
import SearchBox from "../search-box/SearchBox";

export default function Header() {
    return (
        <div className="flex justify-between items-center p-5 mx-auto bg-[#121212]">
            <div className="flex items-center gap-1">
                <Link href={`/`} className="flex gap-1 items-center">
                    <span className="text-2xl text-black font-bold bg-[#f5c518] py-1 px-2 rounded-lg">
                        TMDb
                    </span>
                </Link>
            </div>
            <SearchBox />

        </div>
    )
}
