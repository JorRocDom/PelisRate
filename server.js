const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

// URL para obtener todas las películas de la API de TMDb
const tmdbApiUrl = 'https://api.themoviedb.org/3/discover/movie?language=en&sort_by=popularity.desc';
const tmdbApiKey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWJiMzRlNzE4NjZiZmQ4OWJjMTVhNTFmYjA5MjRiOSIsIm5iZiI6MTczOTg3NzExNC44MjIsInN1YiI6IjY3YjQ2YWZhZjM1ZDQxMDIwOTZkZDE2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ozWSnO0mTk_8LlT9ZezCbNze9DNSC74R0d80iCnG3Jo';

// Servir los archivos estáticos desde la raíz del proyecto (sin "public")
app.use(express.static(path.join(__dirname)));

// Ruta para obtener todas las películas
app.get('/movies', (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: tmdbApiKey
    }
  };

  // Hacemos el fetch a la API de TMDb para obtener todas las películas
  fetch(tmdbApiUrl, options)
    .then(response => response.json())  // Convertimos la respuesta a JSON
    .then(json => {
      res.json(json.results);  // Respondemos con la lista de películas contenida en "results"
    })
    .catch(err => {
      console.error('Error al hacer la petición:', err);
      res.status(500).send('Error al obtener los datos de las películas de TMDb');
    });
});

// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
