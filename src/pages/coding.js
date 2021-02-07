import SEO from "@bradgarropy/gatsby-plugin-seo"
import SocialBar from "components/SocialBar"
import Video from "components/Video"
import styled from "styled-components"

const HostVideo = styled(Video)`
    position: absolute;
    right: 20px;
    bottom: calc(5rem - 8px);
    z-index: 1;
`

const CodingPage = () => {
    return (
        <>
            <SEO title="🎥 James Q Quick Twitch Coding" description="" />

            <HostVideo width="31.25vw" />
            <SocialBar />
        </>
    )
}

export default CodingPage
