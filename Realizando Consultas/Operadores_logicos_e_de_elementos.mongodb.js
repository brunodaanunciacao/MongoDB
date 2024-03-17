db.Contas.find({$and:[{tipo:{$eq:"Conta salário"}},{$gt:9000}]})

db.Contas.find({$or:[{tipo:{$eq:"Conta salário"}},{$gt:9000}]})

db.Enderecos.find({estado:{$not:{$eq:"SP"}}})

db.Clientes.find({dependentes:{$exists:false}})

db.Clientes.find({seguros:{$exists:true}})

db.Clientes.find({seguros:{$type:2}})
