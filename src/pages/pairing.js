import SEO from "@bradgarropy/gatsby-plugin-seo"
import Handle from "components/Handle"
import {useStream} from "hooks"
import PropTypes from "prop-types"
import styled from "styled-components"
import SocialBar from "components/SocialBar"
import Footer from "components/Footer"
import Background from "components/Background"
import {PrimaryVideo, SecondaryVideo, TertiaryVideo} from "components/Video"

const StyledHandle = styled(Handle)`
    position: absolute;
    top: 0;
    right: 0;
`

const PairingPage = () => {
    const {stream} = useStream()

    return (
        <>
            <SEO title="🎥 James Q Quick Twitch Pairing" description="" />
            <Background />

            <PrimaryVideo size="lg" />

            <TertiaryVideo size="sm">
                {/* <StyledHandle handle={stream?.guestHandle} /> */}
            </TertiaryVideo>

            <SecondaryVideo size="sm">
                {/* <StyledHandle handle="jamesqquick" /> */}
            </SecondaryVideo>
            <Footer>
                <SocialBar />
            </Footer>
        </>
    )
}

PairingPage.propTypes = {
    location: PropTypes.object,
}

export default PairingPage
