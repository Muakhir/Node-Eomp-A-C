

function errorHandling(err,req,res,next){
    if(err || req.statusCode >= 400){
        res.json({status:err.statusCode || res.statusCode ||
                  500,msg: "An error occurred,please try again later"
        })
    }else{
        next()
    }
}
export{errorHandling}