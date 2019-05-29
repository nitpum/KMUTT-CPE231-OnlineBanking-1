
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
    username: 'Christ Hamwest',
    password: '123456',
    name: {
        firstName: 'Christ',
        lastName: 'Hamwest'
    },
    email: 'christ.h@mail.com',
    zipcode: '10140',
    address: '33 Pracha-Utit road,TungKru,bangkok ',
    birthDate: 1990-01-02,
    gender: 'M',
    citizenId:'3544455566777',
    phone: '0909998877',
    lastAccess: 2019-04-25,
    status: 'LOCKED',
    favorite: [favoriteRef],
    notifications: [notifyRef],
    account: [accRef],
    balance: 10000,
    }
}]
