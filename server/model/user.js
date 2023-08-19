import mongoose from "mongoose";

const userScehma =mongoose.Schema(
    {
        name:{
            type: String,
            require:true
        },
        username:{
            type: String,
            require:true,
            unique:true,
        },
        password:{
            type: String,
            require:true,

        }
    }
    
)

const user= mongoose.model('user',userScehma);

export default user