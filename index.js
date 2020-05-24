var app = new Vue({
  el: "#app",
  data: {
    onSale: true,
    brand: "Vue Mastery",
    selectedVariant: 0,
    image: "./assets/socks.jpg",
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
});
