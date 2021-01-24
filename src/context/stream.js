import PropTypes from "prop-types"
import {createContext, useEffect, useState} from "react"
const StreamContext = createContext()

const StreamProvider = ({children}) => {
    const [stream, setStream] = useState()

    useEffect(() => {
        readStream()
    }, [])

    const readStream = async () => {
        try {
            const res = await fetch("/api/getStream")
            const data = await res.json()
            setStream(data)
        } catch (err) {
            console.error(err)
        }
    }

    const updateStream = async (id, title, guestHandle, passcode) => {
        try {
            const res = await fetch("/api/updateStream", {
                method: "POST",
                body: JSON.stringify({id, title, guestHandle, passcode}),
            })
            const updatedStream = await res.json()
            setStream(updatedStream)
        } catch (err) {
            console.error(err)
        }
    }

    const context = {
        stream,
        readStream,
        updateStream,
    }

    return (
        <StreamContext.Provider value={context}>
            {children}
        </StreamContext.Provider>
    )
}

StreamProvider.propTypes = {
    children: PropTypes.node,
}

export {StreamContext, StreamProvider}
