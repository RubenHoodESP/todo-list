import React from 'react'
import './Home.css'

import { CardTable } from '../'

export const Home = () => {
  return (
    <>
    <div className="vh-100 d-flex flex-column">
      <div className="container-fluid p-5">
        <h1 className='text-center'>To-Do List</h1>
      </div>
      <div className="h-100 bg-grad-dark">
        <div className="m-5">
          <CardTable />
        </div>
      </div>
    </div>
    </>
  )
}
