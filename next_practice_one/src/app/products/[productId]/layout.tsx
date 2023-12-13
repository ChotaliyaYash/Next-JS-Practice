"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

type propsType = {
    children: React.ReactNode
}

const ProductDetailLayout = (props: propsType) => {

    const { children } = props

    const router = useRouter()

    const handleClick = () => {
        console.log("Go Home");
        router.replace("/")
    }

    return (
        <>
            {children}
            <button onClick={handleClick} >Go Home</button>
        </>
    )
}

export default ProductDetailLayout