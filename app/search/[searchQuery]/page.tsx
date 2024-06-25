"use client"

import { searchMovies } from "@/api/movies.search.api";
import Card from "@/components/card/Card";
import Filter from "@/components/filter/Filter";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function MovieSearch(params: any) {
    const moviesQuery = params.params.searchQuery;
    const [movieListData, setMovieListData] = useState<any>({});

    useEffect(() => {
        if(moviesQuery) {
            searchMovies(moviesQuery).then((response) => {
                setMovieListData(response);
            });
        }
    }, [moviesQuery]);

    return (
        <>
            <div className="relative p-8">
                <h1 className="mb-5 text-2xl text-white"><b>Your movies search result for {moviesQuery}</b></h1>
                <h1 className="mb-10 text-white">Found {movieListData?.total_results} result</h1>
                    {
                        movieListData.total_results === 0
                        ? 
                            <div className="text-center">
                                <h1 className="text-center pt-6 text-white mb-5">Sorry we can't search your movies.</h1>
                                <Link href={`/`} className="items-center">
                                    <h5 className="text-yellow-400 text-center font-bold">
                                        Back to home page
                                    </h5>
                                </Link>
                            </div>

                        : <div> 
                            <div className="relative">
                                <Filter search={moviesQuery} />
                            </div>
                            <div className="grid grid-cols-8 gap-5">
                                {
                                    movieListData?.results?.map( (item: any, index: number) => (
                                        <Card key={index} data={item} />
                                    ))
                                }
                            </div>
                        </div>
                    }
            </div>
        </>
    )
}
