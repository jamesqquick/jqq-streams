import {Link, navigate} from "gatsby"
import {useEffect, useState} from "react"
import styled from "styled-components"

const StyledNavigation = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    grid-auto-flow: column;
    column-gap: 2.5rem;
    padding: 1rem 2rem;
    transition: all 300ms ease-out;
    visibility: ${({show}) => (show ? "visible" : "hidden")};
`

const NavigationLink = styled(Link)`
    font-size: 4rem;
    text-decoration: none;
    color: ${({theme}) => theme.colors.black};

    &:hover {
        text-decoration: underline;
    }
`

const routesPaths = [
    "/",
    "/talking/",
    // "/sharing/",
    "/coding/",
    "/interview/",
    "/pairing/",
]

const Navigation = () => {
    const [isVisible, setIsVisible] = useState(false)
    //TODO: get current route
    const currentRoute = window ? window.location.pathname : ""
    let currentIndex = routesPaths.indexOf(currentRoute)

    const onKeyDown = event => {
        if (event.code === "ControlLeft") {
            setIsVisible(isVisible => !isVisible)
        } else if (event.code === "ArrowLeft") {
            if (currentIndex === 0) {
                navigate(routesPaths[routesPaths.length - 1])
                currentIndex = routesPaths.length - 1
            } else {
                navigate(routesPaths[--currentIndex])
            }
        } else if (event.code === "ArrowRight") {
            if (currentIndex === routesPaths.length - 1) {
                navigate(routesPaths[0])
                currentIndex = 0
            } else {
                navigate(routesPaths[++currentIndex])
            }
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", onKeyDown)

        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [])

    return (
        <StyledNavigation role="navigation" show={isVisible}>
            <NavigationLink to="/">brb</NavigationLink>
            <NavigationLink to="/talking">talking</NavigationLink>
            {/* <NavigationLink to="/sharing">sharing</NavigationLink> */}
            <NavigationLink to="/coding">coding</NavigationLink>
            <NavigationLink to="/interview">interview</NavigationLink>
            <NavigationLink to="/pairing">pairing</NavigationLink>
        </StyledNavigation>
    )
}

export default Navigation
