use("test");

original_id = ObjectId()

db.clientes.insertOne({
  "_id": original_id,
  "Nome": "Manoel Carlos Eduardo Kauê Costa",
  "CPF": "369.584.289-00",
  "Data_Nascimento": "23/04/1972",
  "Genero": "Masculino",
  "Profissao": "Supervisor administrativo",
  "Status_Civil": "Separado(a)"})

db.contas.insertOne({
  "_id": ObjectId(),
  "creator": {
    "$ref": "clientes",
    "$id": original_id,
    "$db": "test",
  },
  "Numero_Conta": "48948530-6",
  "Agência": "5575",
  "Tipo": "Conta corrente",
  "CPF": "369.584.289-00",
  "Valor": 6.874})

db.endereco.insertOne({
  "creator": {
    "$ref": "clientes",
    "$id": original_id,
    "$db": "test",
  },
  "Rua": "Santa Justina Sartori",
  "Numero": 945,
  "Bairro": "Jardim Porto Alegre",
  "Cidade": "Toledo",
  "Estado": "PR",
  "CEP": "85906-310"})
