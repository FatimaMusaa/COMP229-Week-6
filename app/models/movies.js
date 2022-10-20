import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: String,
    year:String,
    director: String,
    genre: String,
    runtime: Number
},{
    timestamps: true,
    collation: 'movies'
})

export default mongoose.model('movies', MovieSchema);