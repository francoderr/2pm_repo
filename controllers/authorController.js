var Author  = require('../models/author');

exports.author_list = function(req, res) {
    res.send("Not Implemented: Author list");
};

exports.author_detail = function(req, res) {
    res.send ("Not implemented: Author detail: " + req.params.id);
};

exports.author_create_post = function(req, res) {
    res.send("Not implemented: Author create POST");
};

exports.author_delete_get = function(req, res) {
    ressend("not implemented: Author delete GET");
};

exports.author_update_get = function(req, res) {
    res.send("Not implemented: Author update GET");
};

exports.author_update_post = function(req, res) {
   res.send("Not implemented: Author update POST");
};