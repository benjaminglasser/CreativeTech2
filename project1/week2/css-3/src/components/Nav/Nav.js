import React from 'react';

function Nav() {
    return (
        <div className="sticky top-0 bg-white">
            <ul className="p-4 flex border-solid border-4 border-r-0 border-black justify-between">
                <li className="px-2 py-1 hover:bg-black hover:text-white rounded-full">One</li>
                <li className="px-2 py-1 hover:bg-black hover:text-white rounded-full">Two</li>
                <li className="px-2 py-1 hover:bg-black hover:text-white rounded-full">Three</li>
            </ul>
        </div>
    )

}

export default Nav;
