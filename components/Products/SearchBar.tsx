import React from 'react'

const SearchBar = () => {
  return (
    <div className="flex items-center my-5 flex-1">
    <div className="flex  rounded space-x-4">
        <input
            type="text"
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Source Code You Need"
        />
        <button className="px-4 text-white bg-indigo-500 dark:bg-blue-400 border-l rounded ">
            Search
        </button>
    </div>
</div>
  )
}

export default SearchBar