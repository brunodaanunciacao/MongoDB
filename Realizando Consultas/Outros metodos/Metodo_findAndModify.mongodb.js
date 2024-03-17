db.contas.updateOne({id:34},{$unset:{valor:""}});

db.contas.findAndModify({query:{_id:34}, update:{$unset:{valor:""}}})

db.contas.findAndModify(
    {query:{_id:34}, 
    update:{$unset:{valor:""}},
    new:true
});

db.contas.findAndModify(
    {query:{_id:34}, 
    update:{$inc:{valor:1200}},
    new:true
});

db.contas.find({valor:{$lt:500}}).sort({valor:1})

db.contas.findAndModify({
    query:{valor:{$lt:500}},
    sort:{valor:1},
    update:{$inc:{valor:1000}},
    new:true
})