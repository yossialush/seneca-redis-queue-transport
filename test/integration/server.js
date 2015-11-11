var Transport = require('./redis-queue-transport')
var Seneca = require('seneca')

var color = function () {
  this.add('color:red', function (args, callback) {
    callback(null, {hex: '#000000'})
  })
}

Seneca({
  default_plugins: {
    transport: true
  }
})
  .use(Transport)
  .use(color)
  .listen({port: 8000})

