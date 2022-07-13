require("../model/dataBase");
const CategoryModel = require("../model/Category");
const RecipeModel = require("../model/Recipe");

const data = [];

// homePage

const homePage = async (req, res) => {
  const latestRecipe = await RecipeModel.find().sort({ _id: -1 }).limit(5);

  const indian = await RecipeModel.find({ category: ["Indian"] }).limit(5);
  const american = await RecipeModel.find({ category: ["American"] }).limit(5);
  const thai = await RecipeModel.find({ category: ["Thai"] }).limit(5);

  const food = { indian, american, thai };

  const category = await CategoryModel.find().limit(5);

  res.render("index", { title: "Food-Recipes", category, latestRecipe, food });
};

// homePage ends

//-----------------------------------------

// categories page

const categories = async (req, res) => {
  const category = await CategoryModel.find().limit(50);

  res.render("categories", { title: "Food-Recipes Categories", category });
};

// categories page ends

async function insertDymayRecipeData() {
  try {
    await RecipeModel.insertMany([
      {
        name: "Christmas Pudding Trifle",
        description:
          "Peel the oranges using a sharp knife, ensuring all the pith is removed. Slice as thinly as possible and arrange over a dinner plate. Sprinkle with the demerara sugar followed by the Grand Marnier and set aside.\r\n\r\nCrumble the Christmas pudding into large pieces and scatter over the bottom of a trifle bowl. Lift the oranges onto the pudding in a layer and pour over any juices.\r\n\r\nBeat the mascarpone until smooth, then stir in the custard. Spoon the mixture over the top of the oranges.\r\n\r\nLightly whip the cream and spoon over the custard. Sprinkle with the flaked almonds and grated chocolate. You can make this a day in advance if you like, chill until ready to serve.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Orange",
          "Demerara Sugar",
          "Grand Marnier",
          "Christmas Pudding",
          "Custard",
          "Mascarpone",
        ],
        category: "American",
        image:
          "https://www.themealdb.com/images/media/meals/r33cud1576791081.jpg",
      },
      {
        name: "Bakewell tart",
        description:
          "To make the pastry, measure the flour into a bowl and rub in the butter with your fingertips until the mixture resembles fine breadcrumbs. Add the water, mixing to form a soft dough.\r\nRoll out the dough on a lightly floured work surface and use to line a 20cm/8in flan tin. Leave in the fridge to chill for 30 minutes.\r\nPreheat the oven to 200C/400F/Gas 6 (180C fan).\r\nLine the pastry case with foil and fill with baking beans. Bake blind for about 15 minutes, then remove the beans and foil and cook for a further five minutes to dry out the base.\r\nFor the filing, spread the base of the flan generously with raspberry jam.\r\nMelt the butter in a pan, take off the heat and then stir in the sugar. Add ground almonds, egg and almond extract. Pour into the flan tin and sprinkle over the flaked almonds.\r\nBake for about 35 minutes. If the almonds seem to be browning too quickly, cover the tart loosely with foil to prevent them burning.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "plain flour",
          "chilled butter",
          "cold water",
          "raspberry jam",
          "butter",
          "ground almonds",
        ],
        category: "American",
        image:
          "https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg",
      },
      {
        name: "Shrimp Chow Fun",
        description:
          "STEP 1 - SOAK THE RICE NOODLES\r\nSoak the rice noodles overnight untill they are soft\r\nSTEP 2 - BOIL THE RICE NOODLES\r\nBoil the noodles for 10-15 minutes and then rinse with cold water to stop the cooking process of the noodles.\r\nSTEP 3 -MARINATING THE SHRIMP\r\nIn a bowl add the shrimp, egg, 1 pinch of white pepper, 1 Teaspoon of sesame seed oil, 1 Tablespoon corn starch and 1 tablespoon of oil\r\nMix together well\r\nSTEP 4 - STIR FRY\r\nIn a wok add 2 Tablespoons of oil, shrimp and stir fry them until it is golden brown\r\nSet the shrimp aside\r\nAdd 1 Tablespoon of oil to the work and then add minced garlic, ginger and all of the vegetables.\r\nAdd the noodles to the wok\r\nNext add sherry cooking wine, oyster sauce, sugar, vinegar, sesame seed oil, 1 pinch white pepper, and soy sauce\r\nAdd back in the shrimp\r\nTo thicken the sauce, whisk together 1 Tablespoon of corn starch and 2 Tablespoon of water in a bowl and slowly add to your stir-fry until it's the right thickness.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Rice Stick Noodles",
          "Prawns",
          "Egg",
          "Pepper",
          "Sesame Seed Oil",
          "Cornstarch",
        ],
        category: "American",
        image: "https://www.themealdb.com/images/media/meals/1529445434.jpg",
      },
      {
        name: "Gigantes Plaki",
        description:
          "Soak the beans overnight in plenty of water. Drain, rinse, then place in a pan covered with water. Bring to the boil, reduce the heat, then simmer for approx 50 mins until slightly tender but not soft. Drain, then set aside.\r\n\r\nHeat oven to 180C/160C fan/gas 4. Heat the olive oil in a large frying pan, tip in the onion and garlic, then cook over a medium heat for 10 mins until softened but not browned. Add the tomato purée, cook for a further min, add remaining ingredients, then simmer for 2-3 mins. Season generously, then stir in the beans. Tip into a large ovenproof dish, then bake for approximately 1 hr, uncovered and without stirring, until the beans are tender. The beans will absorb all the fabulous flavours and the sauce will thicken. Allow to cool, then scatter with parsley and drizzle with a little more olive oil to serve.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Butter Beans",
          "Olive Oil",
          "Onion",
          "Garlic Clove",
          "Tomato Puree",
          "Cinnamon",
        ],
        category: "American",
        image:
          "https://www.themealdb.com/images/media/meals/b79r6f1585566277.jpg",
      },
      {
        name: "Mushroom soup with buckwheat",
        description:
          "Chop the onion and garlic, slice the mushrooms and wash the buckwheat. Heat the oil and lightly sauté the onion. Add the mushrooms and the garlic and continue to sauté. Add the salt, vegetable seasoning, buckwheat and the bay leaf and cover with water. Simmer gently and just before it is completely cooked, add pepper, sour cream mixed with flour, the chopped parsley and vinegar to taste.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Mushrooms",
          "Buckwheat",
          "Vegetable Oil",
          "Onion",
          "Vegetable Stock Cube",
          "Sour Cream",
        ],
        category: "American",
        image:
          "https://www.themealdb.com/images/media/meals/1ngcbf1628770793.jpg",
      },
      {
        name: "Crispy Sausages and Greens",
        description:
          "Preheat the oven to 350°. Remove the stems from one bunch of Tuscan kale and tear the leaves into 1\" pieces (mustard greens, collards, spinach, and chard are great, too). Coarsely chop half a head of green cabbage. Combine the greens in a large baking dish and add 4 cloves of thinly sliced garlic. Adding some sliced onions and shiitake mushrooms at this point is optional, but highly recommended (I'll sauté the onions and mushrooms in a cast iron baking dish right on the stove before adding to the greens). Coat the greens with some olive oil and pour ½ cup chicken stock or broth over everything. Cover the dish with foil and bake until the greens are wilted, about 15 minutes. Remove foil and season with salt and pepper. Continue to bake until cabbage is tender, about 20-25 minutes more.\r\n\r\nMeanwhile, heat a little olive oil in a large skillet over medium-high. Prick four sweet Italian sausages with a fork and cook until browned on all sides and cooked through, 10 to 12 minutes. When the greens are done, slice the sausage and toss into the greens with a splash of your favorite vinegar (I like sherry or red wine).",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Chinese",
        image:
          "https://www.themealdb.com/images/media/meals/st1ifa1583267248.jpg",
      },
      {
        name: "Chicken Quinoa Greek Salad",
        description:
          "Preheat the oven to 350°. Remove the stems from one bunch of Tuscan kale and tear the leaves into 1\" pieces (mustard greens, collards, spinach, and chard are great, too). Coarsely chop half a head of green cabbage. Combine the greens in a large baking dish and add 4 cloves of thinly sliced garlic. Adding some sliced onions and shiitake mushrooms at this point is optional, but highly recommended (I'll sauté the onions and mushrooms in a cast iron baking dish right on the stove before adding to the greens). Coat the greens with some olive oil and pour ½ cup chicken stock or broth over everything. Cover the dish with foil and bake until the greens are wilted, about 15 minutes. Remove foil and season with salt and pepper. Continue to bake until cabbage is tender, about 20-25 minutes more.\r\n\r\nMeanwhile, heat a little olive oil in a large skillet over medium-high. Prick four sweet Italian sausages with a fork and cook until browned on all sides and cooked through, 10 to 12 minutes. When the greens are done, slice the sausage and toss into the greens with a splash of your favorite vinegar (I like sherry or red wine).",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Chinese",
        image:
          "https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg",
      },
      {
        name: "Tourtiere",
        description:
          "Preheat the oven to 350°. Remove the stems from one bunch of Tuscan kale and tear the leaves into 1\" pieces (mustard greens, collards, spinach, and chard are great, too). Coarsely chop half a head of green cabbage. Combine the greens in a large baking dish and add 4 cloves of thinly sliced garlic. Adding some sliced onions and shiitake mushrooms at this point is optional, but highly recommended (I'll sauté the onions and mushrooms in a cast iron baking dish right on the stove before adding to the greens). Coat the greens with some olive oil and pour ½ cup chicken stock or broth over everything. Cover the dish with foil and bake until the greens are wilted, about 15 minutes. Remove foil and season with salt and pepper. Continue to bake until cabbage is tender, about 20-25 minutes more.\r\n\r\nMeanwhile, heat a little olive oil in a large skillet over medium-high. Prick four sweet Italian sausages with a fork and cook until browned on all sides and cooked through, 10 to 12 minutes. When the greens are done, slice the sausage and toss into the greens with a splash of your favorite vinegar (I like sherry or red wine).",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Chinese",
        image:
          "https://www.themealdb.com/images/media/meals/ytpstt1511814614.jpg",
      },
      {
        name: "Chickpea Fajitas",
        description:
          "Preheat the oven to 350°. Remove the stems from one bunch of Tuscan kale and tear the leaves into 1\" pieces (mustard greens, collards, spinach, and chard are great, too). Coarsely chop half a head of green cabbage. Combine the greens in a large baking dish and add 4 cloves of thinly sliced garlic. Adding some sliced onions and shiitake mushrooms at this point is optional, but highly recommended (I'll sauté the onions and mushrooms in a cast iron baking dish right on the stove before adding to the greens). Coat the greens with some olive oil and pour ½ cup chicken stock or broth over everything. Cover the dish with foil and bake until the greens are wilted, about 15 minutes. Remove foil and season with salt and pepper. Continue to bake until cabbage is tender, about 20-25 minutes more.\r\n\r\nMeanwhile, heat a little olive oil in a large skillet over medium-high. Prick four sweet Italian sausages with a fork and cook until browned on all sides and cooked through, 10 to 12 minutes. When the greens are done, slice the sausage and toss into the greens with a splash of your favorite vinegar (I like sherry or red wine).",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Chinese",
        image:
          "https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg",
      },
      {
        name: "Rock Cakes",
        description:
          "Preheat the oven to 350°. Remove the stems from one bunch of Tuscan kale and tear the leaves into 1\" pieces (mustard greens, collards, spinach, and chard are great, too). Coarsely chop half a head of green cabbage. Combine the greens in a large baking dish and add 4 cloves of thinly sliced garlic. Adding some sliced onions and shiitake mushrooms at this point is optional, but highly recommended (I'll sauté the onions and mushrooms in a cast iron baking dish right on the stove before adding to the greens). Coat the greens with some olive oil and pour ½ cup chicken stock or broth over everything. Cover the dish with foil and bake until the greens are wilted, about 15 minutes. Remove foil and season with salt and pepper. Continue to bake until cabbage is tender, about 20-25 minutes more.\r\n\r\nMeanwhile, heat a little olive oil in a large skillet over medium-high. Prick four sweet Italian sausages with a fork and cook until browned on all sides and cooked through, 10 to 12 minutes. When the greens are done, slice the sausage and toss into the greens with a splash of your favorite vinegar (I like sherry or red wine).",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Chinese",
        image:
          "https://www.themealdb.com/images/media/meals/tqrrsq1511723764.jpg",
      },
      {
        name: "Salmon Avocado Salad",
        description:
          "Preheat the oven to 350°. Remove the stems from one bunch of Tuscan kale and tear the leaves into 1\" pieces (mustard greens, collards, spinach, and chard are great, too). Coarsely chop half a head of green cabbage. Combine the greens in a large baking dish and add 4 cloves of thinly sliced garlic. Adding some sliced onions and shiitake mushrooms at this point is optional, but highly recommended (I'll sauté the onions and mushrooms in a cast iron baking dish right on the stove before adding to the greens). Coat the greens with some olive oil and pour ½ cup chicken stock or broth over everything. Cover the dish with foil and bake until the greens are wilted, about 15 minutes. Remove foil and season with salt and pepper. Continue to bake until cabbage is tender, about 20-25 minutes more.\r\n\r\nMeanwhile, heat a little olive oil in a large skillet over medium-high. Prick four sweet Italian sausages with a fork and cook until browned on all sides and cooked through, 10 to 12 minutes. When the greens are done, slice the sausage and toss into the greens with a splash of your favorite vinegar (I like sherry or red wine).",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Thai",
        image: "https://www.themealdb.com/images/media/meals/1549542994.jpg",
      },
      {
        name: "Provençal Omelette Cake",
        description:
          "Preheat the oven to 350°. Remove the stems from one bunch of Tuscan kale and tear the leaves into 1\" pieces (mustard greens, collards, spinach, and chard are great, too). Coarsely chop half a head of green cabbage. Combine the greens in a large baking dish and add 4 cloves of thinly sliced garlic. Adding some sliced onions and shiitake mushrooms at this point is optional, but highly recommended (I'll sauté the onions and mushrooms in a cast iron baking dish right on the stove before adding to the greens). Coat the greens with some olive oil and pour ½ cup chicken stock or broth over everything. Cover the dish with foil and bake until the greens are wilted, about 15 minutes. Remove foil and season with salt and pepper. Continue to bake until cabbage is tender, about 20-25 minutes more.\r\n\r\nMeanwhile, heat a little olive oil in a large skillet over medium-high. Prick four sweet Italian sausages with a fork and cook until browned on all sides and cooked through, 10 to 12 minutes. When the greens are done, slice the sausage and toss into the greens with a splash of your favorite vinegar (I like sherry or red wine).",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Thai",
        image:
          "https://www.themealdb.com/images/media/meals/qwtrtp1511799242.jpg",
      },
      {
        name: "Lamb tomato and sweet spices",
        description:
          "Preheat the oven to 350°. Remove the stems from one bunch of Tuscan kale and tear the leaves into 1\" pieces (mustard greens, collards, spinach, and chard are great, too). Coarsely chop half a head of green cabbage. Combine the greens in a large baking dish and add 4 cloves of thinly sliced garlic. Adding some sliced onions and shiitake mushrooms at this point is optional, but highly recommended (I'll sauté the onions and mushrooms in a cast iron baking dish right on the stove before adding to the greens). Coat the greens with some olive oil and pour ½ cup chicken stock or broth over everything. Cover the dish with foil and bake until the greens are wilted, about 15 minutes. Remove foil and season with salt and pepper. Continue to bake until cabbage is tender, about 20-25 minutes more.\r\n\r\nMeanwhile, heat a little olive oil in a large skillet over medium-high. Prick four sweet Italian sausages with a fork and cook until browned on all sides and cooked through, 10 to 12 minutes. When the greens are done, slice the sausage and toss into the greens with a splash of your favorite vinegar (I like sherry or red wine).",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Thai",
        image:
          "https://www.themealdb.com/images/media/meals/qtwtss1468572261.jpg",
      },
      {
        name: "Cream Cheese Tart",
        description:
          "Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.\r\n\r\nHeat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Thai",
        image:
          "https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg",
      },
      {
        name: "Beef Wellington",
        description:
          "Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.\r\n\r\nHeat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Thai",
        image:
          "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
      },

      {
        name: "Moroccan Carrot Soup",
        description:
          "Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.\r\n\r\nHeat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Mexican",
        image:
          "https://www.themealdb.com/images/media/meals/jcr46d1614763831.jpg",
      },
      {
        name: "Matar Paneer",
        description:
          "Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.\r\n\r\nHeat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Mexican",
        image:
          "https://www.themealdb.com/images/media/meals/xxpqsy1511452222.jpg",
      },
      {
        name: "General Tso's Chicken",
        description:
          "Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.\r\n\r\nHeat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Mexican",
        image: "https://www.themealdb.com/images/media/meals/1529444113.jpg",
      },
      {
        name: "Tuna and Egg Briks",
        description:
          "Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.\r\n\r\nHeat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Mexican",
        image:
          "https://www.themealdb.com/images/media/meals/2dsltq1560461468.jpg",
      },
      {
        name: "Chicken Ham and Leek Pie",
        description:
          "Season the salmon, then rub with oil. Mix the dressing ingredients together. Halve, stone, peel and slice the avocados. Halve and quarter the cucumber lengthways, then cut into slices. Divide salad, avocado and cucumber between four plates, then drizzle with half the dressing.\r\n\r\nHeat a non-stick pan. Add the salmon and fry for 3-4 mins on each side until crisp but still moist inside. Put a salmon fillet on top of each salad and drizzle over the remaining dressing. Serve warm.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Mexican",
        image:
          "https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg",
      },
      {
        name: "Jam Roly-Poly",
        description:
          "Heat oven to 180C/fan 160C/gas 4. Trim the fronds from the fennel and set aside. Cut the fennel bulbs in half, then cut each half into 3 wedges. Cook in boiling salted water for 10 mins, then drain well. Chop the fennel fronds roughly, then mix with the parsley and lemon zest.\r\n\r\nSpread the drained fennel over a shallow ovenproof dish, then add the tomatoes. Drizzle with olive oil, then bake for 10 mins. Nestle the salmon among the veg, sprinkle with lemon juice, then bake 15 mins more until the fish is just cooked. Scatter over the parsley and serve.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Indian",
        image:
          "https://www.themealdb.com/images/media/meals/ysqupp1511640538.jpg",
      },
      {
        name: "Spicy North African Potato Salad",
        description:
          "Heat oven to 180C/fan 160C/gas 4. Trim the fronds from the fennel and set aside. Cut the fennel bulbs in half, then cut each half into 3 wedges. Cook in boiling salted water for 10 mins, then drain well. Chop the fennel fronds roughly, then mix with the parsley and lemon zest.\r\n\r\nSpread the drained fennel over a shallow ovenproof dish, then add the tomatoes. Drizzle with olive oil, then bake for 10 mins. Nestle the salmon among the veg, sprinkle with lemon juice, then bake 15 mins more until the fish is just cooked. Scatter over the parsley and serve.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Indian",
        image:
          "https://www.themealdb.com/images/media/meals/urtwux1486983078.jpg",
      },
      {
        name: "Chocolate Gateau",
        description:
          "Heat oven to 180C/fan 160C/gas 4. Trim the fronds from the fennel and set aside. Cut the fennel bulbs in half, then cut each half into 3 wedges. Cook in boiling salted water for 10 mins, then drain well. Chop the fennel fronds roughly, then mix with the parsley and lemon zest.\r\n\r\nSpread the drained fennel over a shallow ovenproof dish, then add the tomatoes. Drizzle with olive oil, then bake for 10 mins. Nestle the salmon among the veg, sprinkle with lemon juice, then bake 15 mins more until the fish is just cooked. Scatter over the parsley and serve.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Indian",
        image:
          "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
      },
      {
        name: "Chicken Congee",
        description:
          "Heat oven to 180C/fan 160C/gas 4. Trim the fronds from the fennel and set aside. Cut the fennel bulbs in half, then cut each half into 3 wedges. Cook in boiling salted water for 10 mins, then drain well. Chop the fennel fronds roughly, then mix with the parsley and lemon zest.\r\n\r\nSpread the drained fennel over a shallow ovenproof dish, then add the tomatoes. Drizzle with olive oil, then bake for 10 mins. Nestle the salmon among the veg, sprinkle with lemon juice, then bake 15 mins more until the fish is just cooked. Scatter over the parsley and serve.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Indian",
        image: "https://www.themealdb.com/images/media/meals/1529446352.jpg",
      },
      {
        name: "Breakfast Potatoes",
        description:
          "Heat oven to 180C/fan 160C/gas 4. Trim the fronds from the fennel and set aside. Cut the fennel bulbs in half, then cut each half into 3 wedges. Cook in boiling salted water for 10 mins, then drain well. Chop the fennel fronds roughly, then mix with the parsley and lemon zest.\r\n\r\nSpread the drained fennel over a shallow ovenproof dish, then add the tomatoes. Drizzle with olive oil, then bake for 10 mins. Nestle the salmon among the veg, sprinkle with lemon juice, then bake 15 mins more until the fish is just cooked. Scatter over the parsley and serve.",
        email: "kalandarovjamshid01@gmail.com",
        ingredients: [
          "Kale",
          "Cabbage",
          "Garlic Clove",
          "Shiitake Mushrooms",
          "Custard",
          "Mascarpone",
        ],
        category: "Indian",
        image: "https://www.themealdb.com/images/media/meals/1550441882.jpg",
      },
    ]);
    console.log("fayllar yozildi");
  } catch (err) {
    console.log(err);
  }
}
// insertDymayRecipeData();

module.exports = {
  homePage,
  categories,
};
