// router.get("/getModalCount",(req,res)=>{
//     res.status(200).send({
//         allModels:4,
//         awd:7,
//         electric:1
//     })
// })


// router.post("/getModels",(req,res)=>{
//     switch(req.body.type){
//         case "All Models":
//             res.status(200).send({
//                 sedans:[{ name:"Jetta",type:"The compact sedan",price:"$18,895"},{name:"Jetta GLI",type:"The performance sedan",price:"$26,24541"},{name:"Passat",type:"The midsize sedan",price:"$22,995"},{name:"Arteon",type:"The premium sport sedan",price:"$35,995"}]
//             })
//         case "AWD":
//             res.status(200).send({
//                 awd:[{ name:"Arteon",type:"The premium sport sedan",price:"$35,9959"},{name:"Tiguan",type:"The stylish SUV",price:"$24,94512"},{name:"Atlas Cross Sport",type:"The bold SUV",price:"$30,545"},{name:"Atlas",type:"The family SUV",price:"$31,545"},{name:"Golf Sport Wagen",type:"The wagon",price:"$21,89520"},{ name:"Golf Alltrack",type:"The adventurous wagon",price:"$26,895"},{ name:"Golf R",type:"The performance hatch",price:"$40,39535"}]
//             })
//         default:
//             res.status(200).send({
//                 electric:[{ name:"Electric Concepts",type:"",price:""}]
//             })
//     }

// })