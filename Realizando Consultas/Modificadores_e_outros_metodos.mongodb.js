db.contas.find().limit(5)

db.contas.find().skip(200)

db.contas.find().limit(5).skip(200)

db.clientes.find().sort({nome:1})

db.clientes.find().count()

db.clientes.count()

db.contas.distinct("tipo")
