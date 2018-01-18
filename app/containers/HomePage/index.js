import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import sunburstLogo from 'assets/sunburst-logo.png'

import messages from './HomePage.messages'

const Container = styled.div`
    height: 100%;
`
const Img = styled.img`
    left: 50%;
    width: 500px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 540px) {
        width: 300px;
    }
`

const HomePage = () => (
    <Container>
        <Helmet>
            <title>{messages.helmet.title}</title>
            <meta name="description" content={messages.helmet.description} />
        </Helmet>
        <Img src={sunburstLogo} />
    </Container>
)

export default HomePage
