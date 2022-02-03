
import React from 'react';


function Sidebar() {
    return (
        <div className="md:sticky md:top-0 md:w-20 md:h-screen border-solid border-4 border-black">
            <ul className="text-xs flex flex-col items-center w-full">
                <li className="my-20 px-2 py-1 hover:bg-black hover:text-white rounded-full">Resume</li>
                <li className="mb-20 px-2 py-1 hover:bg-black hover:text-white rounded-full">About</li>
                <li className="mb-20 px-2 py-1 hover:bg-black hover:text-white rounded-full">Contact</li>
            </ul>
        </div>
    )
}

export default Sidebar;


