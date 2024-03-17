db.clientes.find({seguros:{$exists:true}});

db.clientes.aggregate([{$unwind:"$seguros"}]);

db.clientes.aggregate([{$unwind:"$seguros"}, {$sortByCount:"$genero"}]);

db.enderecos.aggregate([{$match:{cidade:"Recife"}}]);

db.contas.aggregate([
    {$match:{$and:[{tipo:{$eq:"Conta salário"}}, {valor:{$gt: 3500}}]}}
    ]);

db.contas.aggregate([
    {$match:{$and:[{tipo:{$eq:"Conta salário"}}, {valor:{$gt: 8500}}]}}
    ]);

db.contas.aggregate([
    {$match:{$and:[{tipo:{$eq:"Conta salário"}}, {valor:{$gt: 8500}}]}},
    {$group:{_id:"$tipo",contagem:{$count:{}}}}
    ]);