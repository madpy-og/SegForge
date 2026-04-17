import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true, minLength: 3 },
    email: { type: String, required: true, unique: true, minLength: 5 },
    passwordHash: { type: String, required: true, minLength: 3 },
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
