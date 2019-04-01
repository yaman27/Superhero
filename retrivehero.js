const findHero =  (db, callback)=> {  
    const collection = db.collection('herodetail');
    // Find some documents
    collection.find({},).toArray( (err, docs) => {
        callback(docs);
    });
}
module.exports=findHero;