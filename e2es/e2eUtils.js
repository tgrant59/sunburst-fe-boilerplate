import uuidv4 from 'uuid/v4'

import port from '../server/port'

const testRunId = uuidv4()

let baseUrl
switch (process.env.E2E_TARGET) {
    case 'production':
        baseUrl = 'https://amazon.sunburst.io/'
        break
    case 'staging':
        baseUrl = 'https://amazon-dev.sunburst.io/'
        break
    case 'local':
    default:
        baseUrl = `http://localhost:${port}/`
}

const getBoilerplateUrlBypassingCloudfrontCache = path =>
    `${baseUrl}${path}?nocache=${testRunId}`

export const getBoilerplateUrl = (path = '') =>
    getBoilerplateUrlBypassingCloudfrontCache(path)
