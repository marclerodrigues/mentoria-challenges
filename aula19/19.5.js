// 5. Escrever uma Console Simples
//
// Nosso console precisa ter três funções:
//
// log -> recebe um argumento e returna ele como string.
// history -> mostra tudo o que foi executado no log como
// string (cada log é separado por uma quebra de linha \n)
// clearHistory -> limpar tudo o que foi mostrado no log
//
// myConsole.log([0, 1, 2, 3]) -> '[0, 1, 2, 3']
// myConsole.history() -> '[0, 1, 2, 3]"
// myConsole.log('Marcle') -> 'Marcle'
// myConsole.history() -> '[0, 1, 2, 3]\nMarcle'
// myConsole.clearHistory() -> true
// myConsole.history() => ''

class Console {
  constructor() {
    this.logs = [];
  }

  log(arg) {
    let stringArg = arg;

    if (typeof arg === 'object') {
      stringArg = JSON.stringify(arg);
    }

    this.logs.push(stringArg);

    return stringArg;
  }

  history() {
    return this.logs.join('\n');
  }

  clearHistory() {
    this.logs = [];
    return true;
  }
}
