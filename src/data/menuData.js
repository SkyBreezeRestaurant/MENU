// frontend/src/data/menuData.js

// This data is derived from your backend/seed.js
// It represents the categories and items that the frontend will display.
// MongoDB IDs are replaced with simple string IDs for a static frontend.

const categories = [
  // Food Categories
  { _id: 'food-platters', name: 'PLATTERS TO START', type: 'Food' },
  { _id: 'food-salads', name: 'SALADS', type: 'Food' },
  { _id: 'food-soups', name: 'SOUPS', type: 'Food' },
  { _id: 'food-asian-bites', name: 'ASIAN BITES', type: 'Food' },
  { _id: 'food-opening-act', name: 'OPENING ACT', type: 'Food' },
  { _id: 'food-asian-delicacies', name: 'ASIAN DELICACIES', type: 'Food' },
  { _id: 'food-bao-bar', name: 'BAO BAR', type: 'Food' },
  { _id: 'food-pasta', name: 'PASTA', type: 'Food' },
  { _id: 'food-italian-delights', name: 'ITALIAN DELIGHTS', type: 'Food' },
  { _id: 'food-sushi-vegetarian', name: 'SUSHI VEGETARIAN', type: 'Food' },
  { _id: 'food-pizza', name: 'PIZZA', type: 'Food' },
  { _id: 'food-desserts', name: 'DESSERTS', type: 'Food' },
  { _id: 'food-dimsum', name: 'DIMSUM', type: 'Food' },

  // Drinks Categories
  { _id: 'drinks-signature', name: 'Signature Cocktails & Mocktails', type: 'Drinks' },
  { _id: 'drinks-beer', name: 'Beer & Breezers', type: 'Drinks' },
  { _id: 'drinks-tequila', name: 'Tequila', type: 'Drinks' },
  { _id: 'drinks-vodka', name: 'Vodka', type: 'Drinks' },
  { _id: 'drinks-gin', name: 'Gin', type: 'Drinks' },
  { _id: 'drinks-rum', name: 'Rum', type: 'Drinks' },
  { _id: 'drinks-single-malts', name: 'Single Malts', type: 'Drinks' },
  { _id: 'drinks-imported-whisky', name: 'Imported Whisky', type: 'Drinks' },
  { _id: 'drinks-premium-whisky', name: 'Premium Whisky', type: 'Drinks' },
  { _id: 'drinks-regular-whisky', name: 'Regular Whisky', type: 'Drinks' },
  { _id: 'drinks-shooters', name: 'Shooters', type: 'Drinks' },
  { _id: 'drinks-wines', name: 'Wines', type: 'Drinks' },
  { _id: 'drinks-sparkling', name: 'Sparkling/Champagne', type: 'Drinks' },
  { _id: 'drinks-liqueurs', name: 'Liqueurs', type: 'Drinks' },
  { _id: 'drinks-cocktails', name: 'Cocktails', type: 'Drinks' },
  { _id: 'drinks-mocktails-shakes', name: 'Mocktails & Shakes', type: 'Drinks' },
  { _id: 'drinks-non-alcoholic', name: 'Non-Alcoholic Beverages', type: 'Drinks' },
  { _id: 'drinks-coffee', name: 'Coffee', type: 'Drinks' },
];

// Helper to find category ID by name from the static categories list
const findCategoryIdByName = (name) => {
    const category = categories.find(cat => cat.name === name);
    return category ? category._id : null;
};

const items = [
  // --- Food Items ---
  // PLATTERS TO START
  {
    _id: 'item-food-1',
    name: "Desi Munch Platter (Signature)",
    description:
      "A curated mix of classic Indian munchies – murmura, peanuts, sev, masala chana – a street-style delight.",
    price: "₹599",
    category: findCategoryIdByName("PLATTERS TO START"),
  },
  {
    _id: 'item-food-2',
    name: "Fritter Feast Platter",
    description:
          "Paneer pakoras, corn fritters, onion rings, spicy potato bites, chili mushroom – served with 3 dips.",
    price: "₹699",
    category: findCategoryIdByName("PLATTERS TO START"),
  },
  {
    _id: 'item-food-3',
    name: "Middle East Mezze",
    description:
          "Hummus (6 flavors), pita, lavash, olives, pickled vegetables. Great for sharing.",
    price: "₹749",
    category: findCategoryIdByName("PLATTERS TO START"),
  },
  {
    _id: 'item-food-4',
    name: "Nacho Nation",
    description:
          "A light broth infused with coriander leaves, citrus zest, ginger, and seasonal greens.",
    price: "₹599",
    category: findCategoryIdByName("PLATTERS TO START"),
  },

  // SALADS
  {
    _id: 'item-food-5',
    name: "Winter Harvest Bowl",
    description:
          "Roasted pumpkin, quinoa, mixed greens, feta, cranberries, and maple-balsamic dressing.",
    price: "₹549",
    category: findCategoryIdByName("SALADS"),
  },
  {
    _id: 'item-food-6',
    name: "Mediterranean Garden Salad",
    description:
          "Crisp lettuce, cucumber, cherry tomatoes, olives, and feta tossed in a lemon herb vinaigrette.",
    price: "₹449",
    category: findCategoryIdByName("SALADS"),
  },
  {
    _id: 'item-food-7',
    name: "Classic Caesar",
    description:
          "Romaine lettuce, parmesan, herb croutons with creamy Caesar dressing. Add grilled panner/tofu - ₹75 extra",
    price: "₹449",
    category: findCategoryIdByName("SALADS"),
  },
  {
    _id: 'item-food-8',
    name: "Caprese Salad",
    description:
          "Fresh mozzarella, vine-ripened tomatoes, basil, cracked pepper, and balsamic glaze.",
    price: "₹499",
    category: findCategoryIdByName("SALADS"),
  },
  {
    _id: 'item-food-9',
    name: "Middle Eastern Tabouleh Bowl",
    description:
          "Parsley, mint, bulgur, tomatoes, cucumber, lemon, and olive oil. Refreshing and light.",
    price: "₹399",
    category: findCategoryIdByName("SALADS"),
  },
  {
    _id: 'item-food-10',
    name: "Protein Power Bowl",
    description:
          "Quinoa, roasted veggies, chickpeas, baby spinach, avocado, and tahini-yogurt dressing.",
    price: "₹579",
    category: findCategoryIdByName("SALADS"),
  },

  // SOUPS
  {
    _id: 'item-food-11',
    name: "Velouté de Broccoli Verde",
    description:
          "A creamy Mediterranean-style broccoli blend finished with olive oil, garlic, and herbed breadcrumbs.",
    price: "₹449",
    category: findCategoryIdByName("SOUPS"),
  },
  {
    _id: 'item-food-12',
    name: "Cappuccino di Fungi (Signature)",
    description:
          "Aromatic mushroom soup topped with truffle-pepper foam and a touch of garlic essence.",
    price: "₹499",
    category: findCategoryIdByName("SOUPS"),
  },
  {
    _id: 'item-food-13',
    name: "Zuppa Rustica al Pomodoro",
    description:
          "Rustic Italian tomato broth simmered with zucchini, carrots, celery, and Tuscan herbs.",
    price: "₹449",
    category: findCategoryIdByName("SOUPS"),
  },
  {
    _id: 'item-food-14',
    name: "Lemon Coriander Elixir",
    description:
          "A light broth infused with coriander leaves, citrus zest, ginger, and seasonal greens.",
    price: "₹399",
    category: findCategoryIdByName("SOUPS"),
  },
  {
    _id: 'item-food-15',
    name: "Tom Yum Essence",
    description:
          "A bold Thai-style spicy and sour soup with galangal, lemongrass, mushrooms, chili, and tofu.",
    price: "₹499",
    category: findCategoryIdByName("SOUPS"),
  },
  {
    _id: 'item-food-16',
    name: "Lemongrass Ginger Infusion",
    description:
          "Refreshing Thai broth made with lemongrass, ginger, tofu, cherry tomatoes, and fresh cilantro.",
    price: "₹449",
    category: findCategoryIdByName("SOUPS"),
  },
  {
    _id: 'item-food-17',
    name: "Manchow Broth",
    description:
          "Northeast-origin soy-based broth loaded with chopped vegetables, garlic, and crispy noodles.",
    price: "₹399",
    category: findCategoryIdByName("SOUPS"),
  },

  // ASIAN BITES
  {
    _id: 'item-food-18',
    name: "Firecracker Potatoes (Signature)",
    description:
          "Crispy potato wedges tossed in a sticky-sweet spicy honey-chili glaze.",
    price: "₹499",
    category: findCategoryIdByName("ASIAN BITES"),
  },
  {
    _id: 'item-food-19',
    name: "Volcano Mushrooms",
    description:
          "Juicy mushrooms in hot garlic soy, onions, scallions, and pepper.",
    price: "₹499",
    category: findCategoryIdByName("ASIAN BITES"),
  },
  {
    _id: 'item-food-20',
    name: "Dragon Bites",
    description:
          "Schezwan-fried vegetable balls with garlic-chili sauce – bold and addictive.",
    price: "₹499",
    category: findCategoryIdByName("ASIAN BITES"),
  },
  {
    _id: 'item-food-21',
    name: "Mongolian Glaze Paneer",
    description: "Paneer tossed in a sweet-savory Mongolian-style glaze.",
    price: "₹549",
    category: findCategoryIdByName("ASIAN BITES"),
  },
  {
    _id: 'item-food-22',
    name: "Crunch Street Toss",
    description: "Tempura vegetables in house chili-soy sauce.",
    price: "₹449",
    category: findCategoryIdByName("ASIAN BITES"),
  },
  {
    _id: 'item-food-23',
    name: "Paneer Heatwave",
    description: "Fiery wok-tossed paneer with onions and bell peppers.",
    price: "₹549",
    category: findCategoryIdByName("ASIAN BITES"),
  },
  {
    _id: 'item-food-24',
    name: "Classic Manchurian",
    description:
          "Crispy veg balls in dry-style soy garlic Manchurian sauce.",
    price: "₹499",
    category: findCategoryIdByName("ASIAN BITES"),
  },
  {
    _id: 'item-food-25',
    name: "Chilli Coriander Paneer",
    description:
          "Paneer sautéed in garlic-chili oil with a coriander kick.",
    price: "₹549",
    category: findCategoryIdByName("ASIAN BITES"),
  },
  {
    _id: 'item-food-26',
    name: "Lotus Stem Glaze",
    description: "Crispy lotus stems tossed in tangy-sweet chili sauce.",
    price: "₹529",
    category: findCategoryIdByName("ASIAN BITES"),
  },
  {
    _id: 'item-food-27',
    name: "Zaatar Veggie Wrap",
    description:
          "Grilled veggies with zaatar, hummus, and olive oil in lavash.",
    price: "₹449",
    category: findCategoryIdByName("ASIAN BITES"),
  },
  {
    _id: 'item-food-28',
    name: "Falafel Pita Pocket",
    description:
          "Chickpea falafel with tahini, lettuce, tomato, and garlic mayo in pita bread.",
    price: "₹499",
    category: findCategoryIdByName("ASIAN BITES"),
  },

  // ASIAN DELICACIES
  {
    _id: 'item-food-29',
    name: "Sticky Teriyaki Bowl",
    description:
          "Teriyaki-glazed vegetables over jasmine rice with sesame and scallions.",
    price: "₹699",
    category: findCategoryIdByName("ASIAN DELICACIES"),
  },
  {
    _id: 'item-food-30',
    name: "Korean Hot Plate",
    description:
          "Sizzling gochujang veggies, sesame rice, kimchi, and soy glaze.",
    price: "₹799",
    category: findCategoryIdByName("ASIAN DELICACIES"),
  },
  {
    _id: 'item-food-31',
    name: "Thai Basil Curry Bowl",
    description:
          "Bold basil coconut curry with vegetables, served with steamed rice.",
    price: "₹699",
    category: findCategoryIdByName("ASIAN DELICACIES"),
  },
  {
    _id: 'item-food-32',
    name: "Bangkok Street Curry",
    description:
          "Thai red curry vegetables served with fragrant sticky rice.",
    price: "₹699",
    category: findCategoryIdByName("ASIAN DELICACIES"),
  },
  {
    _id: 'item-food-33',
    name: "Bibimbap Bowl",
    description:
          "Korean rice bowl with sautéed greens, mushrooms, gochujang, and a soy drizzle.",
    price: "₹799",
    category: findCategoryIdByName("ASIAN DELICACIES"),
  },
  {
    _id: 'item-food-34',
    name: "Sambal Rice Bowl",
    description:
          "Spicy sambal tossed veggies and fried rice topped with a sunny side-up egg (optional).",
    price: "₹749",
    category: findCategoryIdByName("ASIAN DELICACIES"),
  },

  // BAO BAR
  {
    _id: 'item-food-35',
    name: "Korean BBQ Mushroom Bao",
    description:
          "Fluffy bao stuffed with gochujang-glazed mushrooms, kimchi slaw, and scallion oil.",
    price: "₹499",
    category: findCategoryIdByName("BAO BAR"),
  },
  {
    _id: 'item-food-36',
    name: "Teriyaki Paneer Bao",
    description:
          "Grilled paneer in teriyaki sauce with lettuce, cucumber, and sriracha mayo.",
    price: "₹499",
    category: findCategoryIdByName("BAO BAR"),
  },
  {
    _id: 'item-food-37',
    name: "Crispy Chilli Tofu Bao",
    description:
          "Crispy tofu tossed in sweet chili glaze with pickled veggies and sesame.",
    price: "₹499",
    category: findCategoryIdByName("BAO BAR"),
  },
  {
    _id: 'item-food-38',
    name: "Falafel Harissa Bao",
    description:
          "Middle Eastern falafel in fluffy bao with harissa mayo and crunchy greens.",
    price: "₹499",
    category: findCategoryIdByName("BAO BAR"),
  },
  {
    _id: 'item-food-39',
    name: "Veg Tempura Bao",
    description:
          "Tempura vegetables in spicy mayo, lettuce, and house chili glaze.",
    price: "₹499",
    category: findCategoryIdByName("BAO BAR"),
  },

  // PASTA
  {
    _id: 'item-food-40',
    name: "Truffle Alfredo Fettuccine",
    description:
          "Creamy truffle-infused alfredo with mushrooms, parmesan, and herbs.",
    price: "₹799",
    category: findCategoryIdByName("PASTA"),
  },
  {
    _id: 'item-food-41',
    name: "Pink Sauce Penne (Signature)",
    description:
          "Fusion of arrabbiata and alfredo sauces with olives, veggies, and parmesan.",
    price: "₹749",
    category: findCategoryIdByName("PASTA"),
  },
  {
    _id: 'item-food-42',
    name: "Spaghetti Aglio e Olio",
    description:
          "Classic olive oil, garlic, chili flakes, and parsley. Light and bold.",
    price: "₹599",
    category: findCategoryIdByName("PASTA"),
  },
  {
    _id: 'item-food-43',
    name: "Pesto Primavera Penne",
    description:
          "Fresh basil pesto tossed with seasonal vegetables and parmesan.",
    price: "₹699",
    category: findCategoryIdByName("PASTA"),
  },
  {
    _id: 'item-food-44',
    name: "Spicy Arrabiata Fusilli",
    description:
          "Robust tomato chili sauce with garlic, olives, and herbs.",
    price: "₹649",
    category: findCategoryIdByName("PASTA"),
  },
  {
    _id: 'item-food-45',
    name: "Mac & Cheese Bake",
    description: "Cheesy baked pasta topped with crispy herb crust.",
    price: "₹699",
    category: findCategoryIdByName("PASTA"),
  },

  // ITALIAN DELIGHTS
  {
    _id: 'item-food-46',
    name: "Napoli Bruschetta",
    description:
          "Crispy sourdough topped with marinated cherry tomatoes, basil, and aged balsamic.",
    price: "₹499",
    category: findCategoryIdByName("ITALIAN DELIGHTS"),
  },
  {
    _id: 'item-food-47',
    name: "Truffle Mushroom Crostini",
    description:
          "Creamy truffle mushrooms on toasted baguette with garlic and herbs.",
    price: "₹499",
    category: findCategoryIdByName("ITALIAN DELIGHTS"),
  },
  {
    _id: 'item-food-48',
    name: "Melanzane Fritte",
    description: "Crispy eggplant fries served with a garlic aioli.",
    price: "₹449",
    category: findCategoryIdByName("ITALIAN DELIGHTS"),
  },
  {
    _id: 'item-food-49',
    name: "Caprese Flatbread",
    description:
          "Thin crust flatbread with mozzarella, tomatoes, pesto drizzle, and microgreens.",
    price: "₹599",
    category: findCategoryIdByName("ITALIAN DELIGHTS"),
  },
  {
    _id: 'item-food-50',
    name: "Arancini Balls (Signature)",
    description:
          "Risotto cheese balls with Italian herbs, deep-fried and served with arrabbiata dip.",
    price: "₹599",
    category: findCategoryIdByName("ITALIAN DELIGHTS"),
  },
  {
    _id: 'item-food-51',
    name: "Pesto Parm Bites",
    description:
          "Basil pesto and parmesan stuffed mini bites served golden and hot.",
    price: "₹499",
    category: findCategoryIdByName("ITALIAN DELIGHTS"),
  },

  // SUSHI VEGETARIAN
  {
    _id: 'item-food-52',
    name: "Avocado Cream Cheese Maki",
    description:
          "Creamy and smooth – rolled with nori, sushi rice, and sesame.",
    price: "₹799",
    category: findCategoryIdByName("SUSHI VEGETARIAN"),
  },
  {
    _id: 'item-food-53',
    name: "Tempura Veggie Roll",
    description:
          "Crispy vegetable tempura inside-out roll with spicy mago drizzle.",
    price: "₹749",
    category: findCategoryIdByName("SUSHI VEGETARIAN"),
  },
  {
    _id: 'item-food-54',
    name: "Sweet Chilli Tofu Roll",
    description: "Tofu, cucumber, and lettuce with sweet chili glaze.",
    price: "₹749",
    category: findCategoryIdByName("SUSHI VEGETARIAN"),
  },
  {
    _id: 'item-food-55',
    name: "Korean Kimchi Maki",
    description: "Kimchi, greens, and gochujang mayo – punchy and bold.",
    price: "₹699",
    category: findCategoryIdByName("SUSHI VEGETARIAN"),
  },

  // PIZZA
  {
    _id: 'item-food-56',
    name: "Margherita Reimagined",
    description: "Tomato base, buffalo mozzarella, basil, and olive oil.",
    price: "₹699",
    category: findCategoryIdByName("PIZZA"),
  },
  {
    _id: 'item-food-57',
    name: "Pesto Garden Pizza",
    description:
          "Pesto sauce, grilled vegetables, mozzarella, and herbed crumbs.",
    price: "₹749",
    category: findCategoryIdByName("PIZZA"),
  },
  {
    _id: 'item-food-58',
    name: "Spicy Paneer Tandoor Pizza",
    description:
          "Desi twist with spiced paneer, onions, capsicum, and green chili drizzle.",
    price: "₹799",
    category: findCategoryIdByName("PIZZA"),
  },
  {
    _id: 'item-food-59',
    name: "Mushroom Truffle Pizza",
    description:
          "Creamy truffle sauce, mushrooms, parmesan, and microgreens.",
    price: "₹849",
    category: findCategoryIdByName("PIZZA"),
  },
  {
    _id: 'item-food-60',
    name: "Zaatar Veggie Pizza",
    description:
          "Middle Eastern-spiced veggies, hummus base, and feta crumble.",
    price: "₹749",
    category: findCategoryIdByName("PIZZA"),
  },

  // DESSERTS
  {
    _id: 'item-food-61',
    name: "Molten Choco Bomb (Signature)",
    description:
          "Chocolate lava cake with hot fudge and vanilla ice cream.",
    price: "₹499",
    category: findCategoryIdByName("DESSERTS"),
  },
  {
    _id: 'item-food-62',
    name: "Saffron Rose Cheesecake",
    description:
          "Fusion baked cheesecake with rose petal jelly and saffron notes.",
    price: "₹549",
    category: findCategoryIdByName("DESSERTS"),
  },
  {
    _id: 'item-food-63',
    name: "Matcha White Chocolate Mousse",
    description:
          "Delicate matcha mousse with white chocolate ganache and sesame crisp.",
    price: "₹499",
    category: findCategoryIdByName("DESSERTS"),
  },
  {
    _id: 'item-food-64',
    name: "Nutella Bao Bombs",
    description:
          "Mini bao buns stuffed with gooey Nutella, fried and dusted with sugar.",
    price: "₹449",
    category: findCategoryIdByName("DESSERTS"),
  },
  {
    _id: 'item-food-65',
    name: "Classic Tiramisu",
    description:
          "Layered espresso-soaked sponge with mascarpone cream and cocoa.",
    price: "₹599",
    category: findCategoryIdByName("DESSERTS"),
  },
  {
    _id: 'item-food-66',
    name: "Biscoff Bliss Tart",
    description:
          "Buttery tart filled with lotus biscoff mousse and biscuit crumble.",
    price: "₹549",
    category: findCategoryIdByName("DESSERTS"),
  },

  // DIMSUM
  {
    _id: 'item-food-67',
    name: "Edamame Truffle Dumplings",
    description:
          "Silky wrappers filled with edamame and truffle. Delicate and aromatic.",
    price: "₹699",
    category: findCategoryIdByName("DIMSUM"),
  },
  {
    _id: 'item-food-68',
    name: "Crystal Veg Dumplings",
    description:
          "Translucent parcels stuffed with mixed Asian vegetables and tofu.",
    price: "₹649",
    category: findCategoryIdByName("DIMSUM"),
  },
  {
    _id: 'item-food-69',
    name: "Spinach & Corn Dumplings",
    description: "Comforting combo with ginger-chili zing.",
    price: "₹649",
    category: findCategoryIdByName("DIMSUM"),
  },
  {
    _id: 'item-food-70',
    name: "Chilli Cheese Momos",
    description:
          "Street-style dumplings pan-tossed in spicy Indo-Chinese sauce.",
    price: "₹599",
    category: findCategoryIdByName("DIMSUM"),
  },

  //OPENING ACT
  {
    _id: 'item-food-71',
    name: "Peri Peri Fritters (Signature)",
    description:
          "Fiery peri-peri spiced fries turned into crispy fritters with cheese drizzle.",
    price: "₹499",
    category: findCategoryIdByName("OPENING ACT"),
  },
  {
    _id: 'item-food-72',
    name: "OG Street Fries",
    description:
          "Double-fried masala fries dusted with our signature spice blend.",
    price: "₹399",
    category: findCategoryIdByName("OPENING ACT"),
  },
  {
    _id: 'item-food-73',
    name: "Masala Thunder Sticks",
    description: "Chatpata spiced fries in a crispy batter.",
    price: "₹449",
    category: findCategoryIdByName("OPENING ACT"),
  },
  {
    _id: 'item-food-74',
    name: "Cheesy Jalapeño Zingers",
    description:
          "JGolden jalapeño cheese bombs – crispy outside, molten inside.",
    price: "₹499",
    category: findCategoryIdByName("OPENING ACT"),
  },
  {
    _id: 'item-food-75',
    name: "Zaatar Toasties",
    description:
          "Toasted mini fritters infused with zaatar spice and cheese.",
    price: "₹449",
    category: findCategoryIdByName("OPENING ACT"),
  },
  {
    _id: 'item-food-76',
    name: "Cheddar Herb Fritters",
    description: "Leek, cheddar, and herb croquettes - elegant and creamy.",
    price: "₹499",
    category: findCategoryIdByName("OPENING ACT"),
  },
  {
    _id: 'item-food-77',
    name: "Ravioli Rockpops (Signature)",
    description: "Fried ravioli bites filled with creamy fusion flavors.",
    price: "₹549",
    category: findCategoryIdByName("OPENING ACT"),
  },
  {
    _id: 'item-food-78',
    name: "Corn Bombs",
    description: "Corn and cheese-filled crispers with a masala edge.",
    price: "₹499",
    category: findCategoryIdByName("OPENING ACT"),
  },
  {
    _id: 'item-food-79',
    name: "Spinach Pockets",
    description: "Spinach-cheese fritters bursting with flavor.",
    price: "₹499",
    category: findCategoryIdByName("OPENING ACT"),
  },
  {
    _id: 'item-food-80',
    name: "Broccoli Melt Bites",
    description: "Broccoli-cheddar stuffed fritters with a golden crust.",
    price: "₹499",
    category: findCategoryIdByName("OPENING ACT"),
  },
  {
    _id: 'item-food-81',
    name: "Donut Masala Munch (Signature)",
    description:
          "Savory potato-paneer fritter shaped like a donut, stuffed with masala goodness.",
    price: "₹549",
    category: findCategoryIdByName("OPENING ACT"),
  },

  // --- Drinks Items ---
  // Signature Cocktails & Mocktails
  {
    _id: 'item-drinks-1',
    name: "Citrus Head ",
    description:
          "A citrusy refresher with orange juice, guzu puree, kaffir lime and coconut water foam. Garnished with burnt orange wedge.",
    price: "₹399",
    category: findCategoryIdByName("Signature Cocktails & Mocktails"),
  },
  {
    _id: 'item-drinks-2',
    name: "The Sky Spritz ",
    description:
          "Apple juice, elderflower, cucumber, basil, and ginger ale. Served with cucumber ribbon in a wine glass.",
    price: "₹399",
    category: findCategoryIdByName("Signature Cocktails & Mocktails"),
  },
  {
    _id: 'item-drinks-3',
    name: "What's in the Sky? ",
    description:
          "Mint syrup, lime juice, apple & blue pea tea with edible glitter. Served in a candle-shaped glass.",
    price: "₹399",
    category: findCategoryIdByName("Signature Cocktails & Mocktails"),
  },
  {
    _id: 'item-drinks-4',
    name: "The Breeze Punch ",
    description:
          "Cranberry, strawberry puree, mint, lime & soda topped with candy floss and edible butterfly.",
    price: "₹399",
    category: findCategoryIdByName("Signature Cocktails & Mocktails"),
  },
  {
    _id: 'item-drinks-5',
    name: "The Custard Bliss ",
    description:
          "Coffee, caramel syrup, and banana foam, topped with sugar caramelized at the table.",
    price: "₹399",
    category: findCategoryIdByName("Signature Cocktails & Mocktails"),
  },
  {
    _id: 'item-drinks-6',
    name: "The Affogato Martini ",
    description:
          "Vodka, tiramisu syrup, coffee, and vanilla ice cream. Garnished with golden warp.",
    price: "₹549",
    category: findCategoryIdByName("Signature Cocktails & Mocktails"),
  },
  {
    _id: 'item-drinks-7',
    name: "Bubbly Girl ",
    description:
          "Gin, passionfruit, vanilla syrup, lime juice topped with Darjeeling Tea Air.",
    price: "₹549",
    category: findCategoryIdByName("Signature Cocktails & Mocktails"),
  },
  {
    _id: 'item-drinks-8',
    name: "Upside Down ",
    description:
          "A tropical rum-based drink with pineapple, blue curacao, ginger & hibiscus gin. Served in a smoky dome.",
    price: "₹549",
    category: findCategoryIdByName("Signature Cocktails & Mocktails"),
  },
  {
    _id: 'item-drinks-9',
    name: "Jamun Picante ",
    description:
          "Spicy tequila drink with jamun pulp, coriander, jalapeño & lime. Served with tajin salt rim.",
    price: "₹549",
    category: findCategoryIdByName("Signature Cocktails & Mocktails"),
  },
  {
    _id: 'item-drinks-10',
    name: "Pop-Up ",
    description:
          "A bold mix of Bourbon, real apple juice, popcorn syrup, lime, salt & Tabasco. Served on a black slate with popcorn.",
    price: "₹549",
    category: findCategoryIdByName("Signature Cocktails & Mocktails"),
  },

  // Beer & Breezers (Price format: Pint / Bucket)
  {
    _id: 'item-drinks-11',
    name: "Corona",
    price: "(Pint) ₹549 / ₹2,649 (Bucket)",
    category: findCategoryIdByName("Beer & Breezers"),
  },
  {
    _id: 'item-drinks-12',
    name: "Hoegaarden",
    price: "(Pint) ₹549 / ₹,2649 (Bucket)",
    category: findCategoryIdByName("Beer & Breezers"),
  },
  {
    _id: 'item-drinks-13',
    name: "Bira White",
    price: "(Pint) ₹399 / ₹1,799 (Bucket)",
    category: findCategoryIdByName("Beer & Breezers"),
  },
  {
    _id: 'item-drinks-14',
    name: "Budweiser",
    price: "(Pint) ₹399 / ₹1,799 (Bucket)",
    category: findCategoryIdByName("Beer & Breezers"),
  },
  {
    _id: 'item-drinks-15',
    name: "Budweiser Magnum",
    price: "(Pint) ₹449 / ₹2,349 (Bucket)",
    category: findCategoryIdByName("Beer & Breezers"),
  },
  {
    _id: 'item-drinks-16',
    name: "Kingfisher Ultra",
    price: "(Pint) ₹449 / ₹2,349 (Bucket)",
    category: findCategoryIdByName("Beer & Breezers"),
  },
  {
    _id: 'item-drinks-17',
    name: "Kingfisher Premium",
    price: "(Pint) ₹339 / ₹1,799 (Bucket)",
    category: findCategoryIdByName("Beer & Breezers"),
  },
  {
    _id: 'item-drinks-18',
    name: "Breezer - Jamaican/Cranberry",
    price: "(Pint) ₹399 / ₹1,799 (Bucket)",
    category: findCategoryIdByName("Beer & Breezers"),
  },

  // Tequila (Price format: 30ml / BOTTLE)
  {
    _id: 'item-drinks-19',
    name: "Patron Cafe",
    price: "(30ml) ₹699 / ₹16,077 (BOTTLE)",
    category: findCategoryIdByName("Tequila"),
  },
  {
    _id: 'item-drinks-20',
    name: "Jose Cuervo Gold",
    price: "(30ml) ₹519 / ₹11,937 (BOTTLE)",
    category: findCategoryIdByName("Tequila"),
  },
  {
    _id: 'item-drinks-21',
    name: "Jose Cuervo Silver",
    price: "(30ml) ₹449 / ₹10,327 (BOTTLE)",
    category: findCategoryIdByName("Tequila"),
  },
  {
    _id: 'item-drinks-22',
    name: "Camino Silver",
    price: "(30ml) ₹399 / ₹9,177 (BOTTLE)",
    category: findCategoryIdByName("Tequila"),
  },

  // Vodka (Price format: 30ml / BOTTLE)
  {
    _id: 'item-drinks-23',
    name: "Grey Goose",
    price: "(30ml) ₹579 / ₹13,317 (BOTTLE)",
    category: findCategoryIdByName("Vodka"),
  },
  {
    _id: 'item-drinks-24',
    name: "Ciroc",
    price: "(30ml) ₹579 / ₹13,317 (BOTTLE)",
    category: findCategoryIdByName("Vodka"),
  },
  {
    _id: 'item-drinks-25',
    name: "Ketel One",
    price: "(30ml) ₹379 / ₹8,717 (BOTTLE)",
    category: findCategoryIdByName("Vodka"),
  },
  {
    _id: 'item-drinks-26',
    name: "Absolut",
    price: "(30ml) ₹379 / ₹8,717 (BOTTLE)",
    category: findCategoryIdByName("Vodka"),
  },
  {
    _id: 'item-drinks-27',
    name: "Smirnoff Red",
    price: "(30ml) ₹299 / ₹6,877 (BOTTLE)",
    category: findCategoryIdByName("Vodka"),
  },

  // Gin (Price format: 30ml / BOTTLE)
  {
    _id: 'item-drinks-28',
    name: "Hendricks",
    price: "(30ml) ₹569 / ₹13,087 (BOTTLE)",
    category: findCategoryIdByName("Gin"),
  },
  {
    _id: 'item-drinks-29',
    name: "Tanqueray",
    price: "(30ml) ₹449 / ₹10,327 (BOTTLE)",
    category: findCategoryIdByName("Gin"),
  },
  {
    _id: 'item-drinks-30',
    name: "Bombay Sapphire",
    price: "(30ml) ₹449 / ₹10,327 (BOTTLE)",
    category: findCategoryIdByName("Gin"),
  },
  {
    _id: 'item-drinks-31',
    name: "Greater Than",
    price: "(30ml) ₹349 / ₹8,027 (BOTTLE)",
    category: findCategoryIdByName("Gin"),
  },
  {
    _id: 'item-drinks-32',
    name: "Gordon's",
    price: "(30ml) ₹319 / ₹7,337 (BOTTLE)",
    category: findCategoryIdByName("Gin"),
  },

  // Rum (Price format: 30ml / BOTTLE)
  {
    _id: 'item-drinks-33',
    name: "Bacardi Limon",
    price: "(30ml) ₹299 / ₹6,877 (BOTTLE)",
    category: findCategoryIdByName("Rum"),
  },
  {
    _id: 'item-drinks-34',
    name: "Bacardi Carta Blanca",
    price: "(30ml) ₹299 / ₹6,877 (BOTTLE)",
    category: findCategoryIdByName("Rum"),
  },
  {
    _id: 'item-drinks-35',
    name: "Captain Morgan",
    price: "(30ml) ₹199 / ₹4,577 (BOTTLE)",
    category: findCategoryIdByName("Rum"),
  },
  {
    _id: 'item-drinks-36',
    name: "Old Monk",
    price: "(30ml) ₹159 / ₹3,657 (BOTTLE)",
    category: findCategoryIdByName("Rum"),
  },

  // Single Malts (Price format: 30ml / BOTTLE)
  {
    _id: 'item-drinks-37',
    name: "Talisker",
    price: "(30ml) ₹749 / ₹17,227 (BOTTLE)",
    category: findCategoryIdByName("Single Malts"),
  },
  {
    _id: 'item-drinks-38',
    name: "Glenlivet 12 YO",
    price: "(30ml) ₹669 / ₹15,387 (BOTTLE)",
    category: findCategoryIdByName("Single Malts"),
  },
  {
    _id: 'item-drinks-39',
    name: "Glenfiddich 12 YO",
    price: "(30ml) ₹719 / ₹16,537 (BOTTLE)",
    category: findCategoryIdByName("Single Malts"),
  },
  {
    _id: 'item-drinks-40',
    name: "Monkey Shoulder",
    price: "(30ml) ₹629 / ₹14,467 (BOTTLE)",
    category: findCategoryIdByName("Single Malts"),
  },

  // Imported Whisky (Price format: 30ml / BOTTLE)
  {
    _id: 'item-drinks-41',
    name: "Gold Label Reserve",
    price: "(30ml) ₹1,229 / ₹28,267 (BOTTLE)",
    category: findCategoryIdByName("Imported Whisky"),
  },
  {
    _id: 'item-drinks-42',
    name: "Double Black",
    price: "(30ml) ₹839 / ₹19,297 (BOTTLE)",
    category: findCategoryIdByName("Imported Whisky"),
  },
  {
    _id: 'item-drinks-43',
    name: "Chivas Regal 12",
    price: "(30ml) ₹619 / ₹14,237 (BOTTLE)",
    category: findCategoryIdByName("Imported Whisky"),
  },
  {
    _id: 'item-drinks-44',
    name: "Black Label",
    price: "(30ml) ₹619 / ₹14,237 (BOTTLE)",
    category: findCategoryIdByName("Imported Whisky"),
  },
  {
    _id: 'item-drinks-45',
    name: "Jack Daniel's",
    price: "(30ml) ₹519 / ₹11,937 (BOTTLE)",
    category: findCategoryIdByName("Imported Whisky"),
  },
  {
    _id: 'item-drinks-46',
    name: "Jim Beam",
    price: "(30ml) ₹449 / ₹10,327 (BOTTLE)",
    category: findCategoryIdByName("Imported Whisky"),
  },
  {
    _id: 'item-drinks-47',
    name: "Jameson",
    price: "(30ml) ₹449 / ₹10,327 (BOTTLE)",
    category: findCategoryIdByName("Imported Whisky"),
  },

  // Premium Whisky (Price format: 30ml / BOTTLE)
  {
    _id: 'item-drinks-48',
    name: "Black Dog Triple Gold",
    price: "(30ml) ₹449 / ₹10,327 (BOTTLE)",
    category: findCategoryIdByName("Premium Whisky"),
  },
  {
    _id: 'item-drinks-49',
    name: "Teachers Highland Cream",
    price: "(30ml) ₹399 / ₹9,177 (BOTTLE)",
    category: findCategoryIdByName("Premium Whisky"),
  },
  {
    _id: 'item-drinks-50',
    name: "Black & White",
    price: "(30ml) ₹399 / ₹9,177 (BOTTLE)",
    category: findCategoryIdByName("Premium Whisky"),
  },
  {
    _id: 'item-drinks-51',
    name: "Black Dog Black Reserve",
    price: "(30ml) ₹429 / ₹9,867 (BOTTLE)",
    category: findCategoryIdByName("Premium Whisky"),
  },
  {
    _id: 'item-drinks-52',
    name: "Ballantine's Finest",
    price: "(30ml) ₹399 / ₹9,177 (BOTTLE)",
    category: findCategoryIdByName("Premium Whisky"),
  },

  // Regular Whisky (Price format: 30ml / BOTTLE)
  {
    _id: 'item-drinks-53',
    name: "Antiquity Blue",
    price: "(30ml) ₹299 / ₹6,877 (BOTTLE)",
    category: findCategoryIdByName("Regular Whisky"),
  },
  {
    _id: 'item-drinks-54',
    name: "Blenders Pride",
    price: "(30ml) ₹269 / ₹6,187 (BOTTLE)",
    category: findCategoryIdByName("Regular Whisky"),
  },
  {
    _id: 'item-drinks-55',
    name: "Oaksmith Gold",
    price: "(30ml) ₹259 / ₹5,957 (BOTTLE)",
    category: findCategoryIdByName("Regular Whisky"),
  },

  // Shooters (Price format: Price / Shot of 5)
  {
    _id: 'item-drinks-56',
    name: "Woo Woo",
    price: "₹649 / ₹2,920.50 (Shot of 5)",
    category: findCategoryIdByName("Shooters"),
  },
  {
    _id: 'item-drinks-57',
    name: "Sky Breeze Bite",
    price: "₹649 / ₹2,920.50 (Shot of 5)",
    category: findCategoryIdByName("Shooters"),
  },
  {
    _id: 'item-drinks-58',
    name: "Iguana",
    price: "₹649 / ₹2,920.50 (Shot of 5)",
    category: findCategoryIdByName("Shooters"),
  },
  {
    _id: 'item-drinks-59',
    name: "Flaming Cocaine",
    price: "₹779 / ₹3,505.50 (Shot of 5)",
    category: findCategoryIdByName("Shooters"),
  },
  {
    _id: 'item-drinks-60',
    name: "Blue Breeze",
    price: "₹779 / ₹3,505.50 (Shot of 5)",
    category: findCategoryIdByName("Shooters"),
  },
  {
    _id: 'item-drinks-61',
    name: "Jägerbomb",
    price: "₹849 / ₹3,820.50 (Shot of 5)",
    category: findCategoryIdByName("Shooters"),
  },

  // Wines (Price format: Glass / BOTTLE)
  {
    _id: 'item-drinks-62',
    name: "Jacob's Creek Red/White",
    price: "(Glass) ₹799 / ₹3,196 (BOTTLE)",
    category: findCategoryIdByName("Wines"),
  },
  {
    _id: 'item-drinks-63',
    name: "Fratelli Red/White",
    price: "(Glass) ₹665 / ₹2,660 (BOTTLE)",
    category: findCategoryIdByName("Wines"),
  },
  {
    _id: 'item-drinks-64',
    name: "Sula Red/White",
    price: "(Glass) ₹559 / ₹2,236 (BOTTLE)",
    category: findCategoryIdByName("Wines"),
  },

  // Sparkling/Champagne (Price format: BOTTLE)
  {
    _id: 'item-drinks-65',
    name: "Jacob's Creek Sparkling/Champagne",
    price: "₹9,099 (BOTTLE)",
    category: findCategoryIdByName("Sparkling/Champagne"),
  },
  {
    _id: 'item-drinks-66',
    name: "Fratelli Sparkling/Champagne",
    price: "₹9,099 (BOTTLE)",
    category: findCategoryIdByName("Sparkling/Champagne"),
  },
  {
    _id: 'item-drinks-67',
    name: "Sula Sparkling/Champagne",
    price: "₹3,639 (BOTTLE)",
    category: findCategoryIdByName("Sparkling/Champagne"),
  },

  // Liqueurs (Price format: Price / Shot of 5)
  {
    _id: 'item-drinks-68',
    name: "Jägermeister",
    price: "₹599 / ₹2,695.5 (Shot of 5)",
    category: findCategoryIdByName("Liqueurs"),
  },
  {
    _id: 'item-drinks-69',
    name: "Sambuca",
    price: "₹499 / ₹2,245.5 (Shot of 5)",
    category: findCategoryIdByName("Liqueurs"),
  },
  {
    _id: 'item-drinks-70',
    name: "Baileys",
    price: "₹349 / ₹1,570.5 (Shot of 5)",
    category: findCategoryIdByName("Liqueurs"),
  },
  {
    _id: 'item-drinks-71',
    name: "Kahlua",
    price: "₹349 / ₹1,570.5 (Shot of 5)",
    category: findCategoryIdByName("Liqueurs"),
  },

  // Cocktails (Price format: Price)
  {
    _id: 'item-drinks-72',
    name: "Bloody Mary",
    price: "₹649",
    category: findCategoryIdByName("Cocktails"),
  },
  { _id: 'item-drinks-73', name: "Caipiroska", price: "₹649", category: findCategoryIdByName("Cocktails") },
  { _id: 'item-drinks-74', name: "Sangria", price: "₹649", category: findCategoryIdByName("Cocktails") },
  { _id: 'item-drinks-75', name: "Margarita", price: "₹649", category: findCategoryIdByName("Cocktails") },
  { _id: 'item-drinks-76', name: "Martini", price: "₹649", category: findCategoryIdByName("Cocktails") },
  {
    _id: 'item-drinks-77',
    name: "Cosmopolitan",
    price: "₹649",
    category: findCategoryIdByName("Cocktails"),
  },
  { _id: 'item-drinks-78', name: "Daiquiri", price: "₹649", category: findCategoryIdByName("Cocktails") },

  // Mocktails & Shakes (Price format: Price)
  {
    _id: 'item-drinks-79',
    name: "C/C Mint Cooler",
    price: "₹429",
    category: findCategoryIdByName("Mocktails & Shakes"),
  },
  {
    _id: 'item-drinks-80',
    name: "Lemongrass Iced Tea",
    price: "₹439",
    category: findCategoryIdByName("Mocktails & Shakes"),
  },
  {
    _id: 'item-drinks-81',
    name: "Riki Tiki Tavi",
    price: "₹439",
    category: findCategoryIdByName("Mocktails & Shakes"),
  },
  {
    _id: 'item-drinks-82',
    name: "Let Me Go Som",
    price: "₹429",
    category: findCategoryIdByName("Mocktails & Shakes"),
  },
  {
    _id: 'item-drinks-83',
    name: "Watermelon Slush",
    price: "₹469",
    category: findCategoryIdByName("Mocktails & Shakes"),
  },
  {
    _id: 'item-drinks-84',
    name: "Oreo Shake",
    price: "₹699",
    category: findCategoryIdByName("Mocktails & Shakes"),
  },
  {
    _id: 'item-drinks-85',
    name: "Strawberry Shake",
    price: "₹699",
    category: findCategoryIdByName("Mocktails & Shakes"),
  },
  {
    _id: 'item-drinks-86',
    name: "Flavoured Shake",
    price: "₹519",
    category: findCategoryIdByName("Mocktails & Shakes"),
  },
  {
    _id: 'item-drinks-87',
    name: "Berry Punch",
    price: "₹519",
    category: findCategoryIdByName("Mocktails & Shakes"),
  },

  // Non-Alcoholic Beverages (Price format: Price)
  {
    _id: 'item-drinks-88',
    name: "Fresh Watermelon Juice",
    price: "₹259",
    category: findCategoryIdByName("Non-Alcoholic Beverages"),
  },
  {
    _id: 'item-drinks-89',
    name: "Red Bull",
    price: "₹369",
    category: findCategoryIdByName("Non-Alcoholic Beverages"),
  },
  {
    _id: 'item-drinks-90',
    name: "Tonic Water",
    price: "₹167",
    category: findCategoryIdByName("Non-Alcoholic Beverages"),
  },
  {
    _id: 'item-drinks-91',
    name: "Ginger Ale",
    price: "₹167",
    category: findCategoryIdByName("Non-Alcoholic Beverages"),
  },
  {
    _id: 'item-drinks-92',
    name: "Diet Coke",
    price: "₹169",
    category: findCategoryIdByName("Non-Alcoholic Beverages"),
  },
  {
    _id: 'item-drinks-93',
    name: "Canned Juice",
    price: "₹139",
    category: findCategoryIdByName("Non-Alcoholic Beverages"),
  },
  {
    _id: 'item-drinks-94',
    name: "Aerated Drinks",
    price: "₹129",
    category: findCategoryIdByName("Non-Alcoholic Beverages"),
  },
  {
    _id: 'item-drinks-95',
    name: "Fresh Lime Soda/Water",
    price: "₹129",
    category: findCategoryIdByName("Non-Alcoholic Beverages"),
  },
  {
    _id: 'item-drinks-96',
    name: "Mineral Water",
    price: "₹59",
    category: findCategoryIdByName("Non-Alcoholic Beverages"),
  },

  // Coffee (Price format: Price)
  { _id: 'item-drinks-97', name: "Coffee", price: "₹259", category: findCategoryIdByName("Coffee") },
  { _id: 'item-drinks-98', name: "Hot Tea", price: "₹189", category: findCategoryIdByName("Coffee") },
];

// Export the data
export { categories, items };