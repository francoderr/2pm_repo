var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        name: {type: String, minLength: 3, maxLength: 100, required: true},
        category: {type: String, required: true, enum: ['fiction', 'non-fiction', 'romance', 'military-history'], default: 'fiction'},
    }
);

GenreSchema.Virtual("url").get(function () {
    return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema)