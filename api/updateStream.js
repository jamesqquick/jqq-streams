require("dotenv").config()
const {updateStream} = require("../src/utils/airtable")

module.exports = async function (context, req) {
    const {id, title, guestHandle, passcode} = req.body
    if (!passcode || passcode !== process.env.FORM_PASSCODE) {
        context.res = {
            status: 401,
        }
        return
    }
    const updates = {title, guestHandle}

    try {
        const updatedStream = await updateStream(id, updates, passcode)
        context.res = {
            status: 200,
            body: updatedStream,
        }
    } catch (err) {
        console.error(err)
        context.res = {
            status: 500,
        }
    }
}
