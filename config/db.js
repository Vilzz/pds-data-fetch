import mongoose from 'mongoose'

const connectDB = async (path) => {
  const conn = await mongoose.connect(path, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  console.log(`MongoDB Connected: ${conn.connection.host}`)
}

export default connectDB
