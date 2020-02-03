const Ajv = require('ajv')
const schema = require('./schema/schema.json');
const mock = require('./mock/model.json');

const ajv = new Ajv();

const engineValidator = ajv.compile(schema)
const valid = engineValidator(mock);

if (!valid)
    engineValidator.errors.forEach(error => {
        console.log(error.message)
    })

