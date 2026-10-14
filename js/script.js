document.addEventListener('DOMContentLoaded', () => {
  // Filter menu cards by category
  const filterButtons = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-item');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      filterButtons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');

      const selectedCategory = button.dataset.filter;
      menuItems.forEach((item) => {
        const shouldShow = selectedCategory === 'all' || item.dataset.category === selectedCategory;
        item.classList.toggle('hidden', !shouldShow);
      });
    });
  });

  // Fill and open the details modal
  const foodModalElement = document.getElementById('foodModal');
  const foodModal = new bootstrap.Modal(foodModalElement);
  const modalTitle = document.getElementById('foodModalLabel');
  const modalDescription = document.getElementById('modalDescription');
  const modalPrice = document.getElementById('modalPrice');

  document.querySelectorAll('.details-btn').forEach((button) => {
    button.addEventListener('click', () => {
      modalTitle.textContent = button.dataset.name;
      modalDescription.textContent = button.dataset.description;
      modalPrice.textContent = button.dataset.price;
      foodModal.show();
    });
  });

  // Back-to-top button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 450);
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});
