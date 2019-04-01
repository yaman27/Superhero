const update =  (db,callback)=> {
    const collection = db.collection('herodetail');
   var query={$and:[{fightswon:{$gt:20}},{superpowers:'fly'},{superpowers:'swim'}]}
   var newquery={$mul:{fanFollowing:2}}
   collection.updateMany(query,newquery,function(err,res){callback(res); });
}
module.exports=update;