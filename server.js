/**
 * Servidor HTTP Local para Açaí Tropical Gourmet
 * Zero dependências externas - Detecção automática de portas livres
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const DEFAULT_PORT = parseInt(process.argv[2] || process.env.PORT || '3005', 10);
const BASE_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ico': 'image/x-icon'
};

function createServer() {
  return http.createServer((req, res) => {
    let parsedUrl = req.url.split('?')[0];
    if (parsedUrl === '/') {
      parsedUrl = '/index.html';
    }

    const filePath = path.join(BASE_DIR, decodeURIComponent(parsedUrl));

    if (!filePath.startsWith(BASE_DIR)) {
      res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('403 Acesso Negado');
      return;
    }

    fs.stat(filePath, (err, stats) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 Página não encontrada</h1>');
        return;
      }

      let actualFile = filePath;
      if (stats.isDirectory()) {
        actualFile = path.join(filePath, 'index.html');
      }

      fs.readFile(actualFile, (readErr, content) => {
        if (readErr) {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('500 Erro interno ao ler arquivo');
          return;
        }

        const ext = path.extname(actualFile).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        });
        res.end(content);
      });
    });
  });
}

function startServer(port, attemptsLeft = 10) {
  const server = createServer();

  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`⚠️  A porta ${port} já está em uso.`);
      if (attemptsLeft > 0) {
        const nextPort = port + 1;
        console.log(`🔄 Tentando automaticamente a porta ${nextPort}...`);
        startServer(nextPort, attemptsLeft - 1);
      } else {
        console.error('❌ Nenhuma porta disponível encontrada.');
        process.exit(1);
      }
    } else {
      console.error('❌ Erro no servidor:', err);
      process.exit(1);
    }
  });

  server.once('listening', () => {
    console.log('\n==================================================');
    console.log('🍧 Açaí Tropical Gourmet — Servidor Local Iniciado!');
    console.log(`👉 Acesse no navegador: http://localhost:${port}`);
    console.log('==================================================');
    console.log('💡 Pressione Ctrl + C para encerrar.\n');
  });

  server.listen(port);
}

startServer(DEFAULT_PORT);
