require("dotenv").config()
const {updateStream} = require("../src/utils/airtable")
exports.handler = async function (event) {
    const {id, title, guestHandle, passcode} = JSON.parse(event.body)
    if (!passcode || passcode !== process.env.FORM_PASSCODE) {
        return {
            statusCode: 401,
        }
    }
    const updates = {title, guestHandle}

    try {
        const updatedStream = await updateStream(id, updates, passcode)
        return {
            statusCode: 200,
            body: JSON.stringify(updatedStream),
        }
    } catch (err) {
        console.error(err)
        return {statusCode: 500}
    }
}
