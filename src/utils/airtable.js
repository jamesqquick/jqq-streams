const Airtable = require("airtable")
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(
    process.env.AIRTABLE_BASE_ID,
)

const streamTable = base(process.env.AIRTABLE_STREAM_TABLE_NAME)

const minifyRecord = record => {
    return {
        id: record.id,
        ...record.fields,
    }
}

const minifyRecords = records => records.map(record => minifyRecord(record))

const updateStream = async (id, fields) => {
    const updates = await streamTable.update([{id, fields}])
    return minifyRecord(updates[0])
}

const getStream = async () => {
    const records = minifyRecords(
        await streamTable
            .select({
                maxRecords: 1,
                filterByFormula:
                    "DATETIME_DIFF( streamDate, today(), 'days') = 0",
            })
            .firstPage(),
    )
    console.log(records)
    if (records.length !== 1) {
        return null
    }
    return records[0]
}

module.exports = {
    streamTable,
    minifyRecord,
    minifyRecords,
    getStream,
    updateStream,
}
