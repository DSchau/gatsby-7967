const pages = require('gh-pages');

function main() {
  return new Promise((resolve, reject) => {
    pages.publish('public', {
      dest: 'blog'
    }, err => {
      if (err) {
        return reject(err);
      }
      return resolve();
    })
  });
}

main()
  .then(() => console.log('Uploaded to github pages'));
