const roleMiddleware =(allowedroles)=>{
return (req,res,next)=>{
    if (!req.user) {
        return res.satus(401).json({
            message:"Authenication Required"
        })
    }
    if (!allowedroles.includes(req.user.role)) {
        return res.status(403).json({
            message:"Access Denied"
    })
    }
    next()
}
};
module.exports= roleMiddleware