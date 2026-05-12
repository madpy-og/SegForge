import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true, minLength: 3 },
    email: {
      type: String,
      required: [true, "Email wajib diisi"],
      unique: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Silakan isi dengan format email yang valid",
      ],
    },
    passwordHash: { type: String, required: true, minLength: 8 },
    isVerified: { type: Boolean, default: false },
    verificationToken: { type: String, default: null },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre("save", async function () {
  if (!this.isModified("passwordHash")) return;
  this.passwordHash = await bcrypt.hash(this.passwordHash, 10);
});

UserSchema.methods.comparePassword = async function (inputPassword) {
  return await bcrypt.compare(inputPassword, this.passwordHash);
};

export default mongoose.model("User", UserSchema);
