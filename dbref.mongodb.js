use('test');

original_id = ObjectId()

db.clientes.insertOne({
    "_id": original_id,
    "Nome": "Gustavo Marcos dos Santos",
    "CPF": "936.261.726-94",
    "Data_Nascimento": "11/02/1957",
    "Genero": "Masculino",
    "Profissao": "Gerente de vendas",
    "Status_Civil": "Separado(a)"})
    
db.contas.insertOne({
    "_id": ObjectId(),
    "creator":{
        "$ref": "clientes",
        "$id": original_id,
        "$db": "test"
        },
    "Numero_Conta": "48495901-2",
    "Agência": "5575",
    "Tipo": "Conta corrente",
    "CPF": "936.261.726-94",
    "Valor": 2.366})
    
db.endereco.insertOne({
    "creator": {
        "$ref": "clientes",
        "$id": original_id,
        "$db": "test"},
    "Rua": "Adelso Ferreira Tavares",
    "Numero": 661,
    "Bairro": "Tubalina",
    "Cidade": "Uberlândia",
    "Estado": "MG",
    "CEP": "38412-010"
    })


db.clientes.find({})

db.endereco.find({})

db.contas.find({})