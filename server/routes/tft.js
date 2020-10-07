const express = require('express')
const router = express.Router()
var path = require("path");

const fs = require('fs');
const champs = JSON.parse(fs.readFileSync('./data/champions.json', 'utf-8'));
const items = JSON.parse(fs.readFileSync('./data/items.json', 'utf-8'));
const traits = JSON.parse(fs.readFileSync('./data/traits.json', 'utf-8'));


// @desc   
// @route   GET /
router.get('/',async (req,res) =>{
	try{
	}catch(err){
		console.log(err)
	}
})

// @desc   
// @route   GET /
router.get('/getChamps',async (req,res) =>{
	try{
        let champArray= []
        let traitsArray = [];
        for(let i = 0;i<champs.length;i++){
            let trait = '';
            for(let j=0;j<champs[i].traits.length;j++){
                for(let k=0;k<traits.length;k++){
                    if(traits[k].key == champs[i].traits[j]){
                        trait = traits[k].name;
                    }
                }
                traitsArray.push(trait);
            }
            
            champArray.push({name:champs[i].name,cost:champs[i].cost,trait:traitsArray});
            traitsArray = [];
        }

        //var jsonObject = JSON.stringify(champArray);
        res.json(champArray);
	}catch(err){
		console.log(err)
	}
})

// @desc   
// @route   GET /
router.get('/getChampByName/:name',async (req,res) =>{
	try{
        let champArray = [];
        let traitsArray = [];

        for(let i = 0;i<champs.length;i++){
            if(champs[i].name.toLowerCase() == req.params.name.toLowerCase()){
                let trait = '';
                for(let j=0;j<champs[i].traits.length;j++){
                    for(let k=0;k<traits.length;k++){
                        if(traits[k].key == champs[i].traits[j]){
                            trait = traits[k].name;
                        }
                    }
                    traitsArray.push(trait);
                }
                
                champArray.push({name:champs[i].name,cost:champs[i].cost,trait:traitsArray});
                traitsArray = [];
            }
        }

        res.json(champArray);
	}catch(err){
		console.log(err)
	}
})

router.get('/getChampByTrait/:trait',async (req,res) =>{
	try{
        let champArray= []
        let traitsArray = [];
        for(let i = 0;i<champs.length;i++){
            let trait = '';
            for(let j=0;j<champs[i].traits.length;j++){
                for(let k=0;k<traits.length;k++){
                    if(traits[k].key == champs[i].traits[j]){
                        trait = traits[k].name;
                    }
                }
                traitsArray.push(trait);
            }
            
            champArray.push({name:champs[i].name,cost:champs[i].cost,trait:traitsArray});
            traitsArray = [];
        }

        let returnChamps = [];

        for(let i = 0;i<champArray.length;i++){
            for(let j = 0;j<champArray[i].trait.length;j++){
                if(champArray[i].trait[j].toLowerCase() == req.params.trait.toLowerCase()){
                    returnChamps.push(champArray[i]);
                }
            }
        }
        res.json(returnChamps);
	}catch(err){
		console.log(err)
	}
})


module.exports = router