exports.getData=(req, res, next)=>{
    const response = {
        message : "Hello World"
      };
    console.log("get Method")
   res.status(200).send(response);
}

exports.showUserData=(req, res, next)=>{
    let userData=req.body.userData;
    const response = {
        name : userData.name,
        age : userData.age,
        sex : userData.sex
      };
    console.log("post Method")
   res.status(200).send(response);
}