import hhtp from 'http'
import api from './Api/Api.js'
import config from './Api/config/index.js'
import database from './Api/config/database.js'
const server = hhtp.createServer(api);

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.log('Ese puerto ya está siendo usado por otra aplicación');
    console.log(
      `El puerto ${config.server.port} ya está siendo usado por otra aplicación`
    );
  }
  console.error('Error al iniciar servidor 🔴');
  console.error(
    `Error al iniciar servidor en el puerto ${config.server.port}🔴`
  );
});

server.on('listening', () => {
  console.log('Servidor escuchando 🟢');
  console.log(`Servidor escuchando 🟢 en el puerto ${config.server.port}`);
});

server.listen(config.server.port);
database();
//Iniciar la conexión a la base de datos