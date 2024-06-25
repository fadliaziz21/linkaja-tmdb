"use client";

import { getMoviesDetail } from '@/api/movies.detail.api';
import { IMG_ORI_URL, IMG_PREV_URL } from '@/constants/env';

export default async function MoviesDetail(params: any) {
    const moviesId = params.params.id;
    const data = await getMoviesDetail(moviesId);

    return (
        <>
            <div className="relative overflow-hidden h-96 bg-white bg-clip-border text-gray-700">
                <img src={IMG_ORI_URL + data.backdrop_path} className="h-full w-full object-cover"/>
            </div>
            <div className="relative p-10">
                <div className="grid text-black min-h-[500px] relative">
                    <div className="grid grid-cols-5 gap-10">
                        <div className="relatives overflow-hidden rounded-xl bg-white bg-clip-borders shadow-md">
                            <img src={IMG_PREV_URL + data.poster_path} className="h-full w-full object-cover"/>
                        </div>
                        <div className="col-start-2 col-span-4">
                            <h1 className="font-bold text-4xl tracking-wide">{data.title}</h1>
                            <h4 className="mt-3"><i>{data.tagline}</i></h4>
                            <div className="mt-3">
                                {
                                    data.genres.map( (item: any, index: number) => (
                                        <span key={index} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 me-2 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{item.name}</span>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                    <h1 className="font-semibold text-4xl tracking-wide">I have overlays</h1>
                    <p className="text-xs text-center leading-tight">Overlay applied using pseudo CSS element. where parent css is position relative and then sudo class is applied as absolute positioned</p>
                </div>
            </div>
        </>
    )
}
