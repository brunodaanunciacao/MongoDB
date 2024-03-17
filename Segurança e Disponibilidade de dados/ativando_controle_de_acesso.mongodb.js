// mongosh --auth

db.adminCommand({shutdown: 1})

// C:/Arquivos de Programas/MongoDB/Server/6.0/bin/mongod.cfg
/*
# mongod.conf

# for documentation of all options, see:
# http://docs.mongodb.org/manual/reference/configuration-options/

# Where and how to store data.
storage:
  dbPath: C:\Program Files\MongoDB\Server\6.0\data
  journal:
     enabled:true
# engine:
# wiredTiger:

# where to write logging data.
systemLog:
  destination: file
  logAppend: true
  path: C:\Program Files\MongoDB\Server\6.0\log\mongod.log

# network interfaces
net:
  port: 27017
  bindIp:127.0.0.1

#processManagement:

security:
authorization: enable


#operationProfiling:

#replication:

#sharding:

#Enterprise-Only Options:

#auditLog:

#snmp:
*/

db.createRole({
    role: "RegrasBanco",
    privileges: [
        { resource: { db: "showbank", collection: ""}, actions: ["find","insert"]}
    ],
    roles:[]
})

db.createRole({
    role: "RegrasColecao",
    privileges: [
        { resource: { db: "showbank", collection: "clientes"}, actions: ["find","insert"]}
    ],
    roles:[]
});

db.createUser({
    user: "Paulo",
    pwd: passwordPrompt(),
    customData: {nomecompleto:"José Paulo dos Santos", identificador: 3},
    roles: ["RegrasColecao"]
});

db.changeUserPassword("admin123","123admin");

db.updateUser(
    "Paulo",
    {
        pwd: "paulo123",
     
    });

db.updateUser(
    "Paulo",
    {
        pwd: "paulo123",
        customData: {nomecompleto:"José Paulo dos Santos Silva", identificador: 3},
        
    }
);
    
db.runCommand({
        revokeRolesFromUser:"Paulo",
        roles:[{role:"RegrasColecao", db:"admin"}]
 }
);

db.dropRole("RegrasBanco");
db.dropRole("RegrasColecao");

db.dropUser("Paulo");

/*
O MongoDB oferece recursos poderosos para gerenciar o controle de acesso, permitindo que você crie usuários, atribua funções com permissões específicas e controle o acesso de maneira granular. Porém, pode haver a necessidade de remover permissões de usuários, excluir funções criadas pelo usuário e excluir usuários do sistema.

Então, vamos relembrar o que aprendemos nesta aula?

Novas permissões e funções
Para dar permissões a um usuário já criado, podemos utilizar o método grantRolesToUser ou o método runCommand:
db.grantRolesToUser(
   "Danielle",
   [
     { role: "readWrite", db: "showbank" }
   ]
)
COPIAR CÓDIGO
ou

db.runCommand({
   grantRolesToUser: "Danielle",
   roles: [
      { role: "read", db: "showbank" }
   ]
})
COPIAR CÓDIGO
Para criar nossas próprias funções a nível de coleção, podemos utilizar o método createRole:
db.createRole(
   {
     role: "RegrasColeção", 
     privileges: [
       { resource: { db: "showbank", collection: "clientes" }, actions: [ "find","insert"] }
     ],
     roles: []
   })
COPIAR CÓDIGO
Ativar o controle de acesso
Para habilitar o controle de acesso no MongoDB, podemos utilizar duas formas:
Especificar o comando --autho, ao iniciar o servidor pela linha de comando:
        mongod --auth
COPIAR CÓDIGO
Ou se o MongoDB estiver iniciado como um serviço, habilitar a opção security no arquivo de configuração mongod.cfg e especificar as seguintes informações:
        authorization: enabled
COPIAR CÓDIGO
Revogar permissões, excluir funções e usuários
Quando você deseja revogar as permissões de um usuário específico no MongoDB, pode usar o método revokeRolesFromUser ou o método runCommand:
db.revokeRolesFromUser(
"Danielle", 
[
     { role: "readWrite", db: "showbank" }
]
             )
COPIAR CÓDIGO
ou

db.runCommand({
   revokeRolesFromUser: "Danielle",
   roles: [
      { role: "readWrite", db: "showbank" }   ]
})
COPIAR CÓDIGO
Para excluir funções que foram criadas pelo usuário, podemos executar o comando:
db.dropRole("RegrasBanco")
COPIAR CÓDIGO
Já para excluir um usuário, utilizamos o método dropUser:
db.dropUser("Danielle")
*/
