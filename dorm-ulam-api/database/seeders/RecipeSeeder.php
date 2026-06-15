<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Recipe;

class RecipeSeeder extends Seeder
{
    public function run(): void
    {
        \Illuminate\Support\Facades\DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        \App\Models\SavedRecipe::truncate();  // clear saved recipes first
        Recipe::truncate();
        \Illuminate\Support\Facades\DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        Recipe::create([
            'name' => 'Sizzling Hotdog',
            'image' => 'sizzling-hotdog.jpg',
            'cook_time' => 8,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Slice the hotdogs diagonally. Chop the onions finely. Set aside.', 'timerSeconds' => 60, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: The Sizzle', 'instruction' => 'Add the sliced hotdogs to the pan. Saute until they are slightly browned and the edges start to curl.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 3: The Sauce', 'instruction' => 'Mix in the onions and palm oil. Stir fry for 2 minutes until fragrant.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 4: Serve', 'instruction' => 'Plate the sizzling hotdog and serve hot with rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['hotdog', 'onion', 'saute', 'ketchup', 'oyster sauce', 'water', 'chilli'],
            'equipment' => ['Knife', 'Chopping Board', 'Frying Pan', 'Spatula', 'Plate'],
            'likes' => 10,
        ]);

        Recipe::create([
            'name' => 'Adobong Itlog',
            'image' => 'adobong-itlog.jpg',
            'cook_time' => 30,
            'instructions' => json_encode([
                ['title' => 'Step 1: Boil the egg', 'instruction' => 'Boil an egg for 10-15 mins. Make sure its perfectly boiled.', 'timerSeconds' => 900, 'equipment' => ['Pot']],
                ['title' => 'Step 2: Peel the egg', 'instruction' => 'Peel the egg for easy peeling. Use water with some ice.', 'timerSeconds' => 60, 'equipment' => ['Bowl']],
                ['title' => 'Step 3: Saute', 'instruction' => 'Put oil in the pan. Add garlic then onion. This is optional: if you want some extra flavor add long chili.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 4: Add the egg', 'instruction' => 'Add the egg then put soy sauce, pepper and oyster sauce.', 'timerSeconds' => 60, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 5: Simmer', 'instruction' => 'Put some water about 2-3 cups. Watch until its done. Add the rest of onion and long chili.', 'timerSeconds' => 300, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 6: Thicken', 'instruction' => 'Add cornstarch for thickening. Add 2 tsp of magic sarap or sugar for sweetness.', 'timerSeconds' => 60, 'equipment' => ['Frying Pan', 'Spatula']],
            ]),
            'ingredients' => ['eggs', 'oil', 'onion', 'garlic', 'long chili', 'soy sauce', 'pepper', 'oyster sauce', 'water', 'corn starch', 'magic sarap'],
            'equipment' => ['Pot', 'Bowl', 'Frying Pan', 'Spatula'],
            'likes' => 8,
        ]);

        Recipe::create([
            'name' => 'Garlic Butter Noodles',
            'image' => 'garlic-butter-noodles.jpg',
            'cook_time' => 20,
            'instructions' => json_encode([
                ['title' => 'Step 1: Mince garlic', 'instruction' => 'Finely mince an uncomfortable amount of garlic.', 'timerSeconds' => 60, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Boil noodles', 'instruction' => 'Boil your instant ramen 1 minute before al dente and rinse under cold water.', 'timerSeconds' => 300, 'equipment' => ['Pot']],
                ['title' => 'Step 3: Make the sauce', 'instruction' => 'Melt some butter and cook the garlic for a couple of mins before adding Soy Sauce, Sugar, Parmesan and Oyster Sauce. Cook for 2 more minutes.', 'timerSeconds' => 240, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 4: Toss noodles', 'instruction' => 'Add in your noodles and toss until everything is well combined.', 'timerSeconds' => 60, 'equipment' => ['Frying Pan', 'Spatula']],
            ]),
            'ingredients' => ['garlic', 'instant ramen', 'butter', 'soy sauce', 'sugar', 'parmesan', 'oyster sauce'],
            'equipment' => ['Knife', 'Chopping Board', 'Pot', 'Frying Pan', 'Spatula'],
            'likes' => 7,
        ]);

        Recipe::create([
            'name' => 'Soy Garlic Chicken',
            'image' => 'soy-garlic-chicken.jpg',
            'cook_time' => 30,
            'instructions' => json_encode([
                ['title' => 'Step 1: Marinate', 'instruction' => 'Mix chicken breast with salt, pepper, garlic powder, paprika, fish sauce, and egg.', 'timerSeconds' => 120, 'equipment' => ['Bowl']],
                ['title' => 'Step 2: Coat', 'instruction' => 'Add all purpose flour and corn starch to the chicken and mix well.', 'timerSeconds' => 60, 'equipment' => ['Bowl']],
                ['title' => 'Step 3: Fry', 'instruction' => 'Fry the chicken until golden brown and cooked through.', 'timerSeconds' => 600, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 4: Make the sauce', 'instruction' => 'In a separate pan, melt butter, add garlic, soy sauce, vinegar, sugar, salt and pepper. Simmer until thickened.', 'timerSeconds' => 180, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 5: Serve', 'instruction' => 'Coat the chicken with the sauce and serve hot with rice.', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['chicken breast', 'salt', 'pepper', 'garlic powder', 'paprika', 'fish sauce', 'egg', 'all purpose flour', 'corn starch', 'butter', 'garlic', 'soy sauce', 'vinegar', 'sugar'],
            'equipment' => ['Bowl', 'Frying Pan', 'Spatula', 'Plate'],
            'likes' => 12,
        ]);

        Recipe::create([
            'name' => 'Sinigang',
            'image' => 'sinigang.jpg',
            'cook_time' => 20,
            'instructions' => json_encode([
                ['title' => 'Step 1: Boil', 'instruction' => 'Mix water, onion, tomatoes, and green chili in a pot. Simmer for 10 mins.', 'timerSeconds' => 600, 'equipment' => ['Pot']],
                ['title' => 'Step 2: Add sinigang mix', 'instruction' => 'Add sinigang mix and stir well.', 'timerSeconds' => 60, 'equipment' => ['Pot', 'Spoon']],
                ['title' => 'Step 3: Add shrimp cubes', 'instruction' => 'Add shrimp cubes — just half. Add salt then adjust to your desired taste.', 'timerSeconds' => 120, 'equipment' => ['Pot', 'Spoon']],
                ['title' => 'Step 4: Serve', 'instruction' => 'Serve hot with rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Bowl']],
            ]),
            'ingredients' => ['water', 'onion', 'tomatoes', 'green chili', 'sinigang mix', 'shrimp cubes', 'salt'],
            'equipment' => ['Pot', 'Spoon', 'Bowl'],
            'likes' => 9,
        ]);

        Recipe::create([
            'name' => 'Tofu Sisig',
            'image' => 'tofu-sisig.jpg',
            'cook_time' => 20,
            'instructions' => json_encode([
                ['title' => 'Step 1: Make the dressing', 'instruction' => 'Combine mayonnaise, liquid seasoning, calamansi, and pepper in a bowl.', 'timerSeconds' => 120, 'equipment' => ['Bowl', 'Spoon']],
                ['title' => 'Step 2: Fry the tofu', 'instruction' => 'Heat oil and deep fry tofu until golden brown. Remove from the pan and set aside to rest.', 'timerSeconds' => 300, 'equipment' => ['Pan', 'Plate']],
                ['title' => 'Step 3: Saute', 'instruction' => 'From the same pan, add half of the onions and peppers and wait for it to soften.', 'timerSeconds' => 120, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 4: Add tofu', 'instruction' => 'Add the tofu back to the pan and continue cooking.', 'timerSeconds' => 30, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 5: Dress and serve', 'instruction' => 'Transfer tofu to a bowl and add the dressing and remaining onion and peppers. Toss evenly.', 'timerSeconds' => 60, 'equipment' => ['Bowl', 'Spoon']],
            ]),
            'ingredients' => ['tofu', 'onion', 'salt', 'pepper', 'chili', 'calamansi', 'liquid seasoning', 'mayonnaise'],
            'equipment' => ['Bowl', 'Spoon', 'Pan', 'Spatula', 'Plate'],
            'likes' => 6,
        ]);

        Recipe::create([
            'name' => 'Tomato Egg',
            'image' => 'tomato-egg.jpg',
            'cook_time' => 15,
            'instructions' => json_encode([
                ['title' => 'Step 1: Prepare the egg', 'instruction' => 'Crack an egg into a bowl and scramble it thoroughly. Add salt and pepper to taste.', 'timerSeconds' => 60, 'equipment' => ['Bowl', 'Fork']],
                ['title' => 'Step 2: Chop tomatoes', 'instruction' => 'Chop tomatoes into small pieces.', 'timerSeconds' => 60, 'equipment' => ['Chopping Board', 'Knife']],
                ['title' => 'Step 3: Cook the egg', 'instruction' => 'Put the egg into the pan and let it cook for a minute. Set it aside after.', 'timerSeconds' => 60, 'equipment' => ['Pan']],
                ['title' => 'Step 4: Cook the tomato', 'instruction' => 'Stir fry the tomato until it softens.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 5: Combine', 'instruction' => 'Put the egg back to the pan and mix it together for 1-2 minutes.', 'timerSeconds' => 120, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 6: Serve', 'instruction' => 'Plate and serve hot with rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['tomato', 'egg', 'oil', 'pepper', 'salt'],
            'equipment' => ['Bowl', 'Fork', 'Chopping Board', 'Knife', 'Pan', 'Spatula', 'Plate'],
            'likes' => 5,
        ]);

        Recipe::create([
            'name' => 'Instant Noodles Ramen',
            'image' => 'instant-noodles.jpg',
            'cook_time' => 10,
            'instructions' => json_encode([
                ['title' => 'Step 1: Boil everything', 'instruction' => 'Boil the instant noodles in a pot or rice cooker along with the pechay and egg. Set a timer so the ingredients do not get overcooked.', 'timerSeconds' => 420, 'equipment' => ['Pot/Rice Cooker']],
                ['title' => 'Step 2: Serve', 'instruction' => 'Once the noodles, pechay, and egg are cooked, serve them up while its hot.', 'timerSeconds' => 0, 'equipment' => ['Bowl']],
                ['title' => 'Optional: Add toppings', 'instruction' => 'If you want your noodles to be spicy, add chili oil. And if meat is available, top it over your noodles and enjoy!', 'timerSeconds' => 0, 'equipment' => ['Bowl']],
            ]),
            'ingredients' => ['instant noodles', 'egg', 'pechay', 'chili oil', 'meat'],
            'equipment' => ['Pot', 'Rice Cooker', 'Bowl'],
            'likes' => 15,
        ]);

        Recipe::create([
            'name' => 'Stir Fried Veggies',
            'image' => 'stir-fried-veggies.jpg',
            'cook_time' => 15,
            'instructions' => json_encode([
                ['title' => 'Step 1: Chop veggies', 'instruction' => 'Chop up your vegetables thinly and set them aside.', 'timerSeconds' => 300, 'equipment' => ['Chopping Board', 'Knife']],
                ['title' => 'Step 2: Prepare egg', 'instruction' => 'Crack an egg and scramble it thoroughly. Add salt and pepper to taste.', 'timerSeconds' => 60, 'equipment' => ['Bowl', 'Fork']],
                ['title' => 'Step 3: Cook', 'instruction' => 'Heat up your pan and put garlic and onion first then followed by the cabbage. Add the egg in the center and mix it up together. Season according to taste.', 'timerSeconds' => 300, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 4: Serve', 'instruction' => 'Serve and enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['cabbage', 'garlic', 'onion', 'egg', 'liquid seasoning', 'salt', 'pepper', 'oil'],
            'equipment' => ['Chopping Board', 'Knife', 'Bowl', 'Fork', 'Pan', 'Spatula', 'Plate'],
            'likes' => 4,
        ]);

        Recipe::create([
            'name' => 'Tuna Mayo with Rice',
            'image' => 'tuna-mayo.jpg',
            'cook_time' => 5,
            'instructions' => json_encode([
                ['title' => 'Step 1: Prepare', 'instruction' => 'Prepare your rice, canned tuna, and mayonnaise.', 'timerSeconds' => 120, 'equipment' => ['Bowl']],
                ['title' => 'Step 2: Mix and serve', 'instruction' => 'Mix it thoroughly and scoop it with the seaweed and enjoy!', 'timerSeconds' => 0, 'equipment' => ['Bowl']],
            ]),
            'ingredients' => ['rice', 'canned tuna', 'mayonnaise', 'seaweed'],
            'equipment' => ['Bowl'],
            'likes' => 11,
        ]);

        Recipe::create([
            'name' => 'Enoki Pastil',
            'image' => 'enoki-pastil.jpg',
            'cook_time' => 20,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Slice onion and garlic. Separate each stem of the enoki and cut the end roots.', 'timerSeconds' => 60, 'equipment' => ['Pan or Rice Cooker']],
                ['title' => 'Step 2: Dry the mushroom', 'instruction' => 'Put the enoki in a dry pan or rice cooker — no oil, no water. Cook on medium heat until it wilts and releases liquid. Let it sweat, do not stir right away.', 'timerSeconds' => 120, 'equipment' => ['Pan or Rice Cooker']],
                ['title' => 'Step 3: Waiting time', 'instruction' => 'Once liquid comes out, keep cooking until most of it evaporates.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 4: Saute onion and garlic', 'instruction' => 'Add a little oil to the side of the pan, then toss in your garlic and onion. Saute until the onion softens and garlic smells good.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 5: Put your sauce', 'instruction' => 'Pour in soy sauce, vinegar, and a pinch of brown sugar. Stir and let it boil a bit until the flavors come together.', 'timerSeconds' => 60, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 6: Season and Adjust', 'instruction' => 'Season with pepper. Taste and adjust — more soy if too bland, more vinegar if you want it tangier, more sugar if too sour. Add chili if desired.', 'timerSeconds' => 30, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['enoki mushrooms', 'garlic', 'onion', 'cooking oil', 'soy sauce', 'white vinegar', 'brown sugar', 'black crushed pepper', 'chili'],
            'equipment' => ['Pan', 'Rice Cooker', 'Frying Pan', 'Spatula', 'Plate'],
            'likes' => 8,
        ]);

        Recipe::create([
            'name' => 'Creamy Chicken Mushroom',
            'image' => 'creamy-chicken-mushroom.jpg',
            'cook_time' => 25,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Slice onion and garlic. Prepare your chicken as well if you prefer it sliced or shredded.', 'timerSeconds' => 30, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 2: Saute garlic', 'instruction' => 'Saute garlic in oil or butter until fragrant.', 'timerSeconds' => 60, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 3: Cook the chicken', 'instruction' => 'Add chicken and cook through.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 4: Add mushroom', 'instruction' => 'Add mushrooms and cook until softened.', 'timerSeconds' => 60, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 5: Put the cream', 'instruction' => 'Pour in cream and simmer until sauce thickens. Season with salt and pepper.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
            ]),
            'ingredients' => ['chicken', 'mushrooms', 'garlic', 'cream', 'salt', 'pepper', 'cooking oil', 'butter'],
            'equipment' => ['Frying Pan', 'Spatula'],
            'likes' => 10,
        ]);

        Recipe::create([
            'name' => 'Ginisang Sayote',
            'image' => 'ginisang-sayote.jpg',
            'cook_time' => 20,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Peel and slice sayote into thin strips or cubes. Mince garlic, slice onion, and cut pork or chicken into small pieces if using. Set aside.', 'timerSeconds' => 60, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Saute Garlic and Onion', 'instruction' => 'Heat oil in a pan over medium heat. Saute garlic until fragrant, then add onion and cook until softened.', 'timerSeconds' => 30, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 3: Cook the meat', 'instruction' => 'Add pork or chicken. Cook until lightly browned and cooked through. Skip this step if going meatless.', 'timerSeconds' => 300, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 4: Add the Sayote', 'instruction' => 'Add the sliced sayote and stir to combine. Pour in a splash of water to help it cook.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 5: Adjust the taste', 'instruction' => 'Add soy sauce and fish sauce or salt. Mix well and let it simmer until the sayote is tender but not mushy.', 'timerSeconds' => 180, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 6: Serve', 'instruction' => 'Season with pepper. Taste and adjust. Plate and serve hot with steamed rice.', 'timerSeconds' => 30, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['sayote', 'garlic', 'onion', 'pork', 'chicken', 'soy sauce', 'fish sauce', 'salt', 'pepper', 'cooking oil', 'water'],
            'equipment' => ['Knife', 'Chopping Board', 'Frying Pan', 'Spatula', 'Plate'],
            'likes' => 6,
        ]);

        Recipe::create([
            'name' => 'Soy Garlic Marble Potato',
            'image' => 'soy-garlic-potato.jpg',
            'cook_time' => 25,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Peel and slice potatoes into even pieces. Mince garlic. Set aside.', 'timerSeconds' => 30, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Boil potatoes', 'instruction' => 'Boil potatoes until just tender. Drain and let cool slightly. Smash lightly with a fork or back of a spoon.', 'timerSeconds' => 120, 'equipment' => ['Pot', 'Fork or Spoon']],
                ['title' => 'Step 3: Heat the Pan', 'instruction' => 'Prepare the pan and put oil or butter until it heats.', 'timerSeconds' => 20, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 4: Saute the garlic', 'instruction' => 'Add garlic and cook until fragrant.', 'timerSeconds' => 20, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 5: Creating the sauce', 'instruction' => 'Mix soy sauce, brown sugar, and a little water, then pour into the pan. Toss to coat the potatoes.', 'timerSeconds' => 0, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 6: Finish', 'instruction' => 'Cook until the sauce thickens and coats the potatoes. Season with pepper.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
            ]),
            'ingredients' => ['small potatoes', 'garlic', 'soy sauce', 'brown sugar', 'butter', 'oil', 'pepper', 'water'],
            'equipment' => ['Knife', 'Chopping Board', 'Pot', 'Frying Pan', 'Spatula'],
            'likes' => 7,
        ]);

        Recipe::create([
            'name' => 'Mayak Egg',
            'image' => 'mayak-egg.jpg',
            'cook_time' => 20,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Decide how many eggs you will cook. Mince garlic and chop green onion. Set aside.', 'timerSeconds' => 20, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Boil the eggs', 'instruction' => 'Boil eggs to your preferred doneness — soft or hard boiled. Peel and set aside.', 'timerSeconds' => 900, 'equipment' => ['Pot']],
                ['title' => 'Step 3: Make the sauce', 'instruction' => 'Mix soy sauce, water, sugar, minced garlic, and chopped green onion in a bowl or container. Add chili if desired.', 'timerSeconds' => 30, 'equipment' => ['Bowl', 'Spoon']],
                ['title' => 'Step 4: Soak the eggs', 'instruction' => 'Place peeled eggs into the marinade. Make sure they are submerged or turn them occasionally.', 'timerSeconds' => 0, 'equipment' => ['Bowl or Container']],
                ['title' => 'Step 5: Almost done', 'instruction' => 'Drizzle with sesame oil. Refrigerate for at least a few hours — overnight is better for deeper flavor.', 'timerSeconds' => 0, 'equipment' => ['Refrigerator']],
            ]),
            'ingredients' => ['boiled eggs', 'soy sauce', 'water', 'sugar', 'garlic', 'green onion', 'sesame oil', 'chili', 'sesame seeds'],
            'equipment' => ['Knife', 'Chopping Board', 'Pot', 'Bowl', 'Spoon', 'Refrigerator'],
            'likes' => 9,
        ]);

        Recipe::create([
            'name' => 'Egg Fried Rice',
            'image' => 'egg-fried-rice.jpg',
            'cook_time' => 15,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Crack eggs into a bowl and scramble thoroughly. Season with salt and pepper. Use leftover rice if possible — it fries better.', 'timerSeconds' => 60, 'equipment' => ['Bowl', 'Fork']],
                ['title' => 'Step 2: Heat the pan', 'instruction' => 'Heat oil in a pan over high heat. Add garlic and stir until fragrant.', 'timerSeconds' => 30, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 3: Fry the egg', 'instruction' => 'Pour in the scrambled egg and let it set slightly before breaking it up into pieces.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 4: Add the rice', 'instruction' => 'Add the rice and stir fry everything together. Break up any clumps.', 'timerSeconds' => 120, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 5: Season', 'instruction' => 'Add soy sauce and sesame oil. Toss everything together until well combined.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 6: Serve', 'instruction' => 'Plate and serve hot. Top with green onions if available.', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['rice', 'egg', 'garlic', 'soy sauce', 'sesame oil', 'oil', 'salt', 'pepper', 'green onion'],
            'equipment' => ['Bowl', 'Fork', 'Pan', 'Spatula', 'Plate'],
            'likes' => 14,
        ]);

        Recipe::create([
            'name' => 'Sardines with Pasta',
            'image' => 'sardines-pasta.jpg',
            'cook_time' => 20,
            'instructions' => json_encode([
                ['title' => 'Step 1: Boil the pasta', 'instruction' => 'Boil pasta in salted water until al dente. Drain and set aside. Reserve a cup of pasta water.', 'timerSeconds' => 600, 'equipment' => ['Pot']],
                ['title' => 'Step 2: Saute garlic', 'instruction' => 'Heat oil in a pan. Saute garlic until golden and fragrant.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 3: Add sardines', 'instruction' => 'Add the canned sardines including the sauce. Break them up slightly with a spoon.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 4: Combine', 'instruction' => 'Add the drained pasta and toss everything together. Add a splash of pasta water if too dry.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 5: Season and serve', 'instruction' => 'Season with pepper and chili flakes. Plate and serve hot.', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['pasta', 'canned sardines', 'garlic', 'oil', 'pepper', 'chili flakes', 'salt'],
            'equipment' => ['Pot', 'Pan', 'Spatula', 'Plate'],
            'likes' => 8,
        ]);

        Recipe::create([
            'name' => 'Cheesy Scrambled Eggs',
            'image' => 'cheesy-scrambled-eggs.jpg',
            'cook_time' => 10,
            'instructions' => json_encode([
                ['title' => 'Step 1: Crack and season', 'instruction' => 'Crack eggs into a bowl. Add salt, pepper, and a splash of milk. Whisk until fully combined.', 'timerSeconds' => 60, 'equipment' => ['Bowl', 'Fork']],
                ['title' => 'Step 2: Heat the pan', 'instruction' => 'Melt butter in a pan over low-medium heat. Do not let it brown.', 'timerSeconds' => 30, 'equipment' => ['Pan']],
                ['title' => 'Step 3: Cook slowly', 'instruction' => 'Pour in the eggs. Stir slowly and continuously with a spatula, folding from the edges to the center. Keep the heat low.', 'timerSeconds' => 120, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 4: Add cheese', 'instruction' => 'When eggs are almost set but still slightly wet, add cheese and fold it in. Remove from heat — the residual heat will finish cooking.', 'timerSeconds' => 30, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 5: Serve', 'instruction' => 'Serve immediately on toast or with rice while still warm and fluffy.', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['egg', 'butter', 'cheese', 'milk', 'salt', 'pepper'],
            'equipment' => ['Bowl', 'Fork', 'Pan', 'Spatula', 'Plate'],
            'likes' => 11,
        ]);

        Recipe::create([
            'name' => 'Cornsilog',
            'image' => 'corned-beef.jpg',
            'cook_time' => 10,
            'instructions' => json_encode([
                ['title' => 'Step 1: Saute garlic and onion', 'instruction' => 'Heat oil in a pan. Saute garlic until golden then add onion and cook until softened.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 2: Add corned beef', 'instruction' => 'Open the can and add the corned beef. Break it up and mix well with the garlic and onion.', 'timerSeconds' => 120, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 3: Season', 'instruction' => 'Add pepper and a splash of soy sauce if desired. Stir and cook until slightly crispy.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 4: Add egg (optional)', 'instruction' => 'Crack an egg over the corned beef and mix it in. Cook until the egg is fully done.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 5: Serve', 'instruction' => 'Serve hot with steamed rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['canned corned beef', 'garlic', 'onion', 'oil', 'pepper', 'soy sauce', 'egg', 'rice'],
            'equipment' => ['Pan', 'Spatula', 'Plate'],
            'likes' => 16,
        ]);

        Recipe::create([
            'name' => 'Ginisang Munggo',
            'image' => 'ginisang-munggo.jpg',
            'cook_time' => 30,
            'instructions' => json_encode([
                ['title' => 'Step 1: Boil the munggo', 'instruction' => 'Boil munggo beans in water until soft and tender. This usually takes 20-25 minutes. Add more water if needed.', 'timerSeconds' => 1500, 'equipment' => ['Pot']],
                ['title' => 'Step 2: Saute garlic and onion', 'instruction' => 'In a separate pan, heat oil and saute garlic until golden. Add onion and cook until softened.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 3: Add tomato', 'instruction' => 'Add chopped tomatoes and cook until they soften and release their juices.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 4: Add the munggo', 'instruction' => 'Pour the boiled munggo including the water into the pan. Stir everything together.', 'timerSeconds' => 120, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 5: Season', 'instruction' => 'Add fish sauce or salt to taste. Add pepper. Let it simmer for 5 minutes until flavors come together.', 'timerSeconds' => 300, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 6: Serve', 'instruction' => 'Serve hot with steamed rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Bowl']],
            ]),
            'ingredients' => ['munggo beans', 'garlic', 'onion', 'tomato', 'fish sauce', 'salt', 'pepper', 'oil', 'water'],
            'equipment' => ['Pot', 'Pan', 'Spatula', 'Bowl'],
            'likes' => 10,
        ]);
    }
}