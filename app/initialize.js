var elasticsearch = require('elasticsearch')

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
})

console.log(client)

document.addEventListener('DOMContentLoaded', function() {
  // do your setup here
});

