import PropTypes from "prop-types"
import styled from "styled-components"
import Github from "svg/github.svg"
import Twitter from "svg/twitter.svg"
import Youtube from "svg/youtube.svg"

const IconWrapper = styled.span`
    height: 40px;
`

const iconsMap = {
    github: <Github />,
    twitter: <Twitter />,
    youtube: <Youtube />,
    // "twitch": <Twitch/>,
}

const Icon = ({icon}) => {
    return <IconWrapper aria-label={icon}>{iconsMap[icon]}</IconWrapper>
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
}

export default Icon
