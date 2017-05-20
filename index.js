var GitHubApi = require("github");
 
var github = new GitHubApi({
    // optional 
    debug: true,
    protocol: "https",
    host: "github.my-GHE-enabled-company.com", // should be api.github.com for GitHub 
    pathPrefix: "/api/v3", // for some GHEs; none for GitHub 
    headers: {
        "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent 
    },
    Promise: require('bluebird'),
    followRedirects: false, // default: true; there's currently an issue with non-get redirects, so allow ability to disable follow-redirects 
    timeout: 5000
});
 
// TODO: optional authentication here depending on desired endpoints. See below in README. 
 
github.users.getFollowingForUser({
    // optional 
    // headers: { 
    //     "cookie": "blahblah" 
    // }, 
    username: "defunkt"
}, function(err, res) {
    console.log(JSON.stringify(res));
});
