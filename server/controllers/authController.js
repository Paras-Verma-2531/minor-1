const User=require('../model/User');
const{success,error}=require('../utils/responseWrapper')
const bcrypt=require('bcrypt');
const signupController = async (req, res) => {
    const{name,password,email,blood_group,phone_no,city,age}=req.body;
    if(!name||!email||!password||!blood_group||!city||!age||!phone_no)return res.send(error(400,"all fields are required"))
    const user=await User.findOne({email});
    if(user)return res.send(error(400,"user already registered"));
    const hashPass=await bcrypt.hash(password,10);
  try {
    const newUser=await User.create({
      name,
      password:hashPass,
      email,
      phone_no,
      city,
      age,
      blood_group
    }); 
    return res.send(success(200,{newUser}))
  } catch (err) {
    console.log(err);
    return res.send(error(500,err.message))
  }
};
const loginController=async(req,res)=>
{
  return res.json('ok')
}
module.exports={loginController,signupController}