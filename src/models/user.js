module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            firstName: String,
            lastName: String,
            email: String,
            country: String,
            province: String,
            city: String,
            address: String,
            postalCode: String,
            phone: { type: String, required: true }
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const User = mongoose.model("users", schema);
    return User;
};
