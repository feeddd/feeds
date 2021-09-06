const fs = require('fs');

const feeds = {};
fs.readFileSync('feeds_all_rss.txt', 'utf-8')
  .split('\n')
  .map((n) => {
    const splitted = n.split(' ');
    const url = splitted.shift();
    feeds[splitted.join(' ')] = url;
  });

fs.writeFileSync('feeds_all_rss.json', JSON.stringify(feeds, null, 2));
