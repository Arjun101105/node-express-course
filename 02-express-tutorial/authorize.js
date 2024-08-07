const authorize = (req,res,next)=>{
    const {user} = req.query
    if(user === 'arjun'){
        req.user = {name: 'arjun', id: 10}
        next()
    }else{
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize