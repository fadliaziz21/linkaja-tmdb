"use client";

import { getMoviesDetail } from '@/api/movies.detail.api';
import { IMG_ORI_URL, IMG_PREV_URL } from '@/constants/env';
import { useEffect, useState } from 'react';

export default function MoviesDetail(params: any) {
    const moviesId = params.params.id;
    const [movieData, setMovieData] = useState<any>({});
    const [releaseDate, setReleaseDate] = useState<string>('');
    const [rating, setRating] = useState<number>(0);
    const [runTime, setRunTime] = useState<string>('');

    useEffect(() => {
        if(moviesId) {
            getMoviesDetail(moviesId).then((response) => {
                setMovieData(response);
                setReleaseDate(getYear(response.release_date));
                setRating(getRating(response.vote_average));
                setRunTime(getRunTime(response.runtime));
            });
        }
    }, [moviesId]);

    const getYear = (params: string) => {
        let releaseDate = params;
        let dateSplit = releaseDate.split('-');
        let year = dateSplit[0];
        return year;
    }

    const getRating = (params: number) => {
        let number = params;
        let rounded = Math.round(number * 10) / 10;
        return rounded;
    }

    const getRunTime = (params: number) => {
        let hour =  Math.floor(params/60);
        let minute = params % 60;
        let result = hour + 'h ' + minute + 'm';
        return result;
    }

    return (
        <>
            <div className="relative overflow-hidden h-96 bg-clip-border text-white">
                <img src={IMG_ORI_URL + movieData?.backdrop_path} className="h-full w-full object-cover"/>
            </div>
            <div className="relative p-10">
                <div className="grid text-white relative">
                    <div className="grid grid-cols-4 gap-10">
                        <div className="relatives overflow-hidden rounded-xl bg-clip-borders shadow-md">
                            <img src={IMG_PREV_URL + movieData?.poster_path} className="h-fulls w-full object-cover"/>
                        </div>
                        <div className="col-start-2 col-span-4">
                            <h1 className="text-4xl text-white tracking-wide"><b>{movieData?.title}</b> {` (${releaseDate})`} <span className="inline-flex items-center rounded-md bg-yellow-30 px-2 py-1 me-2 text-xs font-medium text-yellow-400 ring-1 ring-inset ring-yellow-400/10">{runTime}</span></h1>
                            <h4 className="mt-3"><i>{movieData?.tagline}</i></h4>
                            <div className="mt-3">
                                <span className="me-3"><b>Rating</b></span>
                                <span className="inline-flex items-center rounded-md bg-yellow-30 px-2 py-1 me-2 text-xs font-medium text-yellow-400 ring-1 ring-inset ring-yellow-400/10">{rating}</span>
                            </div>
                            <div className="mt-3">
                                <span className="me-3"><b>Genre</b></span>
                                {
                                    movieData?.genres?.map( (item: any, index: number) => (
                                        <span key={index} className="inline-flex items-center rounded-md bg-yellow-30 px-2 py-1 me-2 text-xs font-medium text-yellow-400 ring-1 ring-inset ring-yellow-400/10">{item.name}</span>
                                    ))
                                }
                            </div>
                            <h3 className="mt-3 text-yellow-400"><b>Overview</b></h3>
                            <p className="text-md text-white">{movieData?.overview}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
