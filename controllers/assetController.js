const Asset = require("../models/asset");


//middleware
exports.findAssetById = (req,res,next,id)=>{
    Asset.findById(id).exec((err,mov)=>{
        if(err){
            return res.status(400).json({
                err : "Asset not found"
            });
        }
        req.movie = mov;
        next();

    })
}

//create movie

exports.createAsset = (req,res)=>{
    let movie = new Asset(req.body);
    movie.save((err,mov)=>{
        if(err){
            return res.status(400).json({
                err:" failed to save in db"
            });
        }
        return res.status(200).json({
            msg: `Added  ${mov.name} to database`
        });
    })
}

//read movie

exports.getAsset = (req,res)=>{
    Asset.find({}).exec((err,mov)=>{
        if(err){
            return res.status(400).json({
                err : "No Movies found"
            });
        }
        return res.json(mov);
    })
}
exports.getOneAsset = (req,res)=>{
    Asset.findById(req.movie_id).exec((err,mov)=>{
        if(err){
            return res.status(400).json({
                err : "Asset not found"
            });
        }
        return res.json(mov);

    })
}

//update movie
exports.updateAsset = (req,res)=>{
    Asset.findByIdAndUpdate({
        _id: req.movie._id
    },{$set: req.body },
    {new: true, useFindAndModify:false},).exec((err,mov)=>{
        if(err){
            return res.status(400).json({
                err:"could not update"
            })
        }
        return res.json(mov);
    })
}

//delete movie

exports.deleteAsset = (req,res)=>{
    Asset.findOneAndDelete(
        {_id:req.movie._id}
    ).exec((err,mov)=>{
        if(err){
            return res.status(400).json({
                err: "Asset not deleted"
            });
            
        }
        return res.json({msg:"sucessfuly deleted"});
    })
}