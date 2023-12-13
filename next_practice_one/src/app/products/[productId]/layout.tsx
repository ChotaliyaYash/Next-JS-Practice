import React from 'react'

type propsType = {
    children: React.ReactNode
}

const ProductDetailLayout = (props: propsType) => {

    const { children } = props

    return (
        <>
            {children}
            <h2>Features products</h2>
        </>
    )
}

export default ProductDetailLayout