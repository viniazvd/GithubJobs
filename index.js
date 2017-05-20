const Client = require("./../lib/index");
const testAuth = require("./../testAuth.json");

const github = new Client({
    debug: true
});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

const callback = ( err, res ) => {
    console.log(err, res);
};

github.users.get({}, callback);