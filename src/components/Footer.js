import React from 'react'
import { FaHeart } from 'react-icons/fa'
import styled from 'styled-components'
import { Icons, Newsletter } from '.'
function Footer() {
  return (
    <Wrapper>
      <Newsletter />
      <Icons />
      <p>
        made with{' '}
        <span>
          <FaHeart />
        </span>
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  background-color: #919191;
`
export default Footer
