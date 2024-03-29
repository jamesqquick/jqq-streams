import PropTypes from "prop-types"
import styled from "styled-components"

const StyledHandle = styled.div`
    font-size: 3.6rem;
    /* background-color: ${({theme}) => theme.colors.white}; */
    /* padding: 1.2rem 2.4rem; */
`

const Handle = ({handle, ...props}) => {
    console.log("hey")
    const mention = handle ? `@${handle}` : ""
    console.log(handle, mention)
    return <StyledHandle {...props}>{mention}</StyledHandle>
}

Handle.propTypes = {
    handle: PropTypes.string,
}

export default Handle
