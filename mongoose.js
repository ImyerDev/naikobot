this.mongoose = require("mongoose")
this.returnMongooseConnection = async function Mongoose() {
await this.mongoose.connect(`mongodb+srv://${process.env.MONGOOSE_USER}:${process.env.MONGOOSE_PASS}@database.kn2uh.azure.mongodb.net/${process.env.MONGOOSE_DBNAME}?retryWrites=true&w=majority`, {useNewUrlParser:true,useUnifiedTopology:true})
}
module.exports = this.returnMongooseConnection()