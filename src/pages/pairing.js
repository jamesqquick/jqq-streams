import SEO from "@bradgarropy/gatsby-plugin-seo"
import Handle from "components/Handle"
import Video from "components/Video"
import {useStream} from "hooks"
import PropTypes from "prop-types"
import styled from "styled-components"
import SocialBar from "components/SocialBar"

const GuestVideo = styled(Video)`
    position: absolute;
    right: 20px;
    bottom: calc(5rem - 8px);
    transform: translateY(-115%);
    z-index: 1;
`

const HostVideo = styled(Video)`
    position: absolute;
    right: 20px;
    bottom: calc(5rem - 8px);
    z-index: 1;
`

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

            <GuestVideo width="31.25vw">
                <StyledHandle handle={stream?.guestHandle} />
            </GuestVideo>

            <HostVideo width="31.25vw">
                <StyledHandle handle="jamesqquick" />
            </HostVideo>

            <SocialBar />
        </>
    )
}

PairingPage.propTypes = {
    location: PropTypes.object,
}

export default PairingPage
