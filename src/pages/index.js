import SEO from "@bradgarropy/gatsby-plugin-seo"
import Background from "components/Background"
import styled from "styled-components"
import SocialBar from "components/SocialBar"

const Hero = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    justify-items: center;
    width: 100%;
`

const Tagline = styled.span`
    text-transform: uppercase;
    font-size: 8.5rem;
    /* background-color: ${({theme}) => theme.colors.white}; */
    padding: 0 4rem;
    color: ${({theme}) => theme.colors.white};
    /* transform: skew(-3deg, -3deg); */
`

const IndexPage = () => {
    //TODO: get text from query param
    // const params = location.search
    const params = new URLSearchParams(document.location.search.substring(1))
    const text = params.get("text")
    return (
        <>
            <SEO title="🎥 James Q Quick Twitch BRB" description="" />

            <Background />

            <Hero>
                <img src="/logo.png" alt="James Q Quick 'Q' Logo" />
                {text && <Tagline>{text}</Tagline>}
            </Hero>
            <SocialBar />
        </>
    )
}

export default IndexPage
