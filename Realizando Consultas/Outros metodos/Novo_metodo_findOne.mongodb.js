db.contas.findOneAndUpdate(
    {_id:34},
    {$set:{valor:5145.86}},
    {returnNewDocument:true}
);

db.clientes.findOneAndReplace(
    {_id:4},
    {"nome": "Geraldo Benedito Ian",
    "data_nascimento": ISODate("1977-06-02T18:00:00.000-03:00"),
    "genero": "Masculino",
    "profissao": "Operador",
    "status_civil": "Viúvo(a)",
    "CPF": "845.939.560-05"},
    {projection:{nome:1, profissao:1},
    returnNewDocument:true
});

db.contas.find({valor:{$lt:100}}).sort({valor:1});

db.contas.findOneAndDelete({valor:{$lt:100}},{sort:{valor:1}});