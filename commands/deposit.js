const { fetchTotalTetherTokens } = require('../apis');
const { formatBch, createQrCode } = require('../utils');
const numeral = require('numeral');

module.exports = async ({ recipient, message, reply, params, tipping, isDm }) => {
  if (!isDm) {
    return;
  }
  const address = await tipping.getAddressForUser(recipient.id);
  const qr = await createQrCode(`bitcoincash:${address}`);

  await reply(`To deposit Bitcoin Cash (BCH), send to: \`${address}\``);

  await reply({
    file: qr,
  });
};
