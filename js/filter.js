// ======================================
// Gallery Filter 
// ======================================

document.addEventListener("DOMContentLoaded", function () {

  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  let activeFilters = [];

  function filterGallery() {

    galleryItems.forEach(item => {

      const categories = (item.dataset.category || "")
        .toLowerCase()
        .split(/\s+/);

      // Mode ET : toutes les catégories doivent correspondre
      const matches = activeFilters.length === 0 ||
        activeFilters.every(filter => categories.includes(filter));

      item.style.display = matches ? "" : "none";

    });

  }

  filterButtons.forEach(button => {

    button.addEventListener("click", function () {

      const filter = this.dataset.filter;

      if (filter === "all") {

        activeFilters = [];

        filterButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

      } else {

        document.querySelector('[data-filter="all"]')
          .classList.remove("active");

        if (activeFilters.includes(filter)) {

          activeFilters = activeFilters.filter(f => f !== filter);
          this.classList.remove("active");

        } else {

          activeFilters.push(filter);
          this.classList.add("active");

        }

        if (activeFilters.length === 0) {
          document.querySelector('[data-filter="all"]')
            .classList.add("active");
        }

      }

      filterGallery();

    });

  });

});
