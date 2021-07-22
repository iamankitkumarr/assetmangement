const express = require('express');
const router = express.Router();

const {createAsset,
    getAsset,
    updateAsset,
    deleteAsset,
    findAssetById, 
    getOneAsset} = require('../controllers/assetController');


router.param("assetID",findAssetById);

//create movie
router.post("/asset",createAsset);

//read movie 

router.get("/assets",getAsset);
router.get('/asset/:assetID',getOneAsset);


//delete movie 
router.delete("/asset/:assetID",deleteAsset);

//update movie
router.put("/asset/:assetID",updateAsset);


module.exports = router;