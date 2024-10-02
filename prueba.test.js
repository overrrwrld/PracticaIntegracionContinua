const saludar = require('./HelloWorld');

test('Saludar debe decir: Hola, mundo!', () => {
    expect(saludar()).toBe("Hola, mundo!");
})