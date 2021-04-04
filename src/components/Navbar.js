import React from 'react'
import styled from 'styled-components'
function Navbar() {
  return (
    <Wrapper>
      <h1 className='logo'>astronaut</h1>
      <ul className='links'>
        <li className='link'>section 1</li>
        <li className='link'>section 2</li>
        <li className='link'>section 3</li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  a {
    color: white;
    text-decoration: none;
  }

  .links {
    display: flex;
    align-items: center;

    .link {
      margin: 0 16px;
      padding-bottom: 5px;
      cursor: pointer;

      &:hover {
        border-bottom: 1px white solid;
      }
    }
  }
`

export default Navbar
