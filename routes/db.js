const { Schema, default: mongoose } = require("mongoose");
mongoose.connect("")
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = Schema({
    email: {type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const adminRouter = Schema({
    email: {type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String,
});

const courseRouter = Schema({
    title: String,
    description: String,
    prices: Number,
    imageUrl: String,
    creatorId: ObjectId
});

const purchaseSchema = Schema({
    userId: ObjectId,
    courseID: ObjectId
});

const userModel = mongoose.Model("user", userSchema);
const adminModel = mongoose.Model("admin", adminSchema);
const courseModel = mongoose.Model("course", courseSchema);
const purchaseModel = mongoose.Model("purchase", purchaseSchema);

module.exports {
    userModel: userModel
    courseModel: courseModel
    adminModel: adminModel
    purchaseModel: purchaseModel
}
