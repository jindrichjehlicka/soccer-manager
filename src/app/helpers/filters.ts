import { convertNonEnglishChars } from "./strings";

export function filterArrayOfObjects(
  array: Array<object>,
  value: string,
  fields: Array<string>
): Array<any> {
  return array.filter((item) =>
    fields.some((field) =>
      item[field]
        ? String(item[field]).toLowerCase().includes(value.toLowerCase())
        : false
    )
  );
}
