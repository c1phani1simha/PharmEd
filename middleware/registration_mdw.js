// message for bad responses

const message=(req,res,next)=>{
    try{
        res.render('error/comming_soon',{'title':'Find a Doctor'});
    }
    catch(err){
        console.log(err);
        
    }
}

export default message;