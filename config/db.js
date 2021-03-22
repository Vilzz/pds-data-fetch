import mongoose from 'mongoose'
import colors from 'colors'
const connectDB = async (path) => {
  const conn = await mongoose.connect(path, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  console.log(`MongoDB Connected: ${conn.connection.host}`.green)
}

export default connectDB
