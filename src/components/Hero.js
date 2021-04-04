import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <Wrapper>
      <h3>Hey I am the hero!!</h3>
    </Wrapper>
  )
}

export default Hero
const Wrapper = styled.main`
  background-color: #969090;
  height: calc(90vh - 75px);
  display: grid;
  place-items: center;
`
