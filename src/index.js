import _ from 'lodash';
import fs from 'fs';
// import path from 'path';
// import * as fs from 'node:fs';
// import path from 'node:path';

const stringify = (value, replacer = ' ', spacesCount = 1) => {
  const iter = (el, counter) => {
    const arr = Object.entries(el).map(([key, val]) => {
      if (typeof val === 'object' && val) return (`${replacer.repeat(counter)}${key}: ${iter(val, counter + spacesCount)}`);
      return (`${replacer.repeat(counter)}${key}: ${val}`);
    });
    const result = arr.join('\n');
    return counter === spacesCount ? `{\n${result}\n}` : `{\n${result}\n${replacer.repeat(counter - spacesCount)}}`;
  };
  return typeof value !== 'object' ? `${value}` : iter(value, spacesCount);
};

const genDiff = (file1, file2) => {
  const result = {};
  // парсим файлы
  const data1 = JSON.parse(fs.readFileSync(file1, 'utf8'));
  const data2 = JSON.parse(fs.readFileSync(file2, 'utf8'));
  // получаем ключи
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  // сортируем и объединяем
  const sortedUnionKeys = _.sortBy(_.union(keys1, keys2), (k) => k);
  // перебираем
  sortedUnionKeys.forEach((key) => {
    const value1 = data1[key];
    const value2 = data2[key];
    if (value1 === value2) result[`   ${key}`] = value1;
    if (keys1.includes(key) && !keys2.includes(key)) result[` - ${key}`] = value1;
    if (!keys1.includes(key) && keys2.includes(key)) result[` + ${key}`] = value2;
    if (keys1.includes(key) && keys2.includes(key) && value1 !== value2) {
      result[` - ${key}`] = value1;
      result[` + ${key}`] = value2;
    }
  });
  return stringify(result);
};

export default genDiff;
