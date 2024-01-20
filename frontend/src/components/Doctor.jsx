import React from 'react'

const Doctor = ({doctor}) => {
  return (
    <div className='card p-2'>
        <h1 className='card-title'>{doctor.firstName} { doctor.lastName}</h1>
    </div>
  )
}

export default Doctor