import React from 'react'

export default function Button({ url, children, target }: { url:string, children: React.ReactNode, target?: string }) {
    return <button
        className="border-0 px-4 py-1.5 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 cursor-pointer"
    onClick={() => window.open(url, target ?? '_blank')}>
        {children}
    </button>
}
