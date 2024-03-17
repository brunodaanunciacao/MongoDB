use("test");

db.createCollection("Materializados");

db.Materializados.insertMany([
    {_id:"Gerente geral", path:null},
    {_id:"Gerente", path:"Gerente geral"},
    {_id:"Supervisor02", path:"Gerente geral,Gerente"},
    {_id:"Supervisor01", path:"Gerente geral,Gerente"},
    {_id:"Colaborador01", path:"Gerente geral,Gerente,Supervisor02"},
    {_id:"Colaborador02", path:"Gerente geral,Gerente,Supervisor02"}
]);

db.Materializados.findOne({path:"Gerente geral"});