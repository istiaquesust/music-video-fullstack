
import { mongoose, Schema } from "mongoose";

const clientSchema = new Schema(
    {
        full_name:  {
            type: String,
            required: true
          },
        email: {
            type: String,
            required: true
          },
        password: {
            type: String,
            required: true
          },
        payment_completed: Boolean,
        at_a_time_users: Number,
    },
    {
        timestamps: true,
    }
)

export const Client = mongoose.models.Client || mongoose.model('Client', clientSchema);