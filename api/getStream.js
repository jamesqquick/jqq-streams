require("dotenv").config()
const {getStream} = require("../src/utils/airtable")
exports.handler = async function () {
    try {
        const stream = await getStream()
        return {
            statusCode: 200,
            body: JSON.stringify(stream),
        }
    } catch (err) {
        console.error(err)
        return {statusCode: 500}
    }
}
