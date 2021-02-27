require("dotenv").config()
const {getStream} = require("../src/utils/airtable")

module.exports = async function (context, req) {
    try {
        const stream = await getStream()
        context.res = {
            body: stream,
        }
    } catch (err) {
        console.error(err)
        context.res = {
            status: 500,
        }
    }
}
