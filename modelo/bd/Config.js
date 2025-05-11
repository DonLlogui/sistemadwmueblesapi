require('dotenv').config();

const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];

requiredEnvVars.forEach((key) => {
  if (typeof process.env[key] === 'undefined') {
    console.warn(`⚠️  La variable de entorno ${key} no está definida en el archivo .env`);
  }
});

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'sistemadwmuebles'
};

module.exports = dbConfig;
