const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    name: {
        type: String,
    },
    realData: {
        type: Object,
    }
});

const BookingModel = mongoose.model("DumpData", dataSchema);
module.exports = BookingModel;