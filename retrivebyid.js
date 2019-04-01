const retriveidfunc=(db,callback)=>{
    const collection= db.collection('herodetail');
  collection.find({canFly:{$eq:true}}).toArray((err,res)=>
  {     callback(res)
})   }
   module.exports=retriveidfunc;
