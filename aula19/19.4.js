// 4. Contando o número de Instancias de uma Classe
//
// Criar uma classe chamada User e precisamos criar um jeito
// de contar o número de usuários (número de instancias),
// de maneira que seja possivel acessar esse valor como um atributo
// ou propriedade de classe.
//
// User.count => 0
// u1 = new User('marcle')
// User.count => 1
// u2 = new User('joao')
// User.count => 2
//
// u1.username => 'marcle'
// u2.username => 'joao'

class User {
  static count = 0;

  constructor(username) {
    this.username = username;

    User.count++;
  }
}


