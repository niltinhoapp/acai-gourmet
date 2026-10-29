/**
 * Configurações Centralizadas da Loja - Açaí Tropical Gourmet
 * Personalize facilmente os dados do seu negócio aqui!
 */

const STORE_CONFIG = {
  name: "Açaí Tropical Gourmet",
  shortName: "Açaí Tropical",
  tagline: "O Açaí Mais Cremoso da Cidade • 100% Polpa Pura do Pará",
  description: "Açaí artesanal batido na hora, textura aveludada sem cristais de gelo e mais de 25 acompanhamentos premium.",
  
  // Contato e Delivery Oficial
  whatsapp: "5514996988997",
  whatsappFormatted: "(14) 99698-8997",
  instagram: "@vexawebb",
  instagramUrl: "https://instagram.com/vexawebb",
  
  // Localização e Operação
  address: "Asa Sul, Comércio Local • Brasília - DF",
  deliveryZone: "Entregas em até 8km de raio",
  operatingHours: "Todos os dias: 12h às 23h30",
  deliveryTime: "25 - 40 min",
  
  // Valores e Taxas
  deliveryFee: 5.00,
  freeDeliveryThreshold: 45.00,
  minOrderValue: 15.00,
  pixKey: "vexawebb@gmail.com",
  pixBeneficiary: "Vexa Açaí Gourmet",
  
  // Status da Loja
  isOpen: true,
  statusMessage: "● Aberto para Pedidos Agora",
  
  // Configurações do Personalizador (Monte do Seu Jeito)
  freeFruitsLimit: 2, // Até 2 frutas grátis no açaí montado
  freeToppingsLimit: 3, // Até 3 complementos secos grátis
  freeSyrupsLimit: 1, // 1 cobertura líquida grátis
  extraFruitPrice: 2.50,
  extraToppingPrice: 2.00,
  extraSyrupPrice: 2.00,

  // Vídeos Premium em Loop (Efeito GIF contínuo)
  videos: {
    heroLoop: "public/videos/hero-acai-loop.mp4",
    heroFull: "public/videos/hero-acai-smoothie.mp4"
  },

  // Centralização de Imagens (Nano Banana)
  images: {
    logo: "public/images/logo.svg",
    heroDesktop: "public/images/hero-acai-desktop.webp",
    heroMobile: "public/images/hero-acai-mobile.webp",
    acaiTradicional: "public/images/acai-tradicional.webp",
    acaiPremium: "public/images/acai-premium.webp",
    acaiGourmetChocolate: "public/images/acai-gourmet-chocolate.webp",
    bebidaAcai: "public/images/bebida-acai.webp",
    composicaoIngredientes: "public/images/composicao-ingredientes.webp",
    fundoTropical: "public/images/fundo-tropical.webp",
    bowlPersonalizador: "public/images/bowl-personalizador.webp",
    bannerRodape: "public/images/banner-rodape.webp",
    ingredientes: {
      morangos: "public/images/ingredientes/morangos.webp",
      banana: "public/images/ingredientes/banana.webp",
      granola: "public/images/ingredientes/granola.webp",
      chocolate: "public/images/ingredientes/chocolate.webp",
      leiteEmPo: "public/images/ingredientes/leite-em-po.webp",
      pacoca: "public/images/ingredientes/pacoca.webp"
    },
    fallbacks: {
      heroDesktop: "assets/img/hero-acai-bowl.jpg",
      heroMobile: "assets/img/hero-acai-bowl.jpg",
      acaiPremium: "assets/img/combo-ninho-nutella.jpg",
      acaiGourmetChocolate: "assets/img/acai-cup-layers.jpg",
      acaiTradicional: "assets/img/acai-casadinho.jpg",
      bowlPersonalizador: "assets/img/hero-acai-bowl.jpg",
      bebidaAcai: "assets/img/acai-cup-layers.jpg"
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = STORE_CONFIG;
}
