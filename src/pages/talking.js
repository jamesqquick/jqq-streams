import SEO from "@bradgarropy/gatsby-plugin-seo"
import Background from "components/Background"
import Footer from "components/Footer"
import SocialBar from "components/SocialBar"
import Video from "components/Video"
import styled from "styled-components"

const HostWebcam = styled(Video)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const TalkingPage = () => {
    return (
        <>
            <SEO title="🎥 James Q Quick Twitch Talking" description="" />
            <Background />
            <HostWebcam width="68.75vw" />
            <Footer>
                <SocialBar />
            </Footer>
        </>
    )
}

export default TalkingPage
