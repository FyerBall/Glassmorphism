import React from 'react'

function Trusted() {
  let companies = ['Google ', 'Yahoo', 'Tesla ', 'MGM ', 'LG']
  return (
    <div>
      <h2 className='title center'>Trusted by</h2>
      <p className='center'>{companies}</p>
    </div>
  )
}

export default Trusted
