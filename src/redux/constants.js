module.exports = `
LOGIN
LOGOUT
`
  .split("\n")
  .filter(Boolean)
  .reduce((p, name) => ({ ...p, [name]: name }), {});
