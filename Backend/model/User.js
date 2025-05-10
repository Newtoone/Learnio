const moongoose = require('mongoose');
const userSchema = new moongoose.Schema({
    name: {type : String , require : true},
    email: { type : String, require : true },
    password: { type : String, require : true },
    phone_number: { type : String , require : true }
});

module.exports = moongoose.model("User", userSchema);