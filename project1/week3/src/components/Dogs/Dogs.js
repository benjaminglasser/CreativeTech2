import React from 'react';
// import { useEffect, useState } from 'react'

function Dogs(props) {


    if (props.isLoading) {
        return <div>Loading pups :)</div>
    }

    return (
        <>

            {
                props.dogs[0].message.map((d, idx) =>
                    <div key={idx} >
                        {/* <img src={d} key={idx} alt={idx} /> */}
                        <div className="rounded bg-cover bg-center p-32" style={{ backgroundImage: `url(${d})` }}></div>
                    </div>
                )
            }
        </>
    )
}



export default Dogs;
