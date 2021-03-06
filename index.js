#!/usr/bin/env node

const fs = require('fs');

const { argv } = require('yargs');

const { Ext, ExtByType, IgnoreType } = require('./files');

const readFileAsync = async (...args) => {
  return new Promise((resolve, reject) => {
    fs.readFile(...args, (err, data) => {
      if (err) {
        return reject(err);
      }

      return resolve(data);
    });
  });
};

const getSearchRegexes = () => {
  let regexes = Object.values(Ext);

  const type = argv.type || argv.t;

  if (type) {
    const extensionsObject = ExtByType[type];
    if (extensionsObject) {
      regexes = Object.values(extensionsObject);
    } else {
      console.log(`invalid type provided: ${type}`);
      console.log(JSON.stringify(Object.keys(ExtByType)));
      process.exit(1)
    }
  }

  return regexes;
};

const parse = async (filePath) => {
  const regexes = getSearchRegexes();
  const contents = await readFileAsync(filePath, 'utf8');
  return contents.split('\n').filter((str) => (
    str
    && str.length
    && !str.match(IgnoreType)
    && regexes.find((regex) => str.match(regex))
  ));
};

const writeOutput = (output) => {
  const outputStr = JSON.stringify(output, null, 2);
  fs.writeFileSync(`./result_${Date.now()}.txt`, outputStr);
};

const allArgs = process.argv.slice(2);

const filePath = allArgs[0];

process.nextTick(async () => {
  try {
    const files = await parse(filePath);
    writeOutput(files);
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
});
