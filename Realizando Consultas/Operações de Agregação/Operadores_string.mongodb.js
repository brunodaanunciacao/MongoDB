db.clientes.aggregate([{
    $project:{
            descriçao:{
            $concat:["$nome"," - ", "$cpf"]
        }
    }
}])

db.clientes.find().limit(1)


db.clientes.aggregate([{
    $project:{
            descriçao:{
                $split:["$nome"," "]
                }
        }
}])


db.clientes.aggregate([{
    $project:{
            descriçao:{
                $toLower:"$nome"
                }
        }
}])

db.clientes.aggregate([{
    $project:{
            descriçao:{
                $toUpper:"$nome"
                }
        }
}])

db.contas.aggregate({
    $project:{
          valor:{
                  $toString:"$valor"
              }
       }
 })
 

 db.contas.aggregate({
    $project:{
            descrição:{
                    $concat:[
                             "O cliente de CPF ", "$cpf", " possui o valor de ", {$toString:"$valor"}, " na", "tipo"
                                 
                                ]
                }
      }
})
