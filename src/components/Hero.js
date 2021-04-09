import React from 'react'
import styled from 'styled-components'

function Hero() {
  return (
    <Wrapper>
      <div className='content'>
        <h1>To the moon and beyond</h1>
        <p>
          Glassmorphism is a unified name for the popular Frosted Glass
          aesthetic. It has many names...
        </p>
      </div>
      <button>Learn More</button>
    </Wrapper>
  )
}

export default Hero
const Wrapper = styled.main`
  display: grid;
  place-items: center;
  height: calc(100vh - 140px);
  text-align: center;

  h1 {
    margin-bottom: 55px;

    font-weight: 800;
    font-size: 55px;
    line-height: 77px;

    color: #0498e7;
  }

  p {
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    width: 633px;
    color: #f8f8f8;
    margin: 0 auto;
  }

  button {
    background: radial-gradient(
      100% 1645.78% at 0% 0%,
      rgba(81, 101, 172, 0.172) 0%,
      rgba(233, 234, 238, 0.2) 100%
    );
    box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
    color: #cb7981;
    font-weight: bold;
    font-size: 32px;
    width: 357px;
    height: 88px;
    font-family: Sarpanch;
    border-radius: 30px;
    transition: all 0.1s linear;
    &:hover {
      transform: scale(0.9);
      box-shadow: 0px 2px 2px rgba(34, 34, 34, 0.25);
    }
    &:active {
      box-shadow: 0px 7px 7px rgba(0, 0, 0, 0.25);
    }
  }

  @media (max-width: 820px) {
    p {
      width: 500px;
      font-size: 17px;
    }
  }
`
