// $eq $gt $gte $lt $lte

//pesquisar por genero

db.Clientes.find({ genero:"Masculino" });

db.Clientes.find({genero:{$eq:"Masculino"}});


// pesquisar valor maior que 9000
db.Contas.find({valor:{$gt:9000}});

// pesquisar valor menor que 1000
db.Contas.find({valor:{$lt:1000}});

// pesquisar estado civil casado ou viuvo
db.Clientes.find({status_civil:{$in:["Viúvo(a)","Casado(a)"]}});