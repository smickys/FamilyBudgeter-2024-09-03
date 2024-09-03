const mongoose = require('mongoose')

if(!process.env.MONGO) {
    throw new Error("MONGO environment variable is not set")
}

mongoose.connect(process.env.MONGO)

const db = mongoose.connection

db.on('error', () => console.log('Failed to connect to MongoDB'))
db.once('open', () => console.log('Connected to MongoDB'))

// USERS schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: String }
})

const User = mongoose.model('User', userSchema)

// // WALLET schema
// const walletSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     created_at: { type: String },
//     archived: { type: Boolean, default: false },
//     users: [
//         {
//             user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//             role: { type: String, enum: ['Administrator', 'Moderator'], required: true }
//         }
//     ]
// })

// const Wallet = mongoose.model('Wallet', walletSchema)

module.exports = {
    db,
    mongoose,
    User
}