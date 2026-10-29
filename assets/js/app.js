/**
 * Açaí Tropical Gourmet - Aplicação de Cardápio Interativo & Checkout WhatsApp
 * Desenvolvido com foco em alta conversão, experiência gourmet, acessibilidade e motion design.
 */

// Catálogo de Produtos e Insumos Oficiais
const ACAI_DATA = {
  sizes: [
    { id: "copo-300", name: "Copo 300ml", type: "Copo", price: 16.90, desc: "Porção individual perfeita para um lanche rápido e refrescante.", popular: false },
    { id: "copo-500", name: "Copo 500ml", type: "Copo", price: 22.90, desc: "O mais pedido da casa! Até 4 camadas fartas de açaí e complementos.", popular: true },
    { id: "copo-700", name: "Copo 700ml", type: "Copo", price: 28.90, desc: "Tamanho generoso para quem ama açaí de verdade.", popular: false },
    { id: "tigela-500", name: "Tigela Especial 500ml", type: "Tigela", price: 25.90, desc: "Apresentação gourmet em tigela funda com frutas decoradas em leque.", popular: false },
    { id: "tigela-1000", name: "Tigela Vulcão 1 Litro", type: "Tigela", price: 39.90, desc: "Ideal para compartilhar em família ou com a galera. Muito recheio!", popular: false }
  ],

  bases: [
    { id: "tradicional", name: "Tradicional Cremoso", badge: "Mais Cremoso", desc: "Receita clássica com xarope de guaraná suave e textura aveludada." },
    { id: "zero", name: "Zero Açúcar (Fit)", badge: "Sem Adição de Açúcar", desc: "Açaí puro adoçado levemente com estévia natural." },
    { id: "casadinho", name: "Casadinho (Açaí + Cupuaçu)", badge: "Sensação Amazônica", desc: "Metade açaí tradicional e metade creme de cupuaçu artesanal azedinho." }
  ],

  fruits: [
    { id: "banana", name: "Banana fatiada", icon: "🍌" },
    { id: "morango", name: "Morango fresco", icon: "🍓" },
    { id: "kiwi", name: "Kiwi fatiado", icon: "🥝" },
    { id: "manga", name: "Manga em cubos", icon: "🥭" },
    { id: "uva", name: "Uva verde sem semente", icon: "🍇" }
  ],

  toppings: [
    { id: "ninho", name: "Leite Ninho em pó", icon: "🥛" },
    { id: "granola", name: "Granola crocante tradicional", icon: "🌾" },
    { id: "pacoca", name: "Paçoca de rolha triturada", icon: "🥜" },
    { id: "ovomaltine", name: "Ovomaltine crocante", icon: "🍫" },
    { id: "chocoball", name: "Chocoball crocante", icon: "🍪" },
    { id: "castanha", name: "Xerém de castanha-de-caju", icon: "🌰" },
    { id: "coco", name: "Coco ralado queimado", icon: "🥥" }
  ],

  syrups: [
    { id: "condensado", name: "Leite condensado Moça", icon: "🍯" },
    { id: "chocolate", name: "Calda de chocolate meio amargo", icon: "🍫" },
    { id: "mel", name: "Mel de abelha silvestre puro", icon: "🐝" },
    { id: "calda-morango", name: "Calda artesanal de morango", icon: "🍓" },
    { id: "amendoim", name: "Pasta de amendoim integral", icon: "🥜" }
  ],

  turbinados: [
    { id: "borda-nutella", name: "Borda generosa de Nutella pura", price: 4.90, icon: "✨" },
    { id: "borda-doce-leite", name: "Borda de Doce de Leite cremoso", price: 3.90, icon: "🍮" },
    { id: "kitkat", name: "Barra de KitKat crocante", price: 3.50, icon: "🍫" },
    { id: "ouro-branco", name: "Bombom Ouro Branco picado", price: 2.90, icon: "🍬" },
    { id: "morango-dobro", name: "Porção extra de morango fresco", price: 3.00, icon: "🍓" }
  ],

  combos: [
    {
      id: "combo-1",
      name: "Tigela Ninho & Nutella Supreme",
      volume: "500ml",
      price: 29.90,
      tag: "Campeão de Vendas",
      desc: "Base de açaí super cremoso, camadas generosas de Leite Ninho, Nutella pura de verdade, morangos frescos e banana.",
      image: STORE_CONFIG.images.acaiPremium,
      fallback: STORE_CONFIG.images.fallbacks.acaiPremium,
      itemsPreview: ["Nutella Pura", "Leite Ninho", "Morangos", "Banana"]
    },
    {
      id: "combo-2",
      name: "Copo Vulcão de Paçoca & Mel",
      volume: "500ml",
      price: 24.90,
      tag: "Crocante & Doce",
      desc: "Açaí cremoso intercalado com paçoca de rolha, banana fatiada, leite condensado e borda de doce de leite.",
      image: STORE_CONFIG.images.acaiGourmetChocolate,
      fallback: STORE_CONFIG.images.fallbacks.acaiGourmetChocolate,
      itemsPreview: ["Paçoca", "Banana", "Leite Condensado", "Granola"]
    },
    {
      id: "combo-3",
      name: "Casadinho Amazônico de Cupuaçu",
      volume: "500ml",
      price: 26.90,
      tag: "Tradição do Norte",
      desc: "50% Açaí do Pará e 50% Creme de Cupuaçu artesanal levemente azedinho, com fatias de kiwi, granola e mel puro.",
      image: STORE_CONFIG.images.acaiTradicional,
      fallback: STORE_CONFIG.images.fallbacks.acaiTradicional,
      itemsPreview: ["Açaí Puro", "Creme de Cupuaçu", "Kiwi", "Mel Silvestre"]
    },
    {
      id: "combo-4",
      name: "Tigela Tropical Fit Zero",
      volume: "500ml",
      price: 25.90,
      tag: "100% Saudável",
      desc: "Açaí zero açúcar com estévia, morango fresco, banana, manga em cubos, granola sem glúten e pasta de amendoim.",
      image: STORE_CONFIG.images.bowlPersonalizador,
      fallback: STORE_CONFIG.images.fallbacks.bowlPersonalizador,
      itemsPreview: ["Zero Açúcar", "Manga", "Morango", "Pasta de Amendoim"]
    }
  ],

  drinks: [
    { id: "agua-mineral", name: "Água Mineral Crystal 500ml", price: 4.00, desc: "Sem gás, bem gelada." },
    { id: "agua-gas", name: "Água com Gás 500ml", price: 4.50, desc: "Com gás natural, bem gelada." },
    { id: "agua-coco", name: "Água de Coco Integral 330ml", price: 7.90, desc: "100% natural sem conservantes." },
    { id: "suco-laranja", name: "Suco Natural de Laranja 400ml", price: 8.90, desc: "Espremido na hora da fruta pura." },
    { id: "coca-zero", name: "Coca-Cola Zero Lata 350ml", price: 6.00, desc: "Geladinha." },
    { id: "guarana", name: "Guaraná Antarctica Lata 350ml", price: 6.00, desc: "Original do Brasil." }
  ],

  ingredients: [
    { id: "morangos", name: "Morangos Frescos", desc: "Higienizados e fatiados artesanalmente no momento do pedido.", icon: "🍓", key: "morangos" },
    { id: "banana", name: "Banana Nanica", desc: "Docinha, rica em energia e fatiada na hora sem escurecer.", icon: "🍌", key: "banana" },
    { id: "granola", name: "Granola Crocante", desc: "Mix com castanhas, aveia dourada e flocos crocantes.", icon: "🌾", key: "granola" },
    { id: "chocolate", name: "Gotas de Chocolate Nobre", desc: "Cacau selecionado com intensidade e derretimento suave.", icon: "🍫", key: "chocolate" },
    { id: "leite-em-po", name: "Leite Ninho Tradicional", desc: "O autêntico e farto leite em pó com sabor de infância.", icon: "🥛", key: "leiteEmPo" },
    { id: "pacoca", name: "Paçoca de Rolha", desc: "Amendoim torrado moído artesanalmente com toque crocante.", icon: "🥜", key: "pacoca" }
  ]
};

// Estado Global da Aplicação
const AppState = {
  cart: [],
  customizer: {
    selectedSize: ACAI_DATA.sizes[1], // Padrão: Copo 500ml
    selectedBase: ACAI_DATA.bases[0], // Padrão: Tradicional
    selectedFruits: ["banana", "morango"],
    selectedToppings: ["ninho", "granola"],
    selectedSyrups: ["condensado"],
    selectedTurbinados: [],
    customNotes: ""
  }
};

// Formatação Monetária BRL
function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// Geração de Placeholders Neutros Elegantes para Imagens Pendentes (Nano Banana)
function generateNeutralPlaceholder(filename, label) {
  const safeFilename = filename || 'imagem-pendente.webp';
  const safeLabel = label || 'Imagem Pendente (Nano Banana)';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400" fill="none">
    <rect width="100%" height="100%" fill="#12041d"/>
    <rect x="16" y="16" width="568" height="368" rx="16" fill="#1b072b" stroke="#9333ea" stroke-width="2" stroke-dasharray="6 6" stroke-opacity="0.5"/>
    <g transform="translate(300, 150)">
      <circle cx="0" cy="0" r="42" fill="#2d0b47"/>
      <path d="M-18 -10 L18 -10 L12 12 L-12 12 Z" fill="#9333ea" opacity="0.8"/>
      <circle cx="-6" cy="-4" r="3" fill="#fbbf24"/>
      <path d="M-8 8 L-2 0 L4 6 L8 2 L12 8 Z" fill="#f59e0b"/>
    </g>
    <text x="300" y="228" text-anchor="middle" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="700" font-size="16" fill="#fdf8ff">
      ${safeLabel}
    </text>
    <text x="300" y="256" text-anchor="middle" font-family="'Inter', monospace" font-size="13" font-weight="600" fill="#fbbf24">
      ${safeFilename}
    </text>
    <text x="300" y="286" text-anchor="middle" font-family="'Inter', sans-serif" font-size="11" fill="#a79cb5">
      Produção Externa • Nano Banana
    </text>
  </svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// Fallback Inteligente de Imagens: Nano Banana WebP -> Fallback Provisório Local -> Placeholder Neutro SVG
function handleNanoImageFallback(imgEl, expectedPath, fallbackPath, label) {
  if (imgEl.dataset.fallbackTried === "done") {
    imgEl.src = generateNeutralPlaceholder(expectedPath, label);
    return;
  }
  imgEl.dataset.fallbackTried = "done";
  if (fallbackPath) {
    imgEl.src = fallbackPath;
    const cardWrap = imgEl.closest('.product-image-wrap, .hero-image-card, .ingredient-img-wrap, .customizer-preview-card');
    if (cardWrap && !cardWrap.querySelector('.nano-pending-indicator')) {
      const badge = document.createElement('span');
      badge.className = 'nano-pending-indicator';
      badge.title = `Aguardando arquivo final do Nano Banana: ${expectedPath}`;
      badge.textContent = `📷 Aguardando: ${expectedPath.split('/').pop()}`;
      cardWrap.appendChild(badge);
    }
  } else {
    imgEl.src = generateNeutralPlaceholder(expectedPath, label);
  }
}

// Inicialização da Aplicação
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromStorage();
  renderSizesSelector();
  renderCustomizerOptions();
  renderCombosGrid();
  renderDrinksGrid();
  renderIngredientsShowcase();
  updateCustomizerLivePrice();
  updateCartUI();
  setupEventListeners();
  setupScrollAnimations();
  setupStickyHeader();
  setupHeroVideo();
});

// Otimização e Controle do Vídeo Hero em Loop (Efeito GIF Suave)
function setupHeroVideo() {
  const video = document.getElementById("heroVideo");
  if (!video) return;

  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mediaQuery.matches) {
    video.pause();
    return;
  }

  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Fallback gracioso para poster caso o navegador bloqueie
    });
  }

  // Pausa o vídeo quando o usuário rola para longe para economizar CPU e bateria
  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!mediaQuery.matches && video.paused) {
            video.play().catch(() => {});
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      });
    }, { threshold: 0.15 });
    videoObserver.observe(video);
  }
}

// Animação de Entrada e Scroll Reveal via IntersectionObserver
function setupScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.12
    });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('is-visible'));
  }
}

// Header com sombra e blur dinâmico na rolagem
function setupStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }, { passive: true });
}

// Renderizar seletores de tamanho no personalizador
function renderSizesSelector() {
  const container = document.getElementById("sizesContainer");
  if (!container) return;

  container.innerHTML = ACAI_DATA.sizes.map(size => {
    const isSelected = size.id === AppState.customizer.selectedSize.id;
    return `
      <button type="button" 
              class="size-card ${isSelected ? 'active' : ''}" 
              onclick="selectCustomSize('${size.id}')"
              aria-pressed="${isSelected}">
        ${size.popular ? '<span class="popular-badge">Mais Pedido 🔥</span>' : ''}
        <div class="size-icon-cup">${size.type === 'Tigela' ? '🥣' : '🍧'}</div>
        <div class="size-name">${size.name}</div>
        <div class="size-price">${formatBRL(size.price)}</div>
        <div class="size-desc">${size.desc}</div>
      </button>
    `;
  }).join("");
}

// Renderizar opções do personalizador
function renderCustomizerOptions() {
  // Bases
  const basesContainer = document.getElementById("basesContainer");
  if (basesContainer) {
    basesContainer.innerHTML = ACAI_DATA.bases.map(base => {
      const isSelected = base.id === AppState.customizer.selectedBase.id;
      return `
        <label class="radio-option-card ${isSelected ? 'active' : ''}">
          <input type="radio" name="baseRadio" value="${base.id}" 
                 ${isSelected ? 'checked' : ''} 
                 onchange="selectCustomBase('${base.id}')">
          <div class="option-info">
            <div class="option-title">
              <strong>${base.name}</strong>
              <span class="badge-mini">${base.badge}</span>
            </div>
            <div class="option-desc">${base.desc}</div>
          </div>
        </label>
      `;
    }).join("");
  }

  // Frutas
  const fruitsContainer = document.getElementById("fruitsContainer");
  if (fruitsContainer) {
    fruitsContainer.innerHTML = ACAI_DATA.fruits.map(fruit => {
      const isChecked = AppState.customizer.selectedFruits.includes(fruit.id);
      return `
        <label class="checkbox-chip ${isChecked ? 'active' : ''}">
          <input type="checkbox" value="${fruit.id}" 
                 ${isChecked ? 'checked' : ''} 
                 onchange="toggleCustomOption('fruits', '${fruit.id}', this)">
          <span class="chip-content">
            <span class="chip-icon">${fruit.icon}</span>
            <span class="chip-label">${fruit.name}</span>
          </span>
        </label>
      `;
    }).join("");
  }

  // Complementos Secos
  const toppingsContainer = document.getElementById("toppingsContainer");
  if (toppingsContainer) {
    toppingsContainer.innerHTML = ACAI_DATA.toppings.map(t => {
      const isChecked = AppState.customizer.selectedToppings.includes(t.id);
      return `
        <label class="checkbox-chip ${isChecked ? 'active' : ''}">
          <input type="checkbox" value="${t.id}" 
                 ${isChecked ? 'checked' : ''} 
                 onchange="toggleCustomOption('toppings', '${t.id}', this)">
          <span class="chip-content">
            <span class="chip-icon">${t.icon}</span>
            <span class="chip-label">${t.name}</span>
          </span>
        </label>
      `;
    }).join("");
  }

  // Caldas
  const syrupsContainer = document.getElementById("syrupsContainer");
  if (syrupsContainer) {
    syrupsContainer.innerHTML = ACAI_DATA.syrups.map(s => {
      const isChecked = AppState.customizer.selectedSyrups.includes(s.id);
      return `
        <label class="checkbox-chip ${isChecked ? 'active' : ''}">
          <input type="checkbox" value="${s.id}" 
                 ${isChecked ? 'checked' : ''} 
                 onchange="toggleCustomOption('syrups', '${s.id}', this)">
          <span class="chip-content">
            <span class="chip-icon">${s.icon}</span>
            <span class="chip-label">${s.name}</span>
          </span>
        </label>
      `;
    }).join("");
  }

  // Turbinados
  const turbinadosContainer = document.getElementById("turbinadosContainer");
  if (turbinadosContainer) {
    turbinadosContainer.innerHTML = ACAI_DATA.turbinados.map(tb => {
      const isChecked = AppState.customizer.selectedTurbinados.includes(tb.id);
      return `
        <label class="turbinado-row ${isChecked ? 'active' : ''}">
          <div class="turbinado-left">
            <input type="checkbox" value="${tb.id}" 
                   ${isChecked ? 'checked' : ''} 
                   onchange="toggleCustomOption('turbinados', '${tb.id}', this)">
            <span>${tb.icon} <strong>${tb.name}</strong></span>
          </div>
          <span class="turbinado-price">+${formatBRL(tb.price)}</span>
        </label>
      `;
    }).join("");
  }
}

// Handlers de Seleção no Personalizador
function selectCustomSize(sizeId) {
  const size = ACAI_DATA.sizes.find(s => s.id === sizeId);
  if (size) {
    AppState.customizer.selectedSize = size;
    renderSizesSelector();
    updateCustomizerLivePrice();
  }
}

function selectCustomBase(baseId) {
  const base = ACAI_DATA.bases.find(b => b.id === baseId);
  if (base) {
    AppState.customizer.selectedBase = base;
    renderCustomizerOptions();
    updateCustomizerLivePrice();
  }
}

function toggleCustomOption(type, id, checkbox) {
  let list;
  if (type === 'fruits') list = AppState.customizer.selectedFruits;
  else if (type === 'toppings') list = AppState.customizer.selectedToppings;
  else if (type === 'syrups') list = AppState.customizer.selectedSyrups;
  else if (type === 'turbinados') list = AppState.customizer.selectedTurbinados;

  if (checkbox.checked) {
    if (!list.includes(id)) list.push(id);
  } else {
    const idx = list.indexOf(id);
    if (idx > -1) list.splice(idx, 1);
  }

  renderCustomizerOptions();
  updateCustomizerLivePrice();
}

// Calcular Preço em Tempo Real do Açaí Montado
function calculateCustomizerPrice() {
  let total = AppState.customizer.selectedSize.price;

  // Frutas extras além do limite grátis
  const extraFruitsCount = Math.max(0, AppState.customizer.selectedFruits.length - STORE_CONFIG.freeFruitsLimit);
  total += extraFruitsCount * STORE_CONFIG.extraFruitPrice;

  // Complementos extras além do limite grátis
  const extraToppingsCount = Math.max(0, AppState.customizer.selectedToppings.length - STORE_CONFIG.freeToppingsLimit);
  total += extraToppingsCount * STORE_CONFIG.extraToppingPrice;

  // Caldas extras além do limite grátis
  const extraSyrupsCount = Math.max(0, AppState.customizer.selectedSyrups.length - STORE_CONFIG.freeSyrupsLimit);
  total += extraSyrupsCount * STORE_CONFIG.extraSyrupPrice;

  // Turbinados especiais
  AppState.customizer.selectedTurbinados.forEach(id => {
    const turb = ACAI_DATA.turbinados.find(t => t.id === id);
    if (turb) total += turb.price;
  });

  return total;
}

// Atualização de Preço e Resumo com Microinterações
function updateCustomizerLivePrice() {
  const priceDisplay = document.getElementById("customizerTotalPrice");
  const summaryDisplay = document.getElementById("customizerSummaryText");
  const fruitsRuleHint = document.getElementById("fruitsRuleHint");
  const toppingsRuleHint = document.getElementById("toppingsRuleHint");
  const syrupsRuleHint = document.getElementById("syrupsRuleHint");
  const previewImg = document.getElementById("customizerPreviewImg");

  const total = calculateCustomizerPrice();

  if (priceDisplay) {
    priceDisplay.textContent = formatBRL(total);
    // Microinteração: pulso de preço animado
    priceDisplay.classList.remove("price-pop");
    void priceDisplay.offsetWidth;
    priceDisplay.classList.add("price-pop");
  }

  // Atualizar contadores visuais de regras grátis vs adicionais
  const extraFruits = Math.max(0, AppState.customizer.selectedFruits.length - STORE_CONFIG.freeFruitsLimit);
  if (fruitsRuleHint) {
    fruitsRuleHint.innerHTML = extraFruits > 0 
      ? `(${AppState.customizer.selectedFruits.length} itens: 2 inclusos + <strong>${extraFruits} extra (+${formatBRL(extraFruits * STORE_CONFIG.extraFruitPrice)})</strong>)`
      : `(${AppState.customizer.selectedFruits.length}/${STORE_CONFIG.freeFruitsLimit} grátis inclusas)`;
  }

  const extraToppings = Math.max(0, AppState.customizer.selectedToppings.length - STORE_CONFIG.freeToppingsLimit);
  if (toppingsRuleHint) {
    toppingsRuleHint.innerHTML = extraToppings > 0
      ? `(${AppState.customizer.selectedToppings.length} itens: 3 inclusos + <strong>${extraToppings} extra (+${formatBRL(extraToppings * STORE_CONFIG.extraToppingPrice)})</strong>)`
      : `(${AppState.customizer.selectedToppings.length}/${STORE_CONFIG.freeToppingsLimit} grátis inclusos)`;
  }

  const extraSyrups = Math.max(0, AppState.customizer.selectedSyrups.length - STORE_CONFIG.freeSyrupsLimit);
  if (syrupsRuleHint) {
    syrupsRuleHint.innerHTML = extraSyrups > 0
      ? `(${AppState.customizer.selectedSyrups.length} caldas: 1 inclusa + <strong>${extraSyrups} extra (+${formatBRL(extraSyrups * STORE_CONFIG.extraSyrupPrice)})</strong>)`
      : `(${AppState.customizer.selectedSyrups.length}/${STORE_CONFIG.freeSyrupsLimit} grátis inclusa)`;
  }

  // Preview de Imagem Dinâmica
  if (previewImg) {
    const isBowl = AppState.customizer.selectedSize.type === "Tigela";
    const expected = isBowl ? STORE_CONFIG.images.bowlPersonalizador : STORE_CONFIG.images.acaiGourmetChocolate;
    const fallback = isBowl ? STORE_CONFIG.images.fallbacks.bowlPersonalizador : STORE_CONFIG.images.fallbacks.acaiGourmetChocolate;
    previewImg.dataset.fallbackTried = "";
    previewImg.src = expected;
    previewImg.onerror = () => handleNanoImageFallback(previewImg, expected, fallback, 'Personalizador');
  }

  if (summaryDisplay) {
    const fruitsText = AppState.customizer.selectedFruits
      .map(id => ACAI_DATA.fruits.find(f => f.id === id)?.name).filter(Boolean).join(", ") || "Sem frutas";
    const toppingsText = AppState.customizer.selectedToppings
      .map(id => ACAI_DATA.toppings.find(t => t.id === id)?.name).filter(Boolean).join(", ") || "Sem complementos";
    const syrupsText = AppState.customizer.selectedSyrups
      .map(id => ACAI_DATA.syrups.find(s => s.id === id)?.name).filter(Boolean).join(", ") || "Sem calda";
    const turbinadosText = AppState.customizer.selectedTurbinados
      .map(id => ACAI_DATA.turbinados.find(t => t.id === id)?.name).filter(Boolean).join(", ");

    summaryDisplay.innerHTML = `
      <div class="customizer-summary-headline">
        <strong>${AppState.customizer.selectedSize.name}</strong> • <em>${AppState.customizer.selectedBase.name}</em>
      </div>
      <div class="customizer-summary-details">
        <span>🍌 ${fruitsText}</span> &bull; 
        <span>🌾 ${toppingsText}</span> &bull; 
        <span>🍯 ${syrupsText}</span>
        ${turbinadosText ? `&bull; <span style="color: var(--accent-gold); font-weight: 700;">✨ ${turbinadosText}</span>` : ''}
      </div>
    `;
  }
}

// Adicionar Açaí Personalizado ao Carrinho
function addCustomAcaiToCart() {
  const notesInput = document.getElementById("customNotesInput");
  const notes = notesInput ? notesInput.value.trim() : "";

  const fruitsNames = AppState.customizer.selectedFruits
    .map(id => ACAI_DATA.fruits.find(f => f.id === id)?.name).filter(Boolean);
  const toppingsNames = AppState.customizer.selectedToppings
    .map(id => ACAI_DATA.toppings.find(t => t.id === id)?.name).filter(Boolean);
  const syrupsNames = AppState.customizer.selectedSyrups
    .map(id => ACAI_DATA.syrups.find(s => s.id === id)?.name).filter(Boolean);
  const turbinadosList = AppState.customizer.selectedTurbinados
    .map(id => ACAI_DATA.turbinados.find(tb => tb.id === id)).filter(Boolean);

  const unitPrice = calculateCustomizerPrice();

  const isBowl = AppState.customizer.selectedSize.type === "Tigela";
  const expectedImg = isBowl ? STORE_CONFIG.images.bowlPersonalizador : STORE_CONFIG.images.acaiGourmetChocolate;
  const fallbackImg = isBowl ? STORE_CONFIG.images.fallbacks.bowlPersonalizador : STORE_CONFIG.images.fallbacks.acaiGourmetChocolate;

  const cartItem = {
    id: "custom-" + Date.now(),
    title: `Açaí Montado (${AppState.customizer.selectedSize.name})`,
    base: AppState.customizer.selectedBase.name,
    fruits: fruitsNames,
    toppings: toppingsNames,
    syrups: syrupsNames,
    turbinados: turbinadosList.map(tb => tb.name),
    notes: notes,
    price: unitPrice,
    quantity: 1,
    image: expectedImg,
    fallback: fallbackImg
  };

  AppState.cart.push(cartItem);
  saveCartToStorage();
  updateCartUI();
  triggerCartBumpAnimation();
  openCartDrawer();

  showToast(`🍧 ${cartItem.title} adicionado ao seu pedido!`);

  if (notesInput) notesInput.value = "";
}

// Renderizar Combos do Chefe
function renderCombosGrid() {
  const grid = document.getElementById("combosGrid");
  if (!grid) return;

  grid.innerHTML = ACAI_DATA.combos.map((combo, idx) => `
    <article class="product-card animate-on-scroll" style="--stagger-index: ${idx}">
      <div class="product-image-wrap">
        <img src="${combo.image}" 
             alt="${combo.name}" 
             class="product-img" 
             loading="lazy"
             onerror="handleNanoImageFallback(this, '${combo.image}', '${combo.fallback}', '${combo.name}')">
        <span class="product-tag">${combo.tag}</span>
        <span class="product-volume">${combo.volume}</span>
      </div>
      <div class="product-body">
        <div>
          <h3 class="product-title">${combo.name}</h3>
          <p class="product-desc">${combo.desc}</p>
          <div class="combo-pills">
            ${combo.itemsPreview.map(item => `<span class="pill-mini">${item}</span>`).join("")}
          </div>
        </div>

        <div class="product-footer">
          <div class="product-price">${formatBRL(combo.price)}</div>
          <button type="button" class="btn-add-item" onclick="addComboToCart('${combo.id}')" aria-label="Pedir ${combo.name}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            <span>Pedir</span>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// Adicionar Combo Pronto ao Carrinho
function addComboToCart(comboId) {
  const combo = ACAI_DATA.combos.find(c => c.id === comboId);
  if (!combo) return;

  const existing = AppState.cart.find(item => item.comboId === comboId);
  if (existing) {
    existing.quantity += 1;
  } else {
    AppState.cart.push({
      id: "combo-" + Date.now(),
      comboId: combo.id,
      title: combo.name,
      base: "Receita Especial do Chefe",
      fruits: [],
      toppings: combo.itemsPreview,
      syrups: [],
      turbinados: [],
      notes: "",
      price: combo.price,
      quantity: 1,
      image: combo.image,
      fallback: combo.fallback
    });
  }

  saveCartToStorage();
  updateCartUI();
  triggerCartBumpAnimation();
  openCartDrawer();
  showToast(`✅ ${combo.name} adicionado ao pedido!`);
}

// Renderizar Bebidas
function renderDrinksGrid() {
  const grid = document.getElementById("drinksGrid");
  if (!grid) return;

  grid.innerHTML = ACAI_DATA.drinks.map((drink, idx) => `
    <div class="drink-card animate-on-scroll" style="--stagger-index: ${idx}">
      <div class="drink-info">
        <h4>${drink.name}</h4>
        <p>${drink.desc}</p>
        <span class="drink-price">${formatBRL(drink.price)}</span>
      </div>
      <button type="button" class="btn-add-drink" onclick="addDrinkToCart('${drink.id}')" aria-label="Adicionar ${drink.name}">
        + Adicionar
      </button>
    </div>
  `).join("");
}

function addDrinkToCart(drinkId) {
  const drink = ACAI_DATA.drinks.find(d => d.id === drinkId);
  if (!drink) return;

  const existing = AppState.cart.find(item => item.drinkId === drinkId);
  if (existing) {
    existing.quantity += 1;
  } else {
    AppState.cart.push({
      id: "drink-" + Date.now(),
      drinkId: drink.id,
      title: drink.name,
      base: "",
      fruits: [],
      toppings: [],
      syrups: [],
      turbinados: [],
      notes: "",
      price: drink.price,
      quantity: 1,
      image: STORE_CONFIG.images.bebidaAcai,
      fallback: STORE_CONFIG.images.fallbacks.bebidaAcai
    });
  }

  saveCartToStorage();
  updateCartUI();
  triggerCartBumpAnimation();
  showToast(`🥤 ${drink.name} adicionado!`);
}

// Renderizar Showcase de Ingredientes Selecionados
function renderIngredientsShowcase() {
  const container = document.getElementById("ingredientsGrid");
  if (!container) return;

  container.innerHTML = ACAI_DATA.ingredients.map((ing, idx) => {
    const expected = STORE_CONFIG.images.ingredientes[ing.key];
    return `
      <div class="ingredient-card animate-on-scroll" style="--stagger-index: ${idx}">
        <div class="ingredient-img-wrap">
          <img src="${expected}" 
               alt="${ing.name}" 
               class="ingredient-img"
               loading="lazy"
               onerror="handleNanoImageFallback(this, '${expected}', null, '${ing.name}')">
        </div>
        <div class="ingredient-details">
          <span class="ingredient-icon">${ing.icon}</span>
          <h4 class="ingredient-title">${ing.name}</h4>
          <p class="ingredient-desc">${ing.desc}</p>
        </div>
      </div>
    `;
  }).join("");
}

// Animação de pulso e bounce no carrinho
function triggerCartBumpAnimation() {
  const badges = document.querySelectorAll(".cart-count-badge");
  const buttons = document.querySelectorAll(".btn-open-cart");
  
  badges.forEach(b => {
    b.classList.remove("badge-pop");
    void b.offsetWidth;
    b.classList.add("badge-pop");
  });

  buttons.forEach(btn => {
    btn.classList.remove("cart-bounce");
    void btn.offsetWidth;
    btn.classList.add("cart-bounce");
  });
}

// Gerenciamento e Renderização do Carrinho
function updateCartUI() {
  const countBadges = document.querySelectorAll(".cart-count-badge");
  const container = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartSubtotalText");
  const deliveryEl = document.getElementById("cartDeliveryFeeText");
  const totalEl = document.getElementById("cartTotalText");
  const emptyState = document.getElementById("cartEmptyState");
  const footerEl = document.getElementById("cartFooterContainer");
  const headerTotalEl = document.getElementById("headerCartTotalPreview");

  const totalItems = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  countBadges.forEach(b => b.textContent = totalItems);

  if (!container) return;

  if (AppState.cart.length === 0) {
    if (emptyState) emptyState.style.display = "flex";
    if (footerEl) footerEl.style.display = "none";
    if (headerTotalEl) headerTotalEl.textContent = formatBRL(0);
    container.innerHTML = "";
    return;
  }

  if (emptyState) emptyState.style.display = "none";
  if (footerEl) footerEl.style.display = "block";

  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryType = document.querySelector('input[name="deliveryOption"]:checked')?.value || "delivery";
  
  let deliveryFee = 0;
  if (deliveryType === "delivery") {
    deliveryFee = (subtotal >= STORE_CONFIG.freeDeliveryThreshold) ? 0 : STORE_CONFIG.deliveryFee;
  }

  const grandTotal = subtotal + deliveryFee;

  if (headerTotalEl) headerTotalEl.textContent = formatBRL(grandTotal);
  if (subtotalEl) subtotalEl.textContent = formatBRL(subtotal);
  if (deliveryEl) {
    if (deliveryType === "pickup") {
      deliveryEl.textContent = "Retirada (R$ 0,00)";
    } else {
      deliveryEl.textContent = deliveryFee === 0 ? "GRÁTIS 🎉" : formatBRL(deliveryFee);
    }
  }
  if (totalEl) totalEl.textContent = formatBRL(grandTotal);

  container.innerHTML = AppState.cart.map((item, index) => `
    <div class="cart-item-card animate-on-scroll is-visible">
      <div class="cart-item-header">
        <strong>${item.title}</strong>
        <span class="cart-item-price">${formatBRL(item.price * item.quantity)}</span>
      </div>

      ${item.base ? `<div class="cart-item-detail">Base: <em>${item.base}</em></div>` : ''}
      ${item.fruits.length ? `<div class="cart-item-detail">Frutas: ${item.fruits.join(', ')}</div>` : ''}
      ${item.toppings.length ? `<div class="cart-item-detail">Complementos: ${item.toppings.join(', ')}</div>` : ''}
      ${item.syrups.length ? `<div class="cart-item-detail">Caldas: ${item.syrups.join(', ')}</div>` : ''}
      ${item.turbinados.length ? `<div class="cart-item-detail" style="color: var(--accent-gold); font-weight: 600;">Turbinado: ${item.turbinados.join(', ')}</div>` : ''}
      ${item.notes ? `<div class="cart-item-detail" style="color: var(--text-muted); font-style: italic;">Obs: "${item.notes}"</div>` : ''}

      <div class="cart-item-controls">
        <div class="qty-stepper" role="group" aria-label="Quantidade do item">
          <button type="button" class="btn-qty" onclick="changeItemQty(${index}, -1)" aria-label="Diminuir quantidade">&minus;</button>
          <span class="qty-number">${item.quantity}</span>
          <button type="button" class="btn-qty" onclick="changeItemQty(${index}, 1)" aria-label="Aumentar quantidade">&plus;</button>
        </div>
        <button type="button" class="btn-remove-item" onclick="removeItemFromCart(${index})" aria-label="Remover ${item.title}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          <span>Remover</span>
        </button>
      </div>
    </div>
  `).join("");
}

function changeItemQty(index, delta) {
  if (AppState.cart[index]) {
    AppState.cart[index].quantity += delta;
    if (AppState.cart[index].quantity <= 0) {
      AppState.cart.splice(index, 1);
    }
    saveCartToStorage();
    updateCartUI();
  }
}

function removeItemFromCart(index) {
  AppState.cart.splice(index, 1);
  saveCartToStorage();
  updateCartUI();
}

function openCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer && overlay) {
    drawer.classList.add("open");
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");
  if (drawer && overlay) {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// Finalização do Pedido e Envio para o WhatsApp Oficial
function finalizeWhatsAppOrder() {
  if (AppState.cart.length === 0) {
    alert("Seu carrinho está vazio! Adicione algum açaí antes de finalizar.");
    return;
  }

  const nameInput = document.getElementById("customerNameInput");
  const name = nameInput ? nameInput.value.trim() : "";
  if (!name) {
    alert("Por favor, informe seu nome para identificação do pedido.");
    if (nameInput) nameInput.focus();
    return;
  }

  const deliveryType = document.querySelector('input[name="deliveryOption"]:checked')?.value || "delivery";
  const addressInput = document.getElementById("customerAddressInput");
  const address = addressInput ? addressInput.value.trim() : "";

  if (deliveryType === "delivery" && !address) {
    alert("Por favor, digite seu endereço de entrega completo (Rua, Número, Bairro).");
    if (addressInput) addressInput.focus();
    return;
  }

  const paymentSelect = document.getElementById("customerPaymentSelect");
  const payment = paymentSelect ? paymentSelect.value : "Pix";

  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let deliveryFee = 0;
  if (deliveryType === "delivery") {
    deliveryFee = (subtotal >= STORE_CONFIG.freeDeliveryThreshold) ? 0 : STORE_CONFIG.deliveryFee;
  }
  const grandTotal = subtotal + deliveryFee;

  // Montar Mensagem Oficial de Pedido Formatada
  let msg = `🍧 *NOVO PEDIDO - ${STORE_CONFIG.name.toUpperCase()}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 *Cliente:* ${name}\n`;
  msg += `🛵 *Tipo:* ${deliveryType === "delivery" ? "Entrega Delivery" : "Retirada no Balcão"}\n`;
  if (deliveryType === "delivery") {
    msg += `📍 *Endereço:* ${address}\n`;
  }
  msg += `💳 *Pagamento:* ${payment}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n\n`;
  msg += `📦 *ITENS DO PEDIDO:*\n`;

  AppState.cart.forEach((item) => {
    msg += `\n*${item.quantity}x ${item.title}* - ${formatBRL(item.price * item.quantity)}\n`;
    if (item.base) msg += `   • Base: ${item.base}\n`;
    if (item.fruits.length) msg += `   • Frutas: ${item.fruits.join(', ')}\n`;
    if (item.toppings.length) msg += `   • Complementos: ${item.toppings.join(', ')}\n`;
    if (item.syrups.length) msg += `   • Calda: ${item.syrups.join(', ')}\n`;
    if (item.turbinados.length) msg += `   • Turbinado: ${item.turbinados.join(', ')}\n`;
    if (item.notes) msg += `   • Obs: _"${item.notes}"_\n`;
  });

  msg += `\n━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `Subtotal: ${formatBRL(subtotal)}\n`;
  if (deliveryType === "delivery") {
    msg += `Taxa de Entrega: ${deliveryFee === 0 ? "GRÁTIS" : formatBRL(deliveryFee)}\n`;
  }
  msg += `*TOTAL A PAGAR: ${formatBRL(grandTotal)}*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `_Obrigado pela preferência! Aguardo confirmação do tempo estimado._`;

  const encoded = encodeURIComponent(msg);
  const wppUrl = `https://wa.me/${STORE_CONFIG.whatsapp}?text=${encoded}`;

  window.open(wppUrl, "_blank");
}

// Armazenamento Local
function saveCartToStorage() {
  try {
    localStorage.setItem("acai_gourmet_cart", JSON.stringify(AppState.cart));
  } catch(e) {}
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("acai_gourmet_cart");
    if (saved) AppState.cart = JSON.parse(saved);
  } catch(e) {}
}

// Toast Feedback Notification com animação de barra
function showToast(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "app-toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <div class="toast-content">${message}</div>
    <div class="toast-progress"></div>
  `;
  toast.classList.add("show");
  
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// Listeners adicionais e acessibilidade de teclado
function setupEventListeners() {
  document.querySelectorAll('input[name="deliveryOption"]').forEach(r => {
    r.addEventListener("change", () => {
      const addressBox = document.getElementById("addressInputBox");
      if (addressBox) {
        addressBox.style.display = r.value === "delivery" ? "block" : "none";
      }
      updateCartUI();
    });
  });

  // Fechar drawer com tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCartDrawer();
    }
  });
}
