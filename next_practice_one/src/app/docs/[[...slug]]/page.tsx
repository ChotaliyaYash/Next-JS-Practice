import React from 'react'

type propsType = {
    params: {
        slug: string[]
    }
}

const page = (props : propsType) => {

    // destructuring
    const { slug } = props.params

    if(slug?.length === 1) {
        return (
            <div>
                <h1>Feature: {slug[0]}</h1>
            </div>
        )
    } else if(slug?.length === 2) {
        return (
            <div>
                <h1>Feature: {slug[0]}</h1>
                <h2>concept: {slug[1]}</h2>
            </div>
        )
    }
    return (
        <div>
            <h1>Docs Home page</h1>
        </div>
    )
}

export default page