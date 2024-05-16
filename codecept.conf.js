/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'http://localhost:3000/api'
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  name: 'restapi'
}