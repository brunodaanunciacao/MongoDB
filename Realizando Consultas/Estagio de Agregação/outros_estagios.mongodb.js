db.contas.find().limit(10)

db.contas.aggregate({$limit:5})

db.contas.find().skip(10)

db.contas.aggregate({$skip:5})

db.contas.find().sort({valor:1})

db.contas.aggregate([{$sort:{valor:-1}}])

db.contas.aggregate([{$limit:10}, {$skip:5}])

db.contas.aggregate([{$skip:15}, {$limit:10}],{$sort:{valor:-1}})