import _ from 'lodash';
import * as fs from 'node:fs';
import path from 'node:path';

// функция для отображения финальной строки
const getString = (arr) => { 
    const result = [];
    arr.map((element) => {
      switch (element.type) {
        case 'added':
          result.push(`  + ${element.name}: ${element.value}`);
          break;
        case 'deleted':
          result.push(`  - ${element.name}: ${element.value}`);
          break;
        case 'changed':
          result.push(`  - ${element.name}: ${element.deletedValue}`);
          result.push(`  + ${element.name}: ${element.addedValue}`);
          break;
        default:
          result.push(`    ${element.name}: ${element.value}`);
      }
      return result;
    });
    return (`{\n${result.push('\n')}\n}`);
  };

const genDiff = (filepath1, filepath2) => {
// читаем файлы
    const file1 = path.resolve(process.cwd(), filepath1);  
    const file2 = path.resolve(process.cwd(), filepath2); 
//парсим
    const obj1 = JSON.parse(fs.readFileSync(file1));
    const obj2 = JSON.parse(fs.readFileSync(file2));
//формируем массив
    const arr1 = Object.entries(obj1);
    const arr2 = Object.entries(obj2);
//объединяем массивы
    const objects = _.union(arr1, arr2);
//сортируем ключи 
//uniqWith используется для удаления любых повторяющихся объектов из массива
//isEqual используется для сравнения объектов в массиве, чтобы убедиться, что в отсортированном массиве нет дубликатов
    const sorted = _.uniqWith(_.sortBy(objects), _.isEqual);
    const result = [];
//map используется для переборки отсортированного массива 
//hasOwn используется для проверки того, обладает ли объект определенным свойством
    sorted.map(([key, val]) => {
        if (!Object.hasOwn(obj1, key)) {
            result.push({ name: key, type: 'added', value: val });
          } else if (!Object.hasOwn(obj2, key)) {
            result.push({ name: key, type: 'deleted', value: val });
          } else if (obj1[key] !== obj2[key]) {
            result.push({
              name: key, type: 'changed', deletedValue: obj1[key], addedValue: obj2[key],
            });
          } else {
            result.push({ name: key, type: 'unchanged', value: val });
          }
          return result;
        });
        return getString(_.uniqWith(result, _.isEqual));
      };

export default genDiff;