import React from 'react';
// import { useEffect, useState } from 'react'

function Dogs(props) {


    if (props.isLoading) {
        return <div>Loading pups :)</div>
    }

    return (
        <>
            <div>pups</div>
            {
                props.dogs[0].message.map((d, idx) =>
                    <img src={d} key={idx} alt={idx} />
                )
            }
        </>
    )
}

export default Dogs;
