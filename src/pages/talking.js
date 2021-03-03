import SEO from "@bradgarropy/gatsby-plugin-seo"
import Background from "components/Background"
import Footer from "components/Footer"
import SocialBar from "components/SocialBar"
import {PrimaryVideo} from "components/Video"
import styled from "styled-components"

const TalkingPage = () => {
    return (
        <>
            <SEO title="🎥 James Q Quick Twitch Talking" description="" />
            <Background />
            <PrimaryVideo size="lg" />
            <Footer>
                <SocialBar />
            </Footer>
        </>
    )
}

export default TalkingPage
