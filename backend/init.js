const config = require('./configs/init')

const ServiceRefModel = require('./models/servicReference/schema')
const ServiceRefTypeModel = require('./models/servicReference/type/schema')
const OrganizationModel = require('./models/organization/schema')

const serviceRef = (id, org) => new Promise((resolve, reject) => {
  ServiceRefModel.findOne({ detail: config.serviceReference.detail }, (err, doc) => {
    if (err) reject(err)
    if (!doc) {
      const parser = {
        ...config.serviceReference,
        ...{ typeId: id, organizationId: org }
      }
      const doc = new ServiceRefModel(parser)
      doc.save()
      console.log('create new service ref')
      resolve(doc._id)
    } else {
      resolve()
      console.log('already service ref')
    }
  })
})

const serviceRefType = () => new Promise((resolve, reject) => {
  ServiceRefTypeModel.findOne({ name: config.serviceReferenceType.name }, (err, doc) => {
    if (err) reject(err)
    if (!doc) {
      const doc = new ServiceRefTypeModel(config.serviceReferenceType)
      doc.save()
      resolve(doc._id)
    } else {
      resolve()
      console.log('already serviceRefType ref')
    }
  })
})

const organization = () => new Promise((resolve, reject) => {
  OrganizationModel.findOne({ name: config.organization.name }, (err, doc) => {
    if (err) return reject(err)
    if (!doc) {
      const doc = new OrganizationModel(config.organization)
      doc.save()
      console.log('create new organization')
      resolve(doc._id)
    } else {
      resolve()
      console.log('already organization')
    }
  })
})

const run = async () => {
  try {
    const serRefType = await serviceRefType()
    const org = await organization()
    const serRef = await serviceRef(serRefType, org)
    return true
  } catch (err) {
    console.error(err)
    return err
  }
}

module.exports = run
