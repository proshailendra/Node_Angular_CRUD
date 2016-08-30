var express = require("express"),
    users = require("../models/user.js"),
    router = express.Router();

//Get:All
router.get("/", function(req, res) {
    res.send(users);
});

//Get:id
router.get("/:id", function(req, res) {
    var id = req.params.id;
    for (var i = 0; i < users.length; i++) {
        if (users[i].userId == id) {
            return res.send(users[i]);
        }
    }
    res.send({});
});
//POST:
router.post("/", function(req, res) {
    var obj = req.body;
    obj.userId = users.length + 1;
    users.push(obj);
    res.send("created");
});
//put:id - modification
router.put("/:id", function(req, res) {
    var id = req.params.id;
    var obj = req.body;
    for (var i = 0; i < users.length; i++) {
        if (users[i].userId == id) {
            users[i].name = obj.name;
            users[i].address = obj.address;
            users[i].contactNo = obj.contactNo;

            return res.send("updated");
        }
    }
    res.send("not found");
});
//delete:id
router.delete("/:id", function(req, res) {
    var id = req.params.id;
    for (var i = 0; i < users.length; i++) {
        if (users[i].userId == id) {
            users.splice(i, 1);
            return res.send("deleted");
        }
    }
    res.send({});
});

module.exports = router;