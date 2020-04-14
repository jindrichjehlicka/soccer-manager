const charMap: object = {
  ě: "e",
  š: "s",
  č: "c",
  ř: "r",
  ž: "z",
  ý: "y",
  á: "a",
  í: "i",
  é: "e",
  ú: "u",
  ů: "u",
  æ: "a",
  å: "o",
  ø: "o",
  ö: "o",
  ç: "c",
  ş: "s",
  ı: "i",
  ğ: "g",
  ü: "u",
};

export function convertNonEnglishChars(str: string): string {
  const charsToConvert = Object.keys(charMap).join("|");
  const rx = new RegExp(`(${charsToConvert})`, "g");

  if (rx.test(str))
    str = str.replace(rx, function (m: string, key: string) {
      return charMap[key];
    });

  return str;
}
