import React from 'react'

export default function Button({ url, children }: { url:string, children: React.ReactNode }) {
    return <button
        className="[&>*:first-child]:m-0 border-0 px-5 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 cursor-pointer"
    onClick={() => window.open(url, '_blank')}>
        {children}
    </button>
}
