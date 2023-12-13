import React from 'react'

type AuthLayoutProps = {
    children: React.ReactNode
}

const AuthLayout = (props: AuthLayoutProps) => {

    const { children } = props

    return (
        <>
            <h1>Auth Layout</h1>
            {children}
        </>
    )
}

export default AuthLayout