//servidor 
require('dotenv').config();
const app = require('./src/apps');
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor corriendo en el puerto ${PORT}`);
});