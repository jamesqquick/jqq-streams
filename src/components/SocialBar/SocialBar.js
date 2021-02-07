import Socials from "components/Socials"
import styled from "styled-components"

const SocialBarWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 100px;
    transform: translateX(-50%);
    height: 5rem;
    padding: 0 2rem;
    display: grid;
`

const SocialBar = () => {
    return (
        <SocialBarWrapper>
            <Socials />
        </SocialBarWrapper>
    )
}

export default SocialBar
