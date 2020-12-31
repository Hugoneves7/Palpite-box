const { GoogleSpreadsheet } = require('google-spreadsheet')

const credentials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1dEu-OPYbBkpithh6MxjniqhTH2c7VkecZZcNK3FETRE')

const run = async () => {
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  console.log(doc.title)
}
run()