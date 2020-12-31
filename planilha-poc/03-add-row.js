const { GoogleSpreadsheet } = require('google-spreadsheet')
const credentials = require('./credentials.json')
const doc = new GoogleSpreadsheet('1dEu-OPYbBkpithh6MxjniqhTH2c7VkecZZcNK3FETRE')

const run = async () => {
  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[1]
  //Nome:	Email:	Whatsapp:	Cupom:	Promo:
  await sheet.addRow({
    Nome: 'Tulio',
    Email: 'contato@devpleno.com',
    Whatsapp: '35 999090011',
    Cupom: 'aaa111',
    Promo: 'asaijdaidj'
  })
}
run()