const fs = require('fs');
const assert = require('assert');

const locales = ['en'];
let charStart = 97;
let charEnd = 105;

// generate 81 random locales under en
for (let i = charStart; i <= charEnd; i++) {
  const firstChar = String.fromCharCode(i);

  for (let j = charStart; j <= charEnd; j++) {
    const secondChar = String.fromCharCode(j);
    locales.push(`en-${firstChar}${secondChar}`);
  }
}

assert(
  locales.length === 82,
  `unexpected locale count, expected 82, received ${locales.length}`
);

// generate 100MB text file which will be traced in `/api/hello`
// which when combined with the 404 HTML files will push us over the 250MB
// uncompressed limit
fs.writeFileSync('data.txt', new Array(100 * 1000 * 1000).fill('a').join());

module.exports = {
  i18n: {
    locales,
    defaultLocale: 'en',
  },
};
