import SEO from "@bradgarropy/gatsby-plugin-seo"
import Background from "components/Background"
import styled from "styled-components"
import SocialBar from "components/SocialBar"
import useCountdown from "@bradgarropy/use-countdown"

const Hero = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    width: 90%;
    margin-top: -5rem;
`

const Logo = styled.img`
    max-height: 500px;
`

const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Tagline = styled.span`
    text-transform: uppercase;
    font-size: 16rem;
    padding: 0 4rem;
    color: ${({theme}) => theme.colors.white};
    margin-bottom: 4rem;
    text-align: center;
`

const StyledUrl = styled.p`
    position: absolute;
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%);
    font-size: 12rem;
    margin: 0;
    color: ${({theme}) => theme.colors.lightBlue};
    text-transform: uppercase;
`

const CountdownPage = () => {
    const countdown = useCountdown({minutes: 5})
    const minutes = countdown.minutes.toString().padStart(2, 0)
    const seconds = countdown.seconds.toString().padStart(2, 0)
    const time = `${minutes}:${seconds}`

    return (
        <>
            <SEO title="🎥 James Q Quick Twitch BRB" description="" />
            <Background color="secondary" />
            <Hero>
                <Logo src="/logo-red.png" alt="James Q Quick Logo" />
                <HeaderText>
                    <Tagline>{time}</Tagline>
                    <SocialBar bg="blue" />
                </HeaderText>
            </Hero>
            <StyledUrl>jamesqquick.com</StyledUrl>
        </>
    )
}

export default CountdownPage
