use("test")

db.livros.insertOne({
    _id: 1,
    titulo: "MongoDB: Construa novas aplicações com novas tecnologias",
    autor: ["Fernando Boaglio"],
    data_publicacao: ISODate("2015-01-24"),
    paginas: 244,
    linguagem: "Português",
    id_editora: "Casa do código",
    Estoque: 3,
    checkout: [{por: "David", data: ISODate("2022-10-15")}]
});

db.livros.find();

db.livros.updateOne(
    {_id: 1, Estoque: {$gt: 0}},
    {
        $inc: {Estoque: -1},
        $push: {checkout: {por: "Danielle", data: new Date() } }
    }
);