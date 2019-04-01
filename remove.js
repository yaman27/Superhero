const deletefunc= (db)=>{
    const collection=db.collection('herodetail')
collection.deleteOne({$where:()=>{return this.superpowers.length>2
}});
}
module.exports=deletefunc;