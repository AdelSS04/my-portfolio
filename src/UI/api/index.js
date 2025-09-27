module.exports = async (req, res) => {
  const { app } = await import('../dist/my-portfolio/server/server.mjs');
  return app(req, res);
};
