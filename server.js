const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'sushi-delivery-pro.html'));
});

app.get('/pro', (req, res) => {
  res.sendFile(path.join(__dirname, 'sushi-delivery-pro.html'));
});

app.get('/basic', (req, res) => {
  res.sendFile(path.join(__dirname, 'sushi-delivery.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🍣 M.V Sushi Delivery rodando em:`);
  console.log(`- Local: http://localhost:${PORT}`);
  console.log(`- WSL IP: http://172.24.150.186:${PORT}`);
  console.log(`- Versão Pro: http://localhost:${PORT}/pro`);
  console.log(`- Versão Básica: http://localhost:${PORT}/basic`);
});