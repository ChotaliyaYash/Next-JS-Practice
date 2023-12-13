import React from 'react'

type propsDetail = {
    params: {
        productId: string,
        reviewId: string
    }
}

const ReviewDetails = (props: propsDetail) => {
  
    // destructuring
    const {productId, reviewId} = props.params

    return (
    <div>
        <h1>Product: {productId}</h1>
        <h2>Review: {reviewId}</h2>
    </div>
  )
}

export default ReviewDetails