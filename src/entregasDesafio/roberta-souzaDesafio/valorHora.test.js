const {calcularValorPorHora} = require("../../dominio/calculadora/Hora/valorHora");

describe("Valor por Hora", ()=> {
    test("retornar o valor arredondado correto dado um valor recebido no mês", () => {
        const valorPorMes = 5000;
        const result = calcularValorPorHora(valorPorMes)
        expect(result).toEqual(29)
    })
})

describe("calcularValorPorHora", () => {
    test("deve mostrar resultado negativo se o valor por mês for negativo", () => {
      const valorPorMes = -1000
      const result = calcularValorPorHora(valorPorMes)
      expect(result).toEqual(-5);
    });
    
  });
  
  
  
  
  
  
