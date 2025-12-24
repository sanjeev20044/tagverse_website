import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide a first name"],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide a last name"],
      maxlength: [60, "Name cannot be more than 60 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email",
      ],
    },
    projectDetails: {
      type: String,
      required: [true, "Please provide project details"],
    },
    phone: {
      type: String,
      required: false,
    },
    subject: {
      type: String,
      required: false,
    },
    message: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["new", "read", "replied", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Lead || mongoose.model("Lead", LeadSchema);
