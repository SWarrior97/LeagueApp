const express = require('express')
const router = express.Router()
var path = require("path");

const fs = require('fs');
const champs = JSON.parse(fs.readFileSync('./data/champions.json', 'utf-8'));
const items = JSON.parse(fs.readFileSync('./data/items.json', 'utf-8'));
const traits = JSON.parse(fs.readFileSync('./data/traits.json', 'utf-8'));

//champions

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

//itens
// @desc   
// @route   GET /
router.get('/items',async (req,res) =>{
	try{
        let itensArray = [];

        items.forEach(function(item){
            itensArray.push({id:item.id,name:item.name,description:item.description})
        });

        res.json(itensArray);
	}catch(err){
		console.log(err)
	}
})

router.get('/items/name/:name',async (req,res) =>{
	try{
        let itensArray = [];

        items.forEach(function(item){
            if(item.name.toLowerCase().includes(req.params.name.toLowerCase())){
                itensArray.push({id:item.id,name:item.name,description:item.description})
            }
        });

        res.json(itensArray);
	}catch(err){
		console.log(err)
	}
})
router.get('/items/:id',async (req,res) =>{
	try{
        let itensArray = [];

        items.forEach(function(item){
            if(item.id == req.params.id){
                itensArray.push({id:item.id,name:item.name,description:item.description})
            }
        });

        res.json(itensArray);
	}catch(err){
		console.log(err)
	}
})

//traits
router.get('/trait',async (req,res) =>{
	try{
        let traitsArray = [];

        traits.forEach(function(trait){
            let sets = [];

            trait.sets.forEach(function(set){
                if(set.max != "undefined"){
                    sets.push({style:set.style,min:set.min,max:set.max});
                }else{
                    sets.push({style:set.style,min:set.min});
                }
                
            });
            
            traitsArray.push({name:trait.name,description:trait.description,sets:sets})
            sets = [];
        });

        res.json(traitsArray);
	}catch(err){
		console.log(err)
	}
})

router.get('/trait/:name',async (req,res) =>{
	try{
        let traitsArray = [];

        traits.forEach(function(trait){
            if(trait.name.toLowerCase().includes(req.params.name.toLowerCase())){
                let sets = [];

                trait.sets.forEach(function(set){
                    if(set.max != "undefined"){
                        sets.push({style:set.style,min:set.min,max:set.max});
                    }else{
                        sets.push({style:set.style,min:set.min});
                    }
                    
                });
                
                traitsArray.push({name:trait.name,description:trait.description,sets:sets})
                sets = [];
            }
        });

        res.json(traitsArray);
	}catch(err){
		console.log(err)
	}
})


module.exports = router