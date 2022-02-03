import React from 'react';
import { motion } from "framer-motion"

function Left() {
    return (
        <>
            <div className="w-1/3 flex justify-center border-solid border-black border-l-4 border-b-4">
                <div className="text-xl p-5 text-justify">
                    <motion.div
                        drag
                        dragConstraints={{
                            top: -20,
                            left: -20,
                            right: 20,
                            bottom: 20,
                        }}
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quasi facere inventore omnis. Adipisci sit, necessitatibus, fugiat qui eos architecto numquam ad dolores non, libero impedit perspiciatis aliquid itaque quasi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio maiores veritatis at illo blanditiis dolorem, nisi magni, doloremque magnam laboriosam repellat, sed alias fugit. Sapiente consectetur doloremque repellat! Autem, repudiandae.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quasi facere inventore omnis. Adipisci sit, necessitatibus, fugiat qui eos architecto numquam ad dolores non, libero impedit perspiciatis aliquid itaque quasi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio maiores veritatis at illo blanditiis dolorem, nisi magni, doloremque magnam laboriosam repellat, sed alias fugit. Sapiente consectetur doloremque repellat! Autem, repudiandae.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quasi facere inventore omnis. Adipisci sit, necessitatibus, fugiat qui eos architecto numquam ad dolores non, libero impedit perspiciatis aliquid itaque quasi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio maiores veritatis at illo blanditiis dolorem, nisi magni, doloremque magnam laboriosam repellat, sed alias fugit. Sapiente consectetur doloremque repellat! Autem, repudiandae.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quasi facere inventore omnis. Adipisci sit, necessitatibus, fugiat qui eos architecto numquam ad dolores non, libero impedit perspiciatis aliquid itaque quasi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio maiores veritatis at illo blanditiis dolorem, nisi magni, doloremque magnam laboriosam repellat, sed alias fugit. Sapiente consectetur doloremque repellat! Autem, repudiandae.
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Left;
