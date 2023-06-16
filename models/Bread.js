const mongoose = require("mongoose");

const breadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  hasGluten: {
    type: Boolean,
  },
  image: {
    type: String,
    default:
      "https://i.pinimg.com/originals/ee/73/de/ee73de1d42c37ea4b6f8a544b9ad3091.jpg",
  },
  // baker: {
  //   type: mongoose.Types.ObjectId,
  //   ref: 'Baker'
  // }
});

module.exports = mongoose.model("Bread", breadSchema);
