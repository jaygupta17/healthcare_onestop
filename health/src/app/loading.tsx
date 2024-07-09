"use client"
import { BallTriangle, BallTriangleProps } from "react-loader-spinner";
export default function Loading() {
    return(
        <div className="flex h-[90vh] justify-center items-center">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#a688fa"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass="flex justify-center items-center"
                visible={true}
            />
        </div>
    )
}