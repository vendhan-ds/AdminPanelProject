const mongoose = require("mongoose");
const experienceSchema = mongoose.Schema({
  cityId: {
    type: String,
    
  },
  displayName: {
    type: String,
    required: true,
  },
  startingPrice: {
    type: Number,
    required: true,
  },
  highlights: [String],
  nextAvailable: {
    type: String,
    
  },
  duration: {
    type: String,
    required: true,
  },
  thumbnailSrc: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Experience", experienceSchema);