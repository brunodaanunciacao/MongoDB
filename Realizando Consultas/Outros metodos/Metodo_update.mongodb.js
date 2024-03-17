db.clientes.updateOne({"_id":1},{$push:{seguros:"seguro de vida"}})

db.clientes.updateMany({},{$rename:{"cpf":"CPF"}})

db.contas.updateOne({cpf:"410.436.439-82"},{$inc:{valor:-2000}})