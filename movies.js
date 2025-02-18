fetch('http://127.0.0.1:5000/movies')
    .then(response => response.json())
    .then(data => {
        const moviesContainer = document.getElementById('movies-container');

        data.forEach((movie, index) => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('movie');

            const movieImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            const movieTitle = movie.title;
            const movieOverview = movie.overview.length > 100 ? movie.overview.substring(0, 100) + '...' : movie.overview;

            // Generar ID único para la estrella
            const starId = `star-${index}`;

            movieDiv.innerHTML = `
                <img src="${movieImage}" alt="${movieTitle}">
                <h3>${movieTitle}</h3>
                <p>${movieOverview}</p>
                <div class="rating-container">
                    <input type="checkbox" id="${starId}">
                    <label for="${starId}">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                        </svg>
                    </label>
                </div>
            `;

            moviesContainer.appendChild(movieDiv);
        });
    })
    .catch(error => console.log('Error fetching movies:', error));
