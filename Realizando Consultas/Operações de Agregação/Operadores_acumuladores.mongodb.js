db.contas.aggregate({
    $group:{
            _id:"$tipo",
            media:{
                $avg:"$valor"
            }
    }
});


db.contas.aggregate({
    $group:{
            _id:"$tipo",
                valorMaximo:{
                    $max:"$valor"
                }
        }
});

db.contas.aggregate({
    $group:{
            _id:"$tipo",
                valorMinimo:{
                    $min:"$valor"
                }
        }
});


db.contas.aggregate({
    $group:{
            _id:"$tipo",
                contagem:{
                    $count:{}
                }
        }
});

db.contas.aggregate({
    $group:{
            _id:"$tipo",
                Total:{
                    $sum:"$valor"
                }
        }
});

db.contas.aggregate({
    $group:{
            _id:"$tipo",
                Total:{
                    $sum:"$valor"
                }, 
                Media:{
                    $avg:"$valor"
        }    
        }
});

db.contas.aggregate([
    {$match:{tipo:"Conta poupança"}},
    { $group:{
            _id:"$tipo",
                Total:{
                    $sum:"$valor"
                }, 
                Media:{
                    $avg:"$valor"
        }    
        }
}
]);
