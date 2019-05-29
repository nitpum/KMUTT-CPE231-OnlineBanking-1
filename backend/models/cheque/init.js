
const init = [
    {
        model: 'admin',
        schema: {
            username: 'admin',
            password: 'admin',
            email: 'admin@gmail.com',
            permission: 'admin',
        }
    }
]

const account = [
    {
     model: 'account',
     schema: {
        accountId: '100200300400500',
        customerId: customerRef,
        accountType: typeRef,
        branchId: branchRef,
        balance: 2000,
        status: 'ACTIVE'
     }
    }
]

const branch = [
    {
     model :'branch',
     name: 'Pracha-Utit',
     address: '555 Pracha-Utit road,thungKru,bangkok',
     zipcode: '10140',
     balance: 1,
    }
]
const card =[{
    model:'card',
    accountId: accountRef,
    holder: 'Tony Jaa',
    expired: 2022-02-09,
    cvv: '122',
    pin: '123456',
    paymentDate:2019-05-30,
    isOnline: true

}]

const cheque=[{
    model: 'cheque',
    chequeId: '900800700600500',
    byOrganizationId: organizationRef,
    accountId: accRef,
    accountNo: '400500600700800',
    amount: 5000,
    payFor: String,
    type: { type: String, enum: ['CHASH', 'ORDER', 'ETC'] },
    status: { type: String, enum: ['ACTIVE', 'REJECT', 'ETC'] },
    drawee: { type: String, required: true },
    created: { type: Date, default: Date.now },
    drawDate: { type: Date, required: true }
}]
