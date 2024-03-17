db.system.users.find();

use("admin");


//passwordPrompt()
db.createUser({
    user: "admin",
    pwd: "7lkUcybaDllZODwN", 
    roles: [
        {role: "userAdminAnyDatabase", db:"admin"},
        {role: "readWriteAnyDatabase", db:"admin"}
    ]
});

//mongosh --authenticationDatabase "admin" -u "admin" -p "7lkUcybaDllZODwN"

db.auth("admin","7lkUcybaDllZODwN");

use("showbank");

db.createCollection("clientes");

db.createUser({
    user: "ana",
    pwd: "ana123", 
    roles: []
});

db.grantRolesToUser("ana", [ { role: "readWrite", db: "showbank"}])

db.getUser("ana")

db.runCommand({
    grantRolesToUser: "nome_do_usuario",
    roles: [
       { role: "nome_da_funcao", db: "nome_do_banco_de_dados" },
       { role: "nome_da_funcao", db: "nome_do_banco_de_dados" }
    ]
 })