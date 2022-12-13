import React from 'react'

import { CardTable } from '../'

export const Home = () => {
  return (
    <>
      <h1 className='text-center mt-5'>To-Do List</h1>
      <div className="d-flex flex-column">
        <div className="m-5">
          <CardTable />
        </div>
      </div>
    </>
  )
}
