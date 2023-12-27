import mongoose  from "mongoose";

async function connec(){
    await mongoose.connect(`mongodb+srv://harshithd:12345@cluster0.davt7xr.mongodb.net/?retryWrites=true&w=majority`)
}
export default connec