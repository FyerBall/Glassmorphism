import React from 'react'
import styled from 'styled-components'
import Testimonials from './Testimonials'

function Features() {
  return (
    <Wrapper>
      <h2 className='title center'>Why us??</h2>
      <div className='reasons'>
        <ol className='list'>
          <li className='item'>Lorem, ipsum dolor.</li>
          <li className='item'>Lorem, ipsum dolor.</li>
          <li className='item'>Lorem, ipsum dolor.</li>
        </ol>
        <Testimonials />
      </div>
    </Wrapper>
  )
}

export default Features

const Wrapper = styled.section`
  background-color: #888;
  padding: 2%;
  .reasons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
