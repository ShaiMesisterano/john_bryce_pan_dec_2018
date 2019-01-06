const fs = jest.genMockFromModule('fs');

fs.readFile = function(filename){
  return new Promise((resolve, reject) => resolve('ok'));
}

module.exports = fs;