// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

/* PHONE NUMBER START */
test('good format should pass', () => {
    expect(functions.isPhoneNumber("(619)368-8172")).toBe(true);
});

test('good format should pass', () => {
    expect(functions.isPhoneNumber("619-368-8172")).toBe(true);
});

test('letters should fail', () => {
    expect(functions.isPhoneNumber("(61nine)36eight-8172")).toBe(false);
});
test('incorrect format should fail', () => {
    expect(functions.isPhoneNumber("6193688172")).toBe(false);
});
/* PHONE NUMBER END */


/* EMAIL START */
test('good format should pass', () => {
    expect(functions.isEmail("myemail@gmail.com")).toBe(true);
});

test('good format should pass', () => {
    expect(functions.isEmail("111@yahoo.org")).toBe(true);
});

test('incorrect format should fail', () => {
    expect(functions.isEmail("tyler.gmailcom")).toBe(false);
});
test('incorrect format should fail', () => {
    expect(functions.isEmail("tyler@yahoo.comm")).toBe(false);
});
/* EMAIL END */

/* PASSWORD START */
test('good format should pass', () => {
    expect(functions.isStrongPassword("h1234")).toBe(true);
});

test('good format should pass', () => {
    expect(functions.isStrongPassword("password")).toBe(true);
});

test('less than 4 chars', () => {
    expect(functions.isStrongPassword("abc")).toBe(false);
});
test('more than 15 chars', () => {
    expect(functions.isStrongPassword("abcdefghijklmnopqrstuvwxyz")).toBe(false);
});
/* PASSWORD END */


/* DATE START */
test('good format should pass', () => {
    expect(functions.isDate("01/01/0111")).toBe(true);
});

test('good format should pass', () => {
    expect(functions.isDate("08/13/1999")).toBe(true);
});

test('year as two chars', () => {
    expect(functions.isDate("08/13/99")).toBe(false);
});
test('bad format', () => {
    expect(functions.isDate("08-13-1999")).toBe(false);
});
/* DATE END */


/* HEX START */
test('good format should pass', () => {
    expect(functions.isHexColor("#333")).toBe(true);
});

test('good format should pass', () => {
    expect(functions.isHexColor("#ECECEC")).toBe(true);
});

test('single pound sign', () => {
    expect(functions.isHexColor("#")).toBe(false);
});
test('too long', () => {
    expect(functions.isHexColor("#ECECECEC")).toBe(false);
});
/* HEX END */