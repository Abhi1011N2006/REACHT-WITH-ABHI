import React from "react"



function Card({name,surname}) {
    return (<div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl border-2 mt-4">
        <div>
            <img
                className="size-48 shadow-xl rounded-md"
                alt=""
                src="https://tailwindcss.com/_next/static/media/cover.f75d494c.png"
            />
        </div>

        <div className="flex items-center md:items-start">
            <div className="flex flex-col gap-2">
                <span className="text-2xl font-medium">Name : {name}</span>
                <span className="font-medium text-sky-500">Surname : {surname}</span>

                <span className="flex gap-1 font-medium text-gray-600">
                    <span>No. 4</span>
                    <span>·</span>
                    <span>2025</span>
                </span>
            </div>
        </div>
    </div>
    )
}

export default Card;
