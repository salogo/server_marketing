import User from "../models/user"

export const register = async (req, res) => {
    console.log("REQ.BODY...",req.body)
    
    // validation
    const { name, email, password } = req.body;
    if (!name) return res.status(400).send("Name is required")
    if (!password || password.length < 6) return res.status(400).send("Password is required and has to be 6 Character long")

    let userExist = await User.findOne({ email }).exec()
    if ( userExist ) return res.status(400).send("Email is taken")

    //register
    const user = new User(req.body)
    try { 
        await user.save();
        console.log("USER CREATED", user);
        return res.json({ ok: true});
    } catch (err) {
        console.log("CREATE USER FAILED", err);
        return res.status(400).send("Error. Try angain");
    }
};

export const login = async ( req, res ) => {
  // console.log(req.body)
  const { email, password } = req.body;
  try { 

      let user = await User.findOne({ email }).exec();
      console.log("USER EXIST", user);

      if ( !user ) res.status(400).send('User with that email not found');

      user.comparePassword(password, ( err, match) => {
          console.log("COMPARE PASSWORD IN LOGIN ERR", err);
          if (!match || err ) return res.status(400).send("Wrong password or email");
          console.log("Generate a token...");
      });

  } catch (err) {
      console.log("LOGIN ERROR", err);
      res.status(400).send("Signin failed");
  }
};