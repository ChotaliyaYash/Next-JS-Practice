import React from 'react'
import {notFound} from "next/navigation"

type propsDetail = {
    params: {
        productId: string,
        reviewId: string
    }
}

const ReviewDetails = (props: propsDetail) => {
  
    // destructuring
    const {productId, reviewId} = props.params

    if(parseInt(reviewId) > 1000) {
        return notFound()
    }

    return (
    <div>
        <h1>Product: {productId}</h1>
        <h2>Review: {reviewId}</h2>
    </div>
  )
}

export default ReviewDetails