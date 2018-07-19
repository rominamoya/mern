import mongoose from 'mongoose';

const Schema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastName: 'string',
  firstName: 'string',
  email: 'string',
  country: 'string',
}, { versionKey: false });
export default mongoose.model('contact', Schema);
