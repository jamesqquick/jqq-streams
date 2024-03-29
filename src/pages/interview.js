import SEO from "@bradgarropy/gatsby-plugin-seo"
import Background from "components/Background"
import Footer from "components/Footer"
import Handle from "components/Handle"
import SocialBar from "components/SocialBar"
import Video from "components/Video"
import {useStream} from "hooks"
import styled from "styled-components"

const Videos = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-gap: 50px;
    grid-auto-flow: column;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
`

const HostVideo = styled(Video)``

const HostHandle = styled(Handle)`
    justify-self: start;
    z-index: 1;
    /* box-shadow: 0 0 20px 0 ${({theme}) => theme.colors.shadow}; */
    clip-path: inset(0px -20px -20px -20px);
`

const GuestVideo = styled(Video)``

const GuestHandle = styled(Handle)`
    justify-self: end;
    z-index: 1;
    /* box-shadow: 0 0 20px 0 ${({theme}) => theme.colors.shadow}; */
    clip-path: inset(0px -20px -20px -20px);
`

const InterviewPage = () => {
    const {stream} = useStream()

    return (
        <>
            <SEO title="🎥 James Q Quick Twitch Interview" description="" />

            <Background />

            <Videos>
                <HostVideo size="md" />
                <HostHandle handle="jamesqquick" />

                <GuestVideo size="md" />
                <GuestHandle handle={stream?.twitterHandle} />
            </Videos>
            <Footer>
                <SocialBar />
            </Footer>
        </>
    )
}

export default InterviewPage
