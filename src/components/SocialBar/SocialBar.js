import Socials from "components/Socials"
import styled from "styled-components"

const SocialBarWrapper = styled.div`
    height: 5rem;
    padding: 0 2rem;
    display: grid;
`

const SocialBar = props => {
    console.log(props)
    return (
        <SocialBarWrapper>
            <Socials {...props} />
        </SocialBarWrapper>
    )
}

export default SocialBar
