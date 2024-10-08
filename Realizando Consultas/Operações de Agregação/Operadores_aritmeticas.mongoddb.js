db.clientes.aggregate({
    $project:
        {
            _id:0,
         valorRound: 
         {
              $round:[{
                 $rand:{}
                    },3]
          }
         }
});


db.clientes.aggregate({
    $project:
        {
            _id:0,
         valorTrunc: 
         {
              $trunc:[{
                 $rand:{}
                    },3]
          }
         }
});


db.contas.aggregate([{
    $project:{
         _id:0,
         valor:1,
         dividido:{
             $divide:["$valor",2]
         }
     }
 }]);

 db.contas.aggregate([{
    $project:{
         _id:0,
         valor:1,
         multiplicado:{
             $multiply:["$valor",2]
         }
     }
 }]);

 
 
 

