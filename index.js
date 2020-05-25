var app = new Vue({
  el: "#app",
  data: {
    product: "socks",
    image: "assets/socks.jpg",
    onSale: true,
    cart: 0,
    inStock: false,
    brand: "Vue Mastery",
    selectedVariant: 0,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage:
          "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
        variantQuantity: 10,
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage:
          "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
        variantQuantity: 0,
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    reviews: [],
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProductImage(variantImage) {
      this.image = variantImage;
    },
  },
});
