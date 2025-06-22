const mysql = require('mysql2/promise');

// Create pool configuration
const pool = mysql.createPool({
    host: 'sql.freedb.tech',
    user: 'freedb_yatin',
    password: 'PGQR9FzDY5a%z$%',
    database: 'freedb_cryptoTrade',
    ssl: {
        rejectUnauthorized: false
    },
    connectionLimit: 10 // Adjust based on your needs (e.g., number of concurrent connections)
});

module.exports = pool;