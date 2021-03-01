import Icon from "components/Icon"
import PropTypes from "prop-types"
import styled from "styled-components"

const SocialLinkWrapper = styled.a`
    height: 40px;
    color: ${({theme}) => theme.colors.black};
    transition: all 300ms ease-out;
    color: ${({theme}) => theme.colors.white};
    &:hover {
        color: ${({theme}) => theme.colors.red};
    }
`

const SocialLink = ({platform}) => {
    return (
        <SocialLinkWrapper
            href={`https://${platform}.com/jamesqquick`}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Icon icon={platform} />
        </SocialLinkWrapper>
    )
}

SocialLink.propTypes = {
    platform: PropTypes.string.isRequired,
}

export default SocialLink
