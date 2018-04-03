// eslint-disable-next-line
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default emails => {
  const invalidEmails = emails
    .replace(/^\s*,$/, '')
    .replace(/,\s*$/, '')
    .split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false);

  if (invalidEmails.length) {
    if (invalidEmails.includes('')) {
      return 'Remove the trailing comma or add another email address';
    }
    return `These emails are invalid: ${invalidEmails.join(', ')}`;
  }

  return;
};
