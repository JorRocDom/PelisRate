document.addEventListener("DOMContentLoaded", function () {
    const totalPages = 5; // Número total de páginas
    const currentPage = 1; // Página actual (se puede ajustar dinámicamente)
    const pageContainer = document.getElementById("pageNumbers");
    const prevButton = document.getElementById("prevPage");
    const nextButton = document.getElementById("nextPage");

    function renderPagination() {
        pageContainer.innerHTML = ""; // Limpiar antes de renderizar
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;
            pageButton.classList.add("page-btn");
            if (i === currentPage) {
                pageButton.classList.add("active");
            }
            pageButton.addEventListener("click", function () {
                window.location.href = `pagina${i}.html`; // Ajusta los enlaces según la estructura de tu proyecto
            });
            pageContainer.appendChild(pageButton);
        }
    }

    prevButton.addEventListener("click", function () {
        if (currentPage > 1) {
            window.location.href = `pagina${currentPage - 1}.html`;
        }
    });

    nextButton.addEventListener("click", function () {
        if (currentPage < totalPages) {
            window.location.href = `pagina${currentPage + 1}.html`;
        }
    });

    renderPagination();
});