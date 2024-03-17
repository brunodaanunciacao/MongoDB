db.clientes.find().count()

db.clientes.aggregate({$count:"contagem de clientes"});

db.contas.aggregate({$group:{_id:"$tipo"}})

db.contas.aggregate({$group:{_id:"$tipo", contagem:{$count:{}}}})