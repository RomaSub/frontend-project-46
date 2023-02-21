import { load } from 'js-yaml';

const parse = (content, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(content);
    case '.yml':
      return load(content);
    default:
      throw new Error(`Invalid format: ${format}`);
  }
};

export default parse;
