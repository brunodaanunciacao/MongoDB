use("test");

db.clientes.insertOne({
    "_id": 6,
    "schema_version": "2",
    "Nome": "Catarina Sebastiana Baptista",
    "CPF": "138.934.992-61",
    "Data_Nascimento": "14/07/2003",
    "Genero": "Feminino",
    "Profissao": "Atendente de lanchonete",
    "Status_Civil": "Casado(a)",
    "Salario": 2.500})

db.endereco.insertOne({
    "_id": 5,
    "id_cliente": 6,
    "Rua": "João Aires Leitão",
    "Numero": 534,
    "Bairro":"Paraviana",
    "Cidade": "Boa Vista",
    "Estado":"RR",
    "CEP":"69307-370"})

db.contas.insertOne({
    "_id": 8,
    "id_cliente": 6,
    "Numero_Conta": "50453-8",
    "Agência": "5575",
    "Tipo": "Conta poupança",
    "CPF": "138.934.992-61",
    "Valor": 1.227})