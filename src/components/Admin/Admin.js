import {useStream} from "hooks"
import {useEffect, useState} from "react"
import styled from "styled-components"

const Form = styled.form`
    width: 100%;
    height: 100%;
    display: grid;
    justify-content: center;
    align-content: center;
    row-gap: 3rem;
    font-size: 3rem;
`

const FormField = styled.div`
    display: grid;
    row-gap: 1rem;
`

const Label = styled.label`
    color: ${({theme}) => theme.colors.white};
    text-shadow: 2px 2px 0px ${({theme}) => theme.colors.black};
`

const Input = styled.input`
    padding: 1rem 2rem;
    border: none;
    border: 0.2rem solid ${({theme}) => theme.colors.black};
`

const Button = styled.button`
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.white};
    border: 0.4rem solid ${({theme}) => theme.colors.black};
    margin-top: 5rem;
    cursor: pointer;
`

const Admin = () => {
    const streamCtx = useStream()
    const [isLoading, setIsLoading] = useState(false)
    const [passcode, setPasscode] = useState("")
    const [stream, setStream] = useState(streamCtx.stream)

    useEffect(() => {
        if (streamCtx.stream) {
            setStream(streamCtx.stream)
        }
    }, [streamCtx])

    const onChange = event => {
        const newStream = Object.assign({}, stream)
        newStream[event.target.name] = event.target.value
        setStream(newStream)
    }

    const onSubmit = async event => {
        event.preventDefault()

        setIsLoading(true)
        await streamCtx.updateStream(
            stream.id,
            stream.title,
            stream.guestHandle,
            passcode,
        )
        setIsLoading(false)
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormField>
                <Label htmlFor="title">title</Label>

                <Input
                    type="text"
                    name="title"
                    id="title"
                    value={stream?.title ?? ""}
                    onChange={onChange}
                />
            </FormField>

            <FormField>
                <Label htmlFor="guestHandle">guest handle</Label>

                <Input
                    type="text"
                    name="guestHandle"
                    id="guestHandle"
                    value={stream?.guestHandle ?? ""}
                    onChange={onChange}
                />
            </FormField>

            <FormField>
                <Label htmlFor="passcode">passcode</Label>

                <Input
                    type="password"
                    name="passcode"
                    id="passcode"
                    value={passcode}
                    onChange={e => setPasscode(e.target.value)}
                />
            </FormField>

            <Button>{isLoading ? "saving..." : "save"}</Button>
        </Form>
    )
}

export default Admin
