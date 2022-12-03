import React from 'react'
import RealmeLogo from 'assets/realme.svg'
import Github from 'assets/github.svg'

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

const Seq = styled.p`
  color: #ccc;
  margin: 0px 12px;
`

const IndexPage = () => (
  <Layout title="realme">
    <GlobalStyle />
    <RealmeLogo />
    <Seq>/</Seq>
    <a href="https://github.com/JiangWeixian/realme" target="blank" rel="noopener">
      <Github width={30} height={30} className="fill-black" />
    </a>
  </Layout>
)

export default IndexPage
