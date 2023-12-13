import React from 'react'
import {Metadata} from "next"

type propsDetail = {
  params: {
    productId: string
  }
}

export const generateMetadata = async ({ params }: propsDetail): Promise<Metadata>=> {
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`MacBook Air: ${params.productId}`)
    }, 1000)
  })

  return {
    title: `Product: ${res}`,
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