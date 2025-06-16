const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>M.V Sushi Delivery - Teste</title>
      <meta charset="utf-8">
    </head>
    <body style="font-family: Arial, sans-serif; padding: 20px;">
      <h1>🍣 M.V Sushi Delivery</h1>
      <p>Servidor HTTP básico funcionando!</p>
      <p>Se você está vendo esta mensagem, o problema não é de rede.</p>
      <button onclick="alert('JavaScript funcionando!')">Testar JS</button>
    </body>
    </html>
  `);
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});