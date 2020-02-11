var ghpages = require('gh-pages');
ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/lzg0321/kyc-admin.git'
}, function(res) {
  console.log('github page deploy success!');
});
