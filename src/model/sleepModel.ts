import mongoose, { Schema, model } from "mongoose";
interface sleepAssesment {
  id: mongoose.Schema.Types.ObjectId;
  userId: string;
  stepNo: number;
  sleepStruggle?:{from:number,to:number};
  bedTime?:Date,
  wakeUpTime?:Date ;
  sleepDuration?:number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

const sleepAssesmentSchema = new Schema<sleepAssesment>({
    id: { type: mongoose.Schema.Types.ObjectId },
    userId: { type:String,index:true },
    stepNo: {type:Number,min:0,max:4}, 
    sleepStruggle: {
        from:{type:Number},                    
        to:{type:Number},
     },
    bedTime: Date,
    wakeUpTime: Date,
    sleepDuration: { type: Number},   
     
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
});

const SleepAssesmentModel = model<sleepAssesment>(
  "SleepAssesment",
  sleepAssesmentSchema
);

export default SleepAssesmentModel;
