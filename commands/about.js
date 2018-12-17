module.exports = async ({ say }) => {
  const { name, version } = require('../package.json');

  await say(
    `\`${name} v${version}\`. Fork of Shilly: see https://github.com/abrkn/shilly `
  );
};
