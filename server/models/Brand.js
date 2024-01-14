import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  contact: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  // email: {
  //   type: String
  // },

  agency: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  abbreviation: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  primaryBkgrnd: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9#: ]*$/
  },

  secondaryBkgrnd: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9#: ]*$/
  }
});

const Brand = mongoose.model("Brand", brandSchema);

export default Brand;
