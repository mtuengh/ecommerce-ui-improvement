'use strict';

(function () {
  const productGrid = document.getElementById('product-grid');
  const allCards = Array.from(productGrid.querySelectorAll('.product-card'));
  const searchInput = document.getElementById('site-search');
  const searchForm = document.getElementById('search-form');
  const categoryFilter = document.getElementById('category-filter');
  const sortSelect = document.getElementById('sort-select');
  const clearFiltersButton = document.getElementById('clear-filters');
  const emptyResetButton = document.getElementById('empty-reset');
  const resultCount = document.getElementById('result-count');
  const emptyResults = document.getElementById('empty-results');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const summaryQuantity = document.getElementById('summary-quantity');
  const summarySubtotal = document.getElementById('summary-subtotal');
  const summaryTotal = document.getElementById('summary-total');
  const checkoutButton = document.getElementById('checkout-demo');
  const toast = document.getElementById('toast');

  const cart = new Map();
  const categoryLabels = { skincare: 'chăm sóc da', makeup: 'trang điểm', body: 'chăm sóc cơ thể' };
  let activeCategory = 'all';
  let toastTimer;

  const productData = new Map(allCards.map((card) => [card.dataset.id, {
    id: card.dataset.id,
    name: card.dataset.name,
    brand: card.dataset.brand,
    category: card.dataset.category,
    price: Number(card.dataset.price),
    image: card.querySelector('img').getAttribute('src'),
    imageAlt: card.querySelector('img').getAttribute('alt')
  }]));

  function formatPrice(value) {
    return new Intl.NumberFormat('vi-VN').format(value) + '₫';
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('visible'), 2600);
  }

  function normalized(value) {
    return value.toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').trim();
  }

  function filterAndSortProducts() {
    const query = normalized(searchInput.value);
    const category = categoryFilter.value;
    const filtered = allCards.filter((card) => {
      const matchesCategory = (activeCategory === 'all' || card.dataset.category === activeCategory) &&
        (category === 'all' || card.dataset.category === category);
      const searchable = normalized([card.dataset.name, card.dataset.brand, card.dataset.category, categoryLabels[card.dataset.category] || '', card.querySelector('.product-meta')?.textContent || ''].join(' '));
      return matchesCategory && (!query || searchable.includes(query));
    });

    const sort = sortSelect.value;
    filtered.sort((a, b) => {
      if (sort === 'price-asc') return Number(a.dataset.price) - Number(b.dataset.price);
      if (sort === 'price-desc') return Number(b.dataset.price) - Number(a.dataset.price);
      if (sort === 'name-asc') return a.dataset.name.localeCompare(b.dataset.name, 'vi');
      return Number(a.dataset.featured) - Number(b.dataset.featured);
    });

    filtered.forEach((card) => productGrid.appendChild(card));
    allCards.forEach((card) => { card.hidden = !filtered.includes(card); });
    emptyResults.hidden = filtered.length !== 0;
    productGrid.hidden = filtered.length === 0;
    resultCount.innerHTML = 'Hiển thị <strong>' + filtered.length + '</strong> sản phẩm';
  }

  function setCategory(category) {
    activeCategory = category;
    categoryFilter.value = category;
    document.querySelectorAll('[data-category]').forEach((button) => {
      if (!button.classList.contains('product-card')) {
        const selected = button.dataset.category === category;
        button.classList.toggle('selected', selected);
        button.setAttribute('aria-pressed', String(selected));
      }
    });
    document.querySelectorAll('[data-category-link]').forEach((link) => {
      link.classList.toggle('active', link.dataset.categoryLink === category && !link.classList.contains('nav-deal'));
    });
    filterAndSortProducts();
  }

  function clearFilters() {
    searchInput.value = '';
    categoryFilter.value = 'all';
    sortSelect.value = 'featured';
    activeCategory = 'all';
    document.querySelectorAll('.category-chip').forEach((button) => {
      const selected = button.dataset.category === 'all';
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('[data-category-link]').forEach((link) => {
      link.classList.toggle('active', link.dataset.categoryLink === 'all' && !link.classList.contains('nav-deal'));
    });
    filterAndSortProducts();
  }

  function renderCart() {
    const entries = Array.from(cart.entries());
    const totalQuantity = entries.reduce((sum, entry) => sum + entry[1], 0);
    const subtotal = entries.reduce((sum, [id, quantity]) => sum + productData.get(id).price * quantity, 0);
    cartCount.textContent = String(totalQuantity);
    summaryQuantity.textContent = String(totalQuantity);
    summarySubtotal.textContent = formatPrice(subtotal);
    summaryTotal.textContent = formatPrice(subtotal);
    checkoutButton.disabled = totalQuantity === 0;

    if (entries.length === 0) {
      cartItemsContainer.innerHTML = '<div class="cart-empty-state"><span aria-hidden="true">♡</span><strong>Giỏ hàng đang trống</strong><p>Thêm sản phẩm bạn quan tâm để xem tạm tính tại đây.</p><a class="text-link" href="#products">Tiếp tục xem sản phẩm →</a></div>';
      return;
    }

    cartItemsContainer.innerHTML = entries.map(([id, quantity]) => {
      const product = productData.get(id);
      return '<article class="cart-row" data-cart-id="' + product.id + '">' +
        '<img src="' + product.image + '" alt="' + product.imageAlt.replace(/"/g, '&quot;') + '">' +
        '<div class="cart-product-main"><p class="cart-product-name">' + product.name + '</p>' +
        '<p class="cart-product-brand">' + product.brand + ' · ' + formatPrice(product.price) + '</p>' +
        '<div class="cart-row-actions"><div class="quantity-control" aria-label="Chỉnh số lượng ' + product.name + '">' +
        '<button type="button" data-quantity-change="-1" data-id="' + product.id + '" aria-label="Giảm số lượng">−</button>' +
        '<output aria-live="polite">' + quantity + '</output>' +
        '<button type="button" data-quantity-change="1" data-id="' + product.id + '" aria-label="Tăng số lượng">+</button>' +
        '</div><button class="remove-item" type="button" data-remove="' + product.id + '">Xóa</button></div></div>' +
        '<div class="cart-line-total">' + formatPrice(product.price * quantity) + '</div></article>';
    }).join('');
  }

  searchInput.addEventListener('input', filterAndSortProducts);
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    filterAndSortProducts();
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    const query = searchInput.value.trim();
    showToast(query ? 'Đang hiển thị kết quả cho: ' + query : 'Bạn đang xem tất cả sản phẩm mẫu.');
  });
  categoryFilter.addEventListener('change', () => setCategory(categoryFilter.value));
  sortSelect.addEventListener('change', filterAndSortProducts);
  clearFiltersButton.addEventListener('click', clearFilters);
  emptyResetButton.addEventListener('click', clearFilters);

  document.querySelectorAll('.category-chip').forEach((button) => {
    button.addEventListener('click', () => setCategory(button.dataset.category));
  });
  document.querySelectorAll('[data-category-link]').forEach((link) => {
    link.addEventListener('click', () => setCategory(link.dataset.categoryLink));
  });

  document.querySelectorAll('[data-add]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.add;
      cart.set(id, (cart.get(id) || 0) + 1);
      renderCart();
      showToast('Đã thêm sản phẩm vào giỏ hàng.');
    });
  });

  document.querySelectorAll('.favorite-button').forEach((button) => {
    button.addEventListener('click', () => {
      const isFavorite = button.getAttribute('aria-pressed') !== 'true';
      button.setAttribute('aria-pressed', String(isFavorite));
      button.textContent = isFavorite ? '♥' : '♡';
      showToast(isFavorite ? 'Đã thêm vào danh sách yêu thích minh họa.' : 'Đã xóa khỏi danh sách yêu thích minh họa.');
    });
  });

  cartItemsContainer.addEventListener('click', (event) => {
    const quantityButton = event.target.closest('[data-quantity-change]');
    const removeButton = event.target.closest('[data-remove]');
    if (quantityButton) {
      const id = quantityButton.dataset.id;
      const nextQuantity = (cart.get(id) || 0) + Number(quantityButton.dataset.quantityChange);
      if (nextQuantity <= 0) cart.delete(id); else cart.set(id, nextQuantity);
      renderCart();
    }
    if (removeButton) {
      cart.delete(removeButton.dataset.remove);
      renderCart();
      showToast('Đã xóa sản phẩm khỏi giỏ hàng.');
    }
  });

  checkoutButton.addEventListener('click', () => {
    showToast('Đây là giao diện minh họa; chưa tích hợp đặt hàng hoặc thanh toán.');
  });

  renderCart();
  filterAndSortProducts();
}());
