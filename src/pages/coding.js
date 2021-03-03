import SEO from "@bradgarropy/gatsby-plugin-seo"
import Background from "components/Background"
import Footer from "components/Footer"
import SocialBar from "components/SocialBar"
import {PrimaryVideo, SecondaryVideo} from "components/Video"
import styled from "styled-components"

const HostScreen = styled(Video)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const HostWebcam = styled(Video)`
    position: absolute;
    right: 4rem;
    bottom: calc(20px);
    z-index: 1;
`

const CodingPage = () => {
    return (
        <>
            <SEO title="🎥 James Q Quick Twitch Coding" description="" />
            <Background />
            <PrimaryVideo size="lg" />
            <SecondaryVideo size="sm" />

            <Footer>
                <SocialBar />
            </Footer>
        </>
    )
}

export default CodingPage
