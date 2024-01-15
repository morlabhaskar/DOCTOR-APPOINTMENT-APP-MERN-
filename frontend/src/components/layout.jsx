import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='main'>
        <div className='layout d-flex'>
            <div className='slide'>
                slide

            </div>
            <div className='content'>
                <div className='header'>
                    header

                </div>
                <div className='body'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Layout