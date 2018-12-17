module.exports = async ({ say }) => {
  await say(
    [
      '`!help` - This help',
      '`!about` - About Sweetie-bot',       
      '',     
      '--- Dem Bits ---',
      'DM Only',
      '`!balance` - See your balance',
      '`!deposit` - See your deposit address',
      '`!withdraw` <address> <amount of Bits>',
      '',
      'Channel only',
      '`!tip` <recipient> <amount of Bits>',
      'or',
      '`!tip` <recipient> $<amount of USD>',
      '`!withdraw` <address> <amount of Bits>',
      '',
      '`!shop` - Community Shop',
    ].join('\n')
  );
};
