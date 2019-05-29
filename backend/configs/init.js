
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
     schema:{
     name: 'Pracha-Utit',
     address: '555 Pracha-Utit road,thungKru,bangkok',
     zipcode: '10140',
     balance: 1,
     }
    }
]
const card =[{
    model:'card',
    schema:{
    accountId: accountRef,
    holder: 'Tony Jaa',
    expired: 2022-02-09,
    cvv: '122',
    pin: '123456',
    paymentDate:2019-05-30,
    isOnline: true
    }
}]

const cheque=[{
    model: 'cheque',
    schema:{
    chequeId: '900800700600500',
    byOrganizationId: organizationRef,
    accountId: accRef,
    accountNo: '400500600700800',
    amount: 5000,
    payee: 'Tom Hiddleton',
    type: 'CHASH',
    status: 'ACTIVE',
    drawee: 'Loki Adinson',

    drawDate: 2019-05-28
    }
}]
const customer =[{
    model:'customer',
    schema:{
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    email: { type: String, required: true },
    zipcode: { type: String, maxlength: 5 },
    address: String,
    birthDate: Date,
    gender: { type: String, enum: ['M', 'F', 'U'], required: true },
    citizenId: { type: String, maxlength: 13, required: true },
    phone: { type: String, maxlength: 13, required: true },
    lastAccess: Date,
    status: { type: String, enum: ['ACTIVE', 'LOCKED', 'TOKEN', 'RESETPASS', 'ETC'], default: 'ACTIVE' },
    favorite: [favoriteRef],
    notifications: [notifyRef],
    account: [accRef],
    balance: { type: Number, default: 0 },

    dateCreate: { type: Date, default: Date.now }

}
}]