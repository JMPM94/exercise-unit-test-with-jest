// Importar la función sum del archivo app.js
const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("1 euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(1);
    const expected = 1 * 1.07;
    expect(fromEuroToDollar(1)).toBe(1.07); 
})

test("3.567 euro should be 3.81 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.567);
    const expected = 3.567 * 1.07;
    expect(fromEuroToDollar(3.567)).toBe(3.8166900000000004); 
})

test("20 euro should be 21.4 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(20);
    const expected = 20 * 1.07;
    expect(fromEuroToDollar(20)).toBe(21.400000000000002); 
})


//Test de fromDollarToYen 

test("1 dollar should be 146.26 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const expected = fromDollarToYen(1) * 156.5;
    expect(fromDollarToYen(1)).toBe(146.26168224299064);
})

test("28.80 dollar should be 146.26 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const expected = fromDollarToYen(28.80) * 156.5;
    expect(fromDollarToYen(28.8)).toBe(4212.336448598131);
})

test("0.50 dollar should be 73.13 yens", function() {
    const { fromDollarToYen } = require('./app.js');
    const expected = fromDollarToYen(0.50) * 156.5;
    expect(fromDollarToYen(0.50)).toBe(73.13084112149532);
})

// Test de fromYenToPount 

test("1 yen should be 0.0055 Pount", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = fromYenToPound(1) * 156.5;
    expect(fromYenToPound(1)).toBe(0.0055591054313099035);
})


test("58512.33 yen should be 325.27 Pount", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = fromYenToPound(58512.33) * 156.5;
    expect(fromYenToPound(58512.33)).toBe(325.27621150159746);
})

test("2000000 yen should be 1111.82 Pount", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = fromYenToPound(58512.33) * 156.5;
    expect(fromYenToPound(200000)).toBe(1111.8210862619808);
})