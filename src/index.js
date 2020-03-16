import 'dotenv/config';
var GitHub = require('github-api');

// Set data for pull request
let username = "felixhaeberle"; // username should change or could be a bot
let repoName = "openmoji-contrib-tool"; // this never changes
let title = "this is a test title for a test pull request";
let head = "new-test-branch";
let base = "master"; // this never changes
let body = "this is the body, markdown could go here"; // here could be markdown content

// Authentication
var gh = new GitHub({
  username: username,
  token: process.env.SECRET
});

(async () => {
  const repo = await gh.getRepo(username, repoName);
  //repo.createBranch(base, head);
  const master = await repo.getBranch(base).then(result => {
    const masterSHA = result.data.commit.sha;
    console.log(masterSHA);
  });
  const branch = await repo.getBranch(head).then((result) => {
    const newBranchSHA = result.data.commit.sha;
    console.log(masterSHA);
  });
})();




