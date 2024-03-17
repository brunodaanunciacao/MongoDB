db.Clientes.find({seguros:{$exists:true}})

db.Clientes.find({dependentes:{$exists:true}})

db.Clientes.find({seguros:{$all:["seguro de vida", "seguro para carro"]}})

db.Clientes.find({dependentes:{$size:2}})

db.Clientes.find({dependentes:{$size:2}})

db.Clientes.find({dependentes:{$size:2}},{dependentes:{$slice:1}})


db.Clientes.renameCollection("clientes")

db.Contas.renameCollection("contas")

db.Enderecos.renameCollection("enderecos")
