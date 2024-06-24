import { IMG_URL } from '@/constants/env'
import React from 'react'

export default function Card(props: any) {
    return (
        <>
            <div key={props.data.id} className="relatives rounded-xl bg-gray-100 bg-clip-border text-gray-700 shadow-md py-3">
                <div className="relative mx-2 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={IMG_URL + props.data.poster_path}
                    />
                </div>
                <div className="p-2">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {props.data.title}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
