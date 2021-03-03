import PropTypes from "prop-types"
import styled from "styled-components"

const VideoWrapper = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    box-sizing: border-box;
    /* border: 1.8rem solid ${({theme}) => theme.colors.black}; */
    box-shadow: 0 0 0px 10px ${({theme}) => theme.colors.black};
    border-radius: 10px;
    &:before {
        display: block;
        content: "";
        width: 100%;
        padding-top: 56.25%;
    }
`

const Video = ({children, size = "sm", ...props}) => {
    const sizeToDimensions = {
        sm: {
            width: "400px",
            height: "225px",
        },
        md: {
            width: "900px",
            height: "500px",
        },
        lg: {
            width: "1600px",
            height: "900px",
        },
    }
    const width = sizeToDimensions[size].width
    const height = sizeToDimensions[size].height
    console.log(width, height)
    return (
        <VideoWrapper width={width} height={height} {...props}>
            {children}
        </VideoWrapper>
    )
}

Video.propTypes = {
    width: PropTypes.string,
    children: PropTypes.node,
}

export default Video

const PrimaryVideo = styled(Video)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const SecondaryVideo = styled(Video)`
    position: absolute;
    right: 20px;
    bottom: calc(5rem - 8px);
    z-index: 1;
`

const TertiaryVideo = styled(Video)`
    position: absolute;
    right: 20px;
    bottom: calc(5rem - 8px);
    transform: translateY(-115%);
    z-index: 1;
`

export {PrimaryVideo, SecondaryVideo, TertiaryVideo}
