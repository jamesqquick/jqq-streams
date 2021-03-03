import SocialLink from "components/SocialLink"
import styled from "styled-components"

const SocialsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    column-gap: 2.8rem;
    justify-content: start;
    align-items: center;
`

const SocialIcons = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: start;
    align-items: center;
    column-gap: 1.4rem;
`

const Handle = styled.span`
    font-size: 3.2rem;
    color: ${({theme}) => theme.colors.white};
    font-weight: 300;
    text-transform: uppercase;
`

const StyledInitial = styled.span`
    color: ${({theme, highlightColor}) => theme.colors[highlightColor]};
    font-weight: bold;
`

const Socials = ({bg = "red"}) => {
    const bgToHighlightColor = {
        red: "blue",
        blue: "red",
    }
    return (
        <SocialsWrapper>
            <SocialIcons>
                <SocialLink platform="twitter" />
                <SocialLink platform="youtube" />
                <SocialLink platform="github" />
            </SocialIcons>

            <Handle>
                @james
                <StyledInitial highlightColor={bgToHighlightColor[bg]}>
                    q
                </StyledInitial>
                quick
            </Handle>
        </SocialsWrapper>
    )
}

export default Socials
