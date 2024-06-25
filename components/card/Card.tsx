import { IMG_PREV_URL } from '@/constants/env'
import Link from 'next/link'
import React from 'react'

export default function Card(props: any) {
    return (
        <>
            <Link href={`/movie/${props.data.id}`}>
                <div key={props.data.id} className="relatives rounded-xl bg-white bg-clip-border">
                    <div className="relative overflow-hidden rounded-xl bg-white bg-clip-border shadow-md">
                        <img src={IMG_PREV_URL + props.data.poster_path} />
                    </div>
                    <div className="my-2 flex items-center justify-between">
                        <b className="block font-sans text-sm font-medium leading-relaxed">
                            {props.data.title}
                        </b>
                    </div>
                </div>
            </Link> 
        </>
    )
}
