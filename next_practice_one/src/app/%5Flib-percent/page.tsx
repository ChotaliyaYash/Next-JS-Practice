import React from 'react'

const PrivateRoute = () => {
  return (
    <div>
        <h1>Can be render in route beacuse %5F === _: so _lib-percent can be accessed</h1>
    </div>
  )
}

export default PrivateRoute