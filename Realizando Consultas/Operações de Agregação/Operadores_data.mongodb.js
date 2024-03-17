db.getCollection("clientes").insert({
    "nome": "Calebe Danilo Roberto Figueiredo", 
        "cpf": "028.796.232-60",
        "data_nascimento": ISODate("1986-10-01T18:00:00.000-03:00"),
        "genero": "Masculino",
        "profissao": "Supervisor de vendas comercial",
        "status_civil": "Viúvo(a)"
});

db.clientes.insertOne({
    "nome": "Calebe Danilo Roberto Figueiredo", 
        "cpf": "028.796.232-60",
        "data_nascimento": ISODate("1986-10-01T18:00:00.000-03:00"),
        "genero": "Masculino",
        "profissao": "Supervisor de vendas comercial",
        "status_civil": "Viúvo(a)"
});

db.clientes.insertOne({
    "nome": "Calebe Danilo Roberto Figueiredo", 
        "cpf": "028.796.232-60",
        "data_nascimento": ISODate("1986-10-01"),
        "genero": "Masculino",
        "profissao": "Supervisor de vendas comercial",
        "status_civil": "Viúvo(a)"});


        
db.clientes.insertOne({
    "nome": "Calebe Danilo Roberto Figueiredo", 
        "cpf": "028.796.232-60",
        "data_nascimento": new Date(),
        "genero": "Masculino",
        "profissao": "Supervisor de vendas comercial",
        "status_civil": "Viúvo(a)"
});

db.clientes.aggregate([{
    $project:{
            nome:1,
            ano_nascimento:{
                    $year:"$data_nascimento"
                }
        }
}]);

db.clientes.aggregate([{
    $project:{
            nome:1,
            mes_nascimento:{
                    $month:"$data_nascimento"
                }
        }
}]);

db.clientes.aggregate([{
    $project:{
            nome:1,
            diasemana:{
                    $dayOfWeek:"$data_nascimento"
                }
        }
}]);

db.clientes.aggregate([{
    $project:{
                data:{
                    $dateToParts:{_:"$data_nascimento"}
                }
        }
}]);