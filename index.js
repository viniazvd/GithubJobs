const Client = require("./../lib/index");
const testAuth = require("./../testAuth.json");

const callback = ( err, res ) => {
    console.log(err, res);
};

const github = new Client({
    debug: true
});

github.authenticate({
    type: "oauth",
    token: testAuth["token"]
});

github.users.get({}, callback);