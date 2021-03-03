import SEO from "@bradgarropy/gatsby-plugin-seo"
import Background from "components/Background"
import Footer from "components/Footer"
import SocialBar from "components/SocialBar"
import {PrimaryVideo, SecondaryVideo} from "components/Video"

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
