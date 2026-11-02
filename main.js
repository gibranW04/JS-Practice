
const http = require('http');
const fs = require('fs');
const path = require('path');

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

const server = http.createServer((req, res) => {
    const sendJSON = (status, data) => {
        res.writeHead(status, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(data));
    };

    if (req.url === '/api/new-game' && req.method === 'GET') {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        gameOver = false;

        return sendJSON(200, {
            message: 'Game baru dimulai!',
            attempts: 0
        });
    }

    if (req.url === '/api/guess' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                const guess = Number(data.guess);

                if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
                    return sendJSON(400, {
                        message: 'Masukkan angka 1 sampai 100!'
                    });
                }

                if (gameOver) {
                    return sendJSON(400, {
                        message: 'Game sudah selesai. Mulai game baru!'
                    });
                }

                attempts++;

                if (guess === secretNumber) {
                    gameOver = true;
                    return sendJSON(200, {
                        result: 'win',
                        message: 'Selamat! Tebakan kamu benar!',
                        attempts
                    });
                }

                sendJSON(200, {
                    result: 'wrong',
                    message: guess < secretNumber
                        ? 'Terlalu kecil! Coba angka yang lebih besar.'
                        : 'Terlalu besar! Coba angka yang lebih kecil.',
                    attempts
                });

            } catch (error) {
                sendJSON(400, {
                    message: 'Data tidak valid!'
                });
            }
        });

        return;
    }

    const files = {
        '/': 'index.html',
        '/index.html': 'index.html',
        '/style.css': 'style.css',
        '/script.js': 'script.js'
    };

    const filename = files[req.url];

    if (req.method === 'GET' && filename) {
        const filePath = path.join(__dirname, 'public', filename);

        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                return res.end('Gagal membaca file.');
            }

            const type = filename.endsWith('.css')
                ? 'text/css'
                : filename.endsWith('.js')
                    ? 'text/javascript'
                    : 'text/html';

            res.writeHead(200, {
                'Content-Type': type
            });
            res.end(content);
        });

        return;
    }

    sendJSON(404, {
        message: 'Halaman tidak ditemukan!'
    });
});

server.listen(3000, () => {
    console.log('Game berjalan di http://localhost:3000');
});
