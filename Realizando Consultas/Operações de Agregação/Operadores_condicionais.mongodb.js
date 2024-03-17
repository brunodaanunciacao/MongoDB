db.contas.aggregate([{
    $project:{
          cpf:1,
              tipo:1,
              valor:1,
              valores:{
                  $cond:[{$gte:["$valor",8000]}, "VERDADEIRO", "FALSO"]
              }
         }
 }])
;

db.contas.aggregate([{
    $project:{
            valor:{
                    $ifNull:["$valor", "Não Especificado"]
                }
       }
}])

db.contas.aggregate([{
    $project:{
            valor:1,
                condição:{
                    $switch:{
                            branches:[{
                                    case:{$lte:["$valor",3000]}, then:"valor abaixo do esperado"},
                                    {case:{$and:[{$gt:["$valor",3000]},{$lte:["$valor",6000]}]}, then:"valor na media"}
                                ],
                                default:"valor acima do esperado"
                        }
                }
        }
}]);

 
 
 