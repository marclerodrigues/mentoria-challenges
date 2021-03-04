// 3. Dado a classe BasicPlan, escreva duas classes para o plano
// Padrão (StandardPlan) e o plano premium (PremiumPlan).
// Cada plano tem as seguintes funcionalidades:
//
// BasicPlan: canStream
// StandardPlan: canStream, canDownload
// Premium: canStream, canDownload, canStream4k
//
// Números de Dispositivos
// Basic: 1
// Standard: 2
// Premium: 4
//
// Preço
// Basic: R$ 15.00
// Standard: R$ 25.00
// Premium: R$ 47.90

class BasicPlan {
  static canStream = true;
  static canDownload = false;
  static canStream4k = false;
  static numberOfDevices = 1;
  static price = 'R$ 15.00';
}

class StandardPlan extends BasicPlan {
  static canDownload = true;
  static numberOfDevices = 2;
  static price = 'R$ 25.00';
}

class PremiumPlan extends StandardPlan {
  static canStream4k = true;
  static numberOfDevices = 4;
  static price = 'R$ 47.90';
}
