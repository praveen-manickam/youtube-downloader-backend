const mongoose = require("mongoose");

const jobs = new mongoose.Schema({
    status: {
        type:String,
        enum: ["started", "cancelled", "done"],
  },
  url: {
    type: String,
    required: true,
  },
  fileLocation: {
    type: String,
  },
},{
  timestamps:true
});

module.exports = mongoose.model("jobs", jobs);
