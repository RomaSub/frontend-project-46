import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (filePath) => {
  const fileExtname = path.extname(filePath);
  if (fileExtname === '.yml') {
    return yaml.load(fs.readFileSync(filePath, 'utf-8'));
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};
