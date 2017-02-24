var configValues = require('./config');

module.exports = {
  getDbConnectionString: function(){
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd +  '@ds043262.mlab.com:43262/mwnodetodo';
  }
};