use("test");

db.clientes.insertOne({
    "_id": 1,
    "Nome": "Melissa Joana Mendes",
    "cpf": "738.424.165-04",
    "Data Nascimento": "13/10/1957",
    "Genero": "Feminino",
    "Empresa": "Alimentos LTDa",
    "Profissao": "Assistente administrativo",
})

db.endereco.insertOne({
    "Rua": "Travessa João Passos",
    "Numero": 191,
    "Bairro":"Olaria",
    "Cidade": "Aracaju",
    "Estado":"SE",
    "CEP":"49092-200"
});

db.clientes.insertOne({
    "_id": 2,
    "Nome": "Melissa Joana Mendes",
    "CPF": "738.424.165-04",
    "Data_Nascimento": "13/10/1957",
    "Genero": "Feminino",
    "Empresa": "Alimentos LTDa",
    "Profissao": "Assistente administrativo",
    "Status_Civil": "Casado(a)",
    "Endereco":{
            "Rua": "Travessa João Passos",
            "Numero": 191,
            "Bairro":"Olaria"
        }
});

db.endereco.insertOne({
    "Rua": "Travessa João Passos",
    "Numero": 191,
    "Bairro":"Olaria",
    "Cidade": "Aracaju",
    "Estado":"SE",
    "CEP":"49092-200"
});