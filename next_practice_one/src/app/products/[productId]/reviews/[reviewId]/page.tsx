import React from 'react'
import {notFound} from "next/navigation"

type propsDetail = {
    params: {
        productId: string,
        reviewId: string
    }
}


const getRendomNumber = (count: number) => {
    return Math.floor(Math.random() * count)
  }
  

const ReviewDetails = (props: propsDetail) => {
  
    // destructuring
    const {productId, reviewId} = props.params

    if(parseInt(reviewId) > 1000) {
        return notFound()
    }

    const random = getRendomNumber(2)

    if(random === 1) {
        throw new Error('Something went wrong')
    }

    return (
    <div>
        <h1>Product: {productId}</h1>
        <h2>Review: {reviewId}</h2>
    </div>
  )
}

export default ReviewDetails