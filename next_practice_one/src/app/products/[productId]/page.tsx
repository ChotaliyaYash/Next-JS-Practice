import React from 'react'

type propsDetail = {
    params: {
        productId: string
    }
}

const ProductDetails = (props: propsDetail) => {
    // destructuring
    const {productId} = props.params
    
  return (
    <div>
        <h1>Product Details {productId}</h1>
    </div>
  )
}

export default ProductDetails