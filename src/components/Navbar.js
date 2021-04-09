import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
function Navbar() {
  return (
    <Wrapper className='container'>
      <img src={logo} alt='rocket' className='logo' />
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  padding-top: 33px;

  @media (max-width: 820px) {
    .logo {
      display: block;
      margin: 0 auto;
    }
  }
`

export default Navbar
