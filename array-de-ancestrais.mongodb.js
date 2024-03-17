use("test")

db.createCollection("Ancestrais");

db.Ancestrais.insertMany([
    {_id:"Colaborador01", ancestors:["Gerente geral", "Gerente", "Supervisor02"], parent:"Supervisor02"},
    {_id:"Colaborador02", ancestors:["Gerente geral", "Gerente", "Supervisor02"], parent:"Supervisor02"},
    {_id:"Supervisor02", ancestors:["Gerente geral", "Gerente"], parent:"Gerente"},
    {_id:"Supervisor01", ancestors:["Gerente geral", "Gerente"], parent:"Gerente"},
    {_id:"Gerente", ancestors:["Gerente geral"], parent:"Gerente geral"},
    {_id:"Gerente geral", ancestors:[], parent:null}
]);

db.Ancestrais.findOne({_id:"Supervisor02"}).ancestors;

db.Ancestrais.findOne({_id:"Supervisor02"}).parent;

db.Ancestrais.find();