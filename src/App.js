import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes/Routes'
function App() {

  return (
    <div className=''>
      <RouterProvider router={routes}></RouterProvider>
    </div>

  )
}

export default App

// <div className='flex min-h-screen justify-center items-center'>
// <RouterProvider router={router}></RouterProvider>
// </div>