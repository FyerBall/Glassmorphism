import { Navbar } from './components'
import Home from './pages/Home'
import styled from 'styled-components'
import bg from './assets/bg1.jpeg'
function App() {
  return (
    <Container>
      <Wrapper className='App'>
        <Navbar />
        <Home />
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  background: ${`url(${bg}) no-repeat center `},
    linear-gradient(110.95deg, #5165ac 1.15%, #563a88 101.46%);
  background-size: cover;
`
const Wrapper = styled.div`
  height: 100%;
  background: rgba(81, 101, 172, 0.54);
  backdrop-filter: blur(50px);
`
/*  */
export default App
