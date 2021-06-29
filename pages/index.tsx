import logo from '../assets/realme.svg'
import github from '../assets/github.svg'

import Image from 'next/image'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
  }
`

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`

type LogoProps = {
  width?: number
  height?: number
}

const Logo = styled.div`
  width: ${({ width = 150 }: LogoProps) => `${width}px`};
  height: ${({ height = 150 }: LogoProps) => `${height}px`};
  position: relative;
`

const Seq = styled.p`
  color: #ccc;
  margin: 0px 12px;
`

const IndexPage = () => (
  <Layout title="realme">
    <GlobalStyle />
    <Logo>
    <Image src={logo} layout="fill" />
    </Logo>
    <Seq>
    /
    </Seq>
    <Logo width={30} height={30}>
    <a href="https://github.com/JiangWeixian/realme" target="blank" rel="noopener">
      <Image src={github} layout="fill" />
    </a>
    </Logo>
  </Layout>
)

export default IndexPage
