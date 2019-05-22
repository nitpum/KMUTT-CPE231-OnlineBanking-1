export default {
  namespaced: true,
  state: () => ({
    cards: [
      {
        number: '0000-1111-2222-3333',
        type: 'Debit card',
        holder: 'Firstname Lastname',
        provider: 'VISA'
      },
      {
        number: '4000-1111-2222-3333',
        type: 'Debit card',
        holder: 'Firstname Lastname',
        provider: 'VISA',
        accountId: '000-0-000000-0'
      }
    ]
  })
}
