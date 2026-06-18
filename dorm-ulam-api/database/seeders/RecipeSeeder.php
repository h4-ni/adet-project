<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Recipe;

class RecipeSeeder extends Seeder
{
    public function run(): void
    {
        \Illuminate\Support\Facades\DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        \App\Models\SavedRecipe::truncate();
        Recipe::truncate();
        \Illuminate\Support\Facades\DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        Recipe::create([
            'name' => 'Sizzling Hotdog',
            'image' => 'sizzling-hotdog.jpg',
            'cook_time' => 9,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Slice the hotdogs diagonally. Chop the onions finely. Set aside.', 'timerSeconds' => 240, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: The Sizzle', 'instruction' => 'Add the sliced hotdogs to the pan. Saute until they are slightly browned and the edges start to curl.', 'timerSeconds' => 180, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 3: The Sauce', 'instruction' => 'Mix in the onions and palm oil. Stir fry for 2 minutes until fragrant.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 4: Serve', 'instruction' => 'Plate the sizzling hotdog and serve hot with rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['hotdog', 'onion', 'ketchup', 'oyster sauce', 'water', 'chilli', 'oil'],
            'equipment' => ['Knife', 'Chopping Board', 'Frying Pan', 'Spatula', 'Plate'],
            'likes' => 10,
        ]);

        Recipe::create([
            'name' => 'Adobong Itlog',
            'image' => 'adobong-itlog.jpg',
            'cook_time' => 24,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Prepare your eggs, garlic, onion, and long chili. Mince garlic and slice onion. Set aside.', 'timerSeconds' => 120, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Boil the egg', 'instruction' => 'Boil an egg for 10-12 mins. Make sure its perfectly boiled.', 'timerSeconds' => 720, 'equipment' => ['Pot']],
                ['title' => 'Step 3: Peel the egg', 'instruction' => 'Peel the egg. Use water with some ice for easy peeling.', 'timerSeconds' => 60, 'equipment' => ['Bowl']],
                ['title' => 'Step 4: Saute', 'instruction' => 'Put oil in the pan. Add garlic then onion. Add long chili if you want extra flavor.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 5: Add the egg', 'instruction' => 'Add the egg then put soy sauce, pepper and oyster sauce.', 'timerSeconds' => 60, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 6: Simmer', 'instruction' => 'Put some water about 2-3 cups. Watch until its done. Add the rest of onion and long chili.', 'timerSeconds' => 300, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 7: Thicken', 'instruction' => 'Add cornstarch for thickening. Add 2 tsp of magic sarap or sugar for sweetness.', 'timerSeconds' => 60, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 8: Serve', 'instruction' => 'Plate and serve hot with rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['eggs', 'oil', 'onion', 'garlic', 'long chili', 'soy sauce', 'pepper', 'oyster sauce', 'water', 'corn starch', 'magic sarap'],
            'equipment' => ['Knife', 'Chopping Board', 'Pot', 'Bowl', 'Frying Pan', 'Spatula', 'Plate'],
            'likes' => 8,
        ]);

        Recipe::create([
            'name' => 'Garlic Butter Noodles',
            'image' => 'garlic-butter-noodles.jpg',
            'cook_time' => 14,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Finely mince an uncomfortable amount of garlic. Set aside.', 'timerSeconds' => 180, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Boil noodles', 'instruction' => 'Boil your instant ramen 3 minutes before al dente and rinse under cold water.', 'timerSeconds' => 300, 'equipment' => ['Pot']],
                ['title' => 'Step 3: Make the sauce', 'instruction' => 'Melt some butter and cook the garlic for a couple of mins before adding soy sauce, sugar, parmesan and oyster sauce. Cook for 2 more minutes.', 'timerSeconds' => 240, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 4: Toss noodles', 'instruction' => 'Add in your noodles and toss until everything is well combined.', 'timerSeconds' => 60, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 5: Serve', 'instruction' => 'Plate and serve hot. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['garlic', 'instant ramen', 'butter', 'soy sauce', 'sugar', 'parmesan', 'oyster sauce'],
            'equipment' => ['Knife', 'Chopping Board', 'Pot', 'Frying Pan', 'Spatula', 'Plate'],
            'likes' => 7,
        ]);

        Recipe::create([
            'name' => 'Soy Garlic Chicken',
            'image' => 'soy-garlic-chicken.jpg',
            'cook_time' => 20,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Slice chicken breast into pieces. Prepare all your ingredients. Set aside.', 'timerSeconds' => 180, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Marinate', 'instruction' => 'Mix chicken breast with salt, pepper, garlic powder, paprika, fish sauce, and egg.', 'timerSeconds' => 120, 'equipment' => ['Bowl']],
                ['title' => 'Step 3: Coat', 'instruction' => 'Add all purpose flour and corn starch to the chicken and mix well.', 'timerSeconds' => 60, 'equipment' => ['Bowl']],
                ['title' => 'Step 4: Fry', 'instruction' => 'Fry the chicken until golden brown and cooked through.', 'timerSeconds' => 600, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 5: Make the sauce', 'instruction' => 'In a separate pan, melt butter, add garlic, soy sauce, vinegar, sugar, salt and pepper. Simmer until thickened.', 'timerSeconds' => 180, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 6: Serve', 'instruction' => 'Coat the chicken with the sauce and serve hot with rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['chicken breast', 'salt', 'pepper', 'garlic powder', 'paprika', 'fish sauce', 'egg', 'all purpose flour', 'corn starch', 'butter', 'garlic', 'soy sauce', 'vinegar', 'sugar'],
            'equipment' => ['Knife', 'Chopping Board', 'Bowl', 'Frying Pan', 'Spatula', 'Plate'],
            'likes' => 12,
        ]);

        Recipe::create([
            'name' => 'Pork Sinigang',
            'image' => 'sinigang.jpg',
            'cook_time' => 16,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Slice onion and tomatoes. Prepare green chili, sinigang mix, and pork cubes. Set aside.', 'timerSeconds' => 180, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Boil', 'instruction' => 'Mix water, onion, tomatoes, and green chili in a pot. Simmer for 10 minutes.', 'timerSeconds' => 600, 'equipment' => ['Pot']],
                ['title' => 'Step 3: Add sinigang mix', 'instruction' => 'Add sinigang mix and stir well.', 'timerSeconds' => 60, 'equipment' => ['Pot', 'Spoon']],
                ['title' => 'Step 4: Add pork', 'instruction' => 'Add pork cubes. Add salt then adjust to your desired taste.', 'timerSeconds' => 120, 'equipment' => ['Pot', 'Spoon']],
                ['title' => 'Step 5: Serve', 'instruction' => 'Serve hot with rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Bowl']],
            ]),
            'ingredients' => ['water', 'onion', 'tomatoes', 'green chili', 'sinigang mix', 'salt', 'pork'],
            'equipment' => ['Knife', 'Chopping Board', 'Pot', 'Spoon', 'Bowl'],
            'likes' => 9,
        ]);

        Recipe::create([
            'name' => 'Tofu Sisig',
            'image' => 'tofu-sisig.jpg',
            'cook_time' => 15,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Slice onion and chili. Cut tofu into cubes. Prepare calamansi, liquid seasoning, and mayonnaise. Set aside.', 'timerSeconds' => 240, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Make the dressing', 'instruction' => 'Combine mayonnaise, liquid seasoning, calamansi, and pepper in a bowl.', 'timerSeconds' => 120, 'equipment' => ['Bowl', 'Spoon']],
                ['title' => 'Step 3: Fry the tofu', 'instruction' => 'Heat oil and deep fry tofu until golden brown. Remove from the pan and set aside to rest.', 'timerSeconds' => 300, 'equipment' => ['Pan', 'Plate']],
                ['title' => 'Step 4: Saute', 'instruction' => 'From the same pan, add half of the onions and peppers and wait for it to soften.', 'timerSeconds' => 120, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 5: Add tofu', 'instruction' => 'Add the tofu back to the pan and continue cooking.', 'timerSeconds' => 90, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 6: Serve', 'instruction' => 'Transfer tofu to a bowl and add the dressing and remaining onion and peppers. Toss evenly and enjoy!', 'timerSeconds' => 0, 'equipment' => ['Bowl', 'Spoon']],
            ]),
            'ingredients' => ['tofu', 'onion', 'salt', 'pepper', 'chili', 'calamansi', 'liquid seasoning', 'mayonnaise', 'oil'],
            'equipment' => ['Knife', 'Chopping Board', 'Bowl', 'Spoon', 'Pan', 'Spatula', 'Plate'],
            'likes' => 6,
        ]);

        Recipe::create([
            'name' => 'Tomato Egg',
            'image' => 'tomato-egg.jpg',
            'cook_time' => 8,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Chop tomatoes into small pieces. Crack an egg into a bowl and scramble it thoroughly. Add salt and pepper to taste. Set aside.', 'timerSeconds' => 120, 'equipment' => ['Chopping Board', 'Knife', 'Bowl', 'Fork']],
                ['title' => 'Step 2: Cook the egg', 'instruction' => 'Put the egg into the pan and let it cook for a minute. Set it aside after.', 'timerSeconds' => 60, 'equipment' => ['Pan']],
                ['title' => 'Step 3: Cook the tomato', 'instruction' => 'Stir fry the tomato until it softens.', 'timerSeconds' => 180, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 4: Combine', 'instruction' => 'Put the egg back to the pan and mix it together for 1-2 minutes.', 'timerSeconds' => 120, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 5: Serve', 'instruction' => 'Plate and serve hot with rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['tomato', 'egg', 'oil', 'pepper', 'salt'],
            'equipment' => ['Chopping Board', 'Knife', 'Bowl', 'Fork', 'Pan', 'Spatula', 'Plate'],
            'likes' => 5,
        ]);

        Recipe::create([
            'name' => 'Instant Noodles Ramen',
            'image' => 'instant-noodles.jpg',
            'cook_time' => 8,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Prepare your instant noodles, pechay, and egg. Set aside.', 'timerSeconds' => 60, 'equipment' => ['Bowl']],
                ['title' => 'Step 2: Boil everything', 'instruction' => 'Boil the instant noodles in a pot or rice cooker along with the pechay and egg.', 'timerSeconds' => 420, 'equipment' => ['Pot', 'Rice Cooker']],
                ['title' => 'Step 3: Add toppings', 'instruction' => 'If you want your noodles to be spicy, add chili oil. And if meat is available, top it over your noodles.', 'timerSeconds' => 0, 'equipment' => ['Bowl']],
                ['title' => 'Step 4: Serve', 'instruction' => 'Once the noodles, pechay, and egg are cooked, serve them up while its hot. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Bowl']],
            ]),
            'ingredients' => ['instant noodles', 'egg', 'pechay', 'chili oil', 'meat'],
            'equipment' => ['Pot', 'Rice Cooker', 'Bowl'],
            'likes' => 15,
        ]);

        Recipe::create([
            'name' => 'Stir Fried Veggies',
            'image' => 'stir-fried-veggies.jpg',
            'cook_time' => 10,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Chop up your vegetables thinly. Crack an egg and scramble it thoroughly. Add salt and pepper to taste. Set aside.', 'timerSeconds' => 300, 'equipment' => ['Chopping Board', 'Knife', 'Bowl', 'Fork']],
                ['title' => 'Step 2: Cook', 'instruction' => 'Heat up your pan and put garlic and onion first then followed by the cabbage. Add the egg in the center and mix it up together. Season according to taste.', 'timerSeconds' => 300, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 3: Serve', 'instruction' => 'Plate and serve hot. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['cabbage', 'garlic', 'onion', 'egg', 'liquid seasoning', 'salt', 'pepper', 'oil'],
            'equipment' => ['Chopping Board', 'Knife', 'Bowl', 'Fork', 'Pan', 'Spatula', 'Plate'],
            'likes' => 4,
        ]);

        Recipe::create([
            'name' => 'Tuna Mayo with Rice',
            'image' => 'tuna-mayo.jpg',
            'cook_time' => 3,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Prepare your rice, canned tuna, mayonnaise, and seaweed. Set aside.', 'timerSeconds' => 60, 'equipment' => ['Bowl']],
                ['title' => 'Step 2: Mix', 'instruction' => 'Mix the rice, tuna, and mayonnaise thoroughly in a bowl.', 'timerSeconds' => 120, 'equipment' => ['Bowl', 'Spoon']],
                ['title' => 'Step 3: Serve', 'instruction' => 'Scoop it with the seaweed and enjoy!', 'timerSeconds' => 0, 'equipment' => ['Bowl']],
            ]),
            'ingredients' => ['rice', 'canned tuna', 'mayonnaise', 'seaweed'],
            'equipment' => ['Bowl', 'Spoon'],
            'likes' => 11,
        ]);

        Recipe::create([
            'name' => 'Enoki Pastil',
            'image' => 'Enoki-pastil.jpg',
            'cook_time' => 10,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Slice onion and garlic. Separate each stem of the enoki and cut the end roots. Set aside.', 'timerSeconds' => 120, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Dry the mushroom', 'instruction' => 'Put the enoki in a dry pan or rice cooker. Cook on medium heat until it wilts and releases liquid. Let it sweat, do not stir right away.', 'timerSeconds' => 180, 'equipment' => ['Pan', 'Rice Cooker']],
                ['title' => 'Step 3: Waiting time', 'instruction' => 'Once liquid comes out, keep cooking until most of it evaporates.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 4: Saute onion and garlic', 'instruction' => 'Add a little oil to the side of the pan, then toss in your garlic and onion. Saute until the onion softens and garlic smells good.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 5: Put your sauce', 'instruction' => 'Pour in soy sauce, vinegar, and a pinch of brown sugar. Stir and let it boil a bit until the flavors come together.', 'timerSeconds' => 60, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 6: Serve', 'instruction' => 'Season with pepper. Taste and adjust, add more soy sauce if too bland, more vinegar if tangier, more sugar if too sour. Add chili if desired. Plate and enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['enoki mushrooms', 'garlic', 'onion', 'cooking oil', 'soy sauce', 'white vinegar', 'brown sugar', 'black crushed pepper', 'chili'],
            'equipment' => ['Knife', 'Chopping Board', 'Pan', 'Rice Cooker', 'Frying Pan', 'Spatula', 'Plate'],
            'likes' => 8,
        ]);

        Recipe::create([
            'name' => 'Creamy Chicken Mushroom',
            'image' => 'creamy-chicken-mushroom.jpg',
            'cook_time' => 16,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Slice or shred chicken. Slice mushrooms. Mince garlic. Set aside.', 'timerSeconds' => 240, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Saute garlic', 'instruction' => 'Saute garlic in oil or butter until fragrant.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 3: Cook the chicken', 'instruction' => 'Add chicken and cook through.', 'timerSeconds' => 300, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 4: Add mushroom', 'instruction' => 'Add mushrooms and cook until softened.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 5: Put the cream', 'instruction' => 'Pour in cream and simmer until sauce thickens. Season with salt and pepper.', 'timerSeconds' => 180, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 6: Serve', 'instruction' => 'Plate and serve hot with rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['chicken', 'mushrooms', 'garlic', 'cream', 'salt', 'pepper', 'cooking oil', 'butter'],
            'equipment' => ['Knife', 'Chopping Board', 'Frying Pan', 'Spatula', 'Plate'],
            'likes' => 10,
        ]);

        Recipe::create([
            'name' => 'Ginisang Sayote',
            'image' => 'ginisang-sayote.jpg',
            'cook_time' => 19,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Peel and slice sayote into thin strips or cubes. Mince garlic, slice onion, and cut pork or chicken into small pieces if using. Set aside.', 'timerSeconds' => 300, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Saute Garlic and Onion', 'instruction' => 'Heat oil in a pan over medium heat. Saute garlic until fragrant, then add onion and cook until softened.', 'timerSeconds' => 180, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 3: Cook the meat', 'instruction' => 'Add pork or chicken. Cook until lightly browned and cooked through. Skip this step if going meatless.', 'timerSeconds' => 300, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 4: Add the Sayote', 'instruction' => 'Add the sliced sayote and stir to combine. Pour in a splash of water to help it cook.', 'timerSeconds' => 180, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 5: Adjust the taste', 'instruction' => 'Add soy sauce and fish sauce or salt. Mix well and let it simmer until the sayote is tender but not mushy.', 'timerSeconds' => 180, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 6: Serve', 'instruction' => 'Season with pepper. Taste and adjust. Plate and serve hot with steamed rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['sayote', 'garlic', 'onion', 'pork', 'chicken', 'soy sauce', 'fish sauce', 'salt', 'pepper', 'cooking oil', 'water'],
            'equipment' => ['Knife', 'Chopping Board', 'Frying Pan', 'Spatula', 'Plate'],
            'likes' => 6,
        ]);

        Recipe::create([
            'name' => 'Soy Garlic Marble Potato',
            'image' => 'soy-garlic-potato.jpg',
            'cook_time' => 10,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Mince garlic. Set aside.', 'timerSeconds' => 60, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Boil potatoes', 'instruction' => 'Boil potatoes until just tender. Drain and let cool slightly. Smash lightly with a fork or back of a spoon.', 'timerSeconds' => 360, 'equipment' => ['Pot', 'Fork']],
                ['title' => 'Step 3: Heat the Pan', 'instruction' => 'Prepare the pan and put oil or butter until it heats.', 'timerSeconds' => 60, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 4: Saute the garlic', 'instruction' => 'Add garlic and cook until fragrant.', 'timerSeconds' => 60, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 5: Create the sauce', 'instruction' => 'Mix soy sauce, brown sugar, and a little water, then pour into the pan. Toss to coat the potatoes. Cook until the sauce thickens. Season with pepper.', 'timerSeconds' => 180, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 6: Serve', 'instruction' => 'Plate and serve hot. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['small potatoes', 'garlic', 'soy sauce', 'brown sugar', 'butter', 'oil', 'pepper', 'water'],
            'equipment' => ['Knife', 'Chopping Board', 'Pot', 'Fork', 'Frying Pan', 'Spatula', 'Plate'],
            'likes' => 7,
        ]);

        Recipe::create([
            'name' => 'Mayak Egg',
            'image' => 'mayak-egg.jpg',
            'cook_time' => 20,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Mince garlic and chop green onion. Set aside.', 'timerSeconds' => 20, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Boil the eggs', 'instruction' => 'Boil eggs to your preferred doneness, soft or hard boiled. Peel and set aside.', 'timerSeconds' => 900, 'equipment' => ['Pot']],
                ['title' => 'Step 3: Make the sauce', 'instruction' => 'Mix soy sauce, water, sugar, minced garlic, and chopped green onion in a bowl. Add chili if desired.', 'timerSeconds' => 30, 'equipment' => ['Bowl', 'Spoon']],
                ['title' => 'Step 4: Soak the eggs', 'instruction' => 'Place peeled eggs into the marinade. Make sure they are submerged or turn them occasionally.', 'timerSeconds' => 0, 'equipment' => ['Bowl']],
                ['title' => 'Step 5: Serve', 'instruction' => 'Drizzle with sesame oil. Refrigerate for at least a few hours, overnight is better. Serve and enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['boiled eggs', 'soy sauce', 'water', 'sugar', 'garlic', 'green onion', 'sesame oil', 'chili', 'sesame seeds'],
            'equipment' => ['Knife', 'Chopping Board', 'Pot', 'Bowl', 'Spoon', 'Plate'],
            'likes' => 9,
        ]);

        Recipe::create([
            'name' => 'Egg Fried Rice',
            'image' => 'egg-fried-rice.jpg',
            'cook_time' => 15,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Crack eggs into a bowl and scramble thoroughly. Season with salt and pepper. Mince garlic. Use leftover rice if possible — it fries better. Set aside.', 'timerSeconds' => 60, 'equipment' => ['Bowl', 'Fork', 'Knife', 'Chopping Board']],
                ['title' => 'Step 2: Heat the pan', 'instruction' => 'Heat oil in a pan over high heat. Add garlic and stir until fragrant.', 'timerSeconds' => 30, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 3: Fry the egg', 'instruction' => 'Pour in the scrambled egg and let it set slightly before breaking it up into pieces.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 4: Add the rice', 'instruction' => 'Add the rice and stir fry everything together. Break up any clumps.', 'timerSeconds' => 120, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 5: Season', 'instruction' => 'Add soy sauce and sesame oil. Toss everything together until well combined.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 6: Serve', 'instruction' => 'Plate and serve hot. Top with green onions if available. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['rice', 'egg', 'garlic', 'soy sauce', 'sesame oil', 'oil', 'salt', 'pepper', 'green onion'],
            'equipment' => ['Bowl', 'Fork', 'Knife', 'Chopping Board', 'Pan', 'Spatula', 'Plate'],
            'likes' => 14,
        ]);

        Recipe::create([
            'name' => 'Sardines with Pasta',
            'image' => 'sardines-pasta.jpg',
            'cook_time' => 20,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Mince garlic. Open canned sardines. Set aside.', 'timerSeconds' => 30, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Boil the pasta', 'instruction' => 'Boil pasta in salted water until al dente. Drain and set aside. Reserve a cup of pasta water.', 'timerSeconds' => 480, 'equipment' => ['Pot']],
                ['title' => 'Step 3: Saute garlic', 'instruction' => 'Heat oil in a pan. Saute garlic until golden and fragrant.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 4: Add sardines', 'instruction' => 'Add the canned sardines including the sauce. Break them up slightly with a spoon.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 5: Combine', 'instruction' => 'Add the drained pasta and toss everything together. Add a splash of pasta water if too dry.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 6: Serve', 'instruction' => 'Season with pepper and chili flakes. Plate and serve hot. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['pasta', 'canned sardines', 'garlic', 'oil', 'pepper', 'chili flakes', 'salt'],
            'equipment' => ['Knife', 'Chopping Board', 'Pot', 'Pan', 'Spatula', 'Plate'],
            'likes' => 8,
        ]);

        Recipe::create([
            'name' => 'Cheesy Scrambled Eggs',
            'image' => 'cheesy-scrambled-egg.jpg',
            'cook_time' => 10,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Crack eggs into a bowl. Add salt, pepper, and a splash of milk. Whisk until fully combined. Prepare cheese. Set aside.', 'timerSeconds' => 60, 'equipment' => ['Bowl', 'Fork']],
                ['title' => 'Step 2: Heat the pan', 'instruction' => 'Melt butter in a pan over low-medium heat. Do not let it brown.', 'timerSeconds' => 30, 'equipment' => ['Pan']],
                ['title' => 'Step 3: Cook slowly', 'instruction' => 'Pour in the eggs. Stir slowly and continuously with a spatula, folding from the edges to the center. Keep the heat low.', 'timerSeconds' => 120, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 4: Add cheese', 'instruction' => 'When eggs are almost set but still slightly wet, add cheese and fold it in. Remove from heat — the residual heat will finish cooking.', 'timerSeconds' => 30, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 5: Serve', 'instruction' => 'Serve immediately on toast or with rice while still warm and fluffy. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['egg', 'butter', 'cheese', 'milk', 'salt', 'pepper'],
            'equipment' => ['Bowl', 'Fork', 'Pan', 'Spatula', 'Plate'],
            'likes' => 11,
        ]);

        Recipe::create([
            'name' => 'Cornsilog',
            'image' => 'corn-silog.jpg',
            'cook_time' => 10,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Mince garlic and slice onion. Open the can of corned beef. Set aside.', 'timerSeconds' => 30, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Saute garlic and onion', 'instruction' => 'Heat oil in a pan. Saute garlic until golden then add onion and cook until softened.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 3: Add corned beef', 'instruction' => 'Add the corned beef. Break it up and mix well with the garlic and onion.', 'timerSeconds' => 120, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 4: Season', 'instruction' => 'Add pepper and a splash of soy sauce if desired. Stir and cook until slightly crispy. Crack an egg if desired and mix until fully cooked.', 'timerSeconds' => 60, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 5: Serve', 'instruction' => 'Serve hot with steamed rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['canned corned beef', 'garlic', 'onion', 'oil', 'pepper', 'soy sauce', 'egg', 'rice'],
            'equipment' => ['Knife', 'Chopping Board', 'Pan', 'Spatula', 'Plate'],
            'likes' => 16,
        ]);

        Recipe::create([
            'name' => 'Ginisang Munggo',
            'image' => 'ginisang-munggo.jpg',
            'cook_time' => 30,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Mince garlic, slice onion, and chop tomatoes. Prepare munggo beans. Set aside.', 'timerSeconds' => 60, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Boil the munggo', 'instruction' => 'Boil munggo beans in water until soft and tender. This usually takes 20-25 minutes. Add more water if needed.', 'timerSeconds' => 1500, 'equipment' => ['Pot']],
                ['title' => 'Step 3: Saute', 'instruction' => 'In a separate pan, heat oil and saute garlic until golden. Add onion and cook until softened. Add tomatoes and cook until mushy.', 'timerSeconds' => 120, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 4: Add the munggo', 'instruction' => 'Pour the boiled munggo including the water into the pan. Stir everything together.', 'timerSeconds' => 120, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 5: Season', 'instruction' => 'Add fish sauce or salt to taste. Add pepper. Let it simmer for 5 minutes until flavors come together.', 'timerSeconds' => 300, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 6: Serve', 'instruction' => 'Serve hot with steamed rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Bowl']],
            ]),
            'ingredients' => ['munggo beans', 'garlic', 'onion', 'tomato', 'fish sauce', 'salt', 'pepper', 'oil', 'water'],
            'equipment' => ['Knife', 'Chopping Board', 'Pot', 'Pan', 'Spatula', 'Bowl'],
            'likes' => 10,
        ]);

        Recipe::create([
            'name' => 'Sardinas with Miswa',
            'image' => 'sardinas-with-miswa.jpg',
            'cook_time' => 9,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Slice tomato, onion, and garlic. Prepare sardines and miswa noodles. Set aside.', 'timerSeconds' => 60, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: The Boil', 'instruction' => 'Boil water in a pot. Add sardines and bring to a simmer.', 'timerSeconds' => 180, 'equipment' => ['Pot']],
                ['title' => 'Step 3: Add the miswa', 'instruction' => 'Toss in miswa noodles and cook for 2-3 minutes until tender.', 'timerSeconds' => 180, 'equipment' => ['Pot', 'Ladle']],
                ['title' => 'Step 4: Serve', 'instruction' => 'Season to taste. Add optional toppings like tomato, onion, or garlic. Serve hot and enjoy!', 'timerSeconds' => 0, 'equipment' => ['Bowl']],
            ]),
            'ingredients' => ['sardines', 'miswa noodles', 'tomato', 'onion', 'garlic', 'oil', 'water'],
            'equipment' => ['Knife', 'Chopping Board', 'Pot', 'Ladle', 'Bowl'],
            'likes' => 5,
        ]);

        Recipe::create([
            'name' => 'Tortang Talong',
            'image' => 'tortang-talong.jpg',
            'cook_time' => 10,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Beat egg in a bowl. Season with salt and pepper. Set aside.', 'timerSeconds' => 30, 'equipment' => ['Bowl', 'Fork']],
                ['title' => 'Step 2: The Char', 'instruction' => 'Grill or char eggplant directly over stove flame until skin is blackened all around.', 'timerSeconds' => 300, 'equipment' => ['Stove', 'Tongs']],
                ['title' => 'Step 3: Flatten Eggplant', 'instruction' => 'Peel off the charred skin, then flatten the flesh with a fork.', 'timerSeconds' => 120, 'equipment' => ['Plate', 'Fork']],
                ['title' => 'Step 4: The Fry', 'instruction' => 'Dip flattened eggplant in beaten egg and fry both sides until golden.', 'timerSeconds' => 180, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 5: Serve', 'instruction' => 'Once the egg is fully cooked, turn off the heat. Plate and serve hot. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['eggplant', 'egg', 'salt', 'pepper', 'oil'],
            'equipment' => ['Bowl', 'Fork', 'Stove', 'Tongs', 'Plate', 'Frying Pan', 'Spatula'],
            'likes' => 7,
        ]);

        Recipe::create([
            'name' => 'Pritong Isda',
            'image' => 'pritong-isda.jpg',
            'cook_time' => 15,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Clean and gut the fish. Score both sides with diagonal cuts. Rub salt all over and let rest for a few minutes. Set aside.', 'timerSeconds' => 60, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: The Heat', 'instruction' => 'Heat enough oil in a pan over medium-high heat.', 'timerSeconds' => 60, 'equipment' => ['Frying Pan']],
                ['title' => 'Step 3: The Fry', 'instruction' => 'Carefully place fish in hot oil. Fry each side until golden and crispy. Do not flip too early.', 'timerSeconds' => 300, 'equipment' => ['Frying Pan', 'Tongs']],
                ['title' => 'Step 4: Serve', 'instruction' => 'Drain on a paper towel. Serve with rice and sawsawan (toyo, suka, or calamansi). Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate', 'Paper Towel']],
            ]),
            'ingredients' => ['fish', 'bangus', 'tilapia', 'galunggong', 'salt', 'cooking oil'],
            'equipment' => ['Knife', 'Chopping Board', 'Frying Pan', 'Tongs', 'Plate', 'Paper Towel'],
            'likes' => 8,
        ]);

        Recipe::create([
            'name' => 'Giniling na Baboy',
            'image' => 'giniling-na-baboy.jpg',
            'cook_time' => 25,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Mince garlic, dice onion and tomato. Cube potato or carrot if using. Set aside.', 'timerSeconds' => 60, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: The Saute', 'instruction' => 'Heat oil in a pan. Saute garlic and onion until soft, then add tomato and cook until mushy.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 3: The Pork', 'instruction' => 'Add ground pork. Cook and break apart until browned and no longer pink.', 'timerSeconds' => 300, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 4: The Season', 'instruction' => 'Add soy sauce and fish sauce or salt. Mix in potato or carrot if using. Cook until veggies are tender.', 'timerSeconds' => 300, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 5: Serve', 'instruction' => 'Season with pepper. Taste and adjust. Serve hot with rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['ground pork', 'garlic', 'onion', 'tomato', 'soy sauce', 'fish sauce', 'salt', 'pepper', 'cooking oil', 'potato', 'carrot'],
            'equipment' => ['Knife', 'Chopping Board', 'Frying Pan', 'Spatula', 'Plate'],
            'likes' => 9,
        ]);

        Recipe::create([
            'name' => 'Bistek Tagalog',
            'image' => 'bistek-tagalog.jpg',
            'cook_time' => 40,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Slice beef thinly. Mince garlic. Slice onion into rings. Set aside.', 'timerSeconds' => 60, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: The Marinade', 'instruction' => 'Combine soy sauce, calamansi juice, garlic, and pepper. Marinate beef for at least 30 minutes.', 'timerSeconds' => 1800, 'equipment' => ['Bowl']],
                ['title' => 'Step 3: The Sear', 'instruction' => 'Heat oil in a pan over high heat. Sear beef slices quickly on both sides. Set aside.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Tongs']],
                ['title' => 'Step 4: The Sauce', 'instruction' => 'Pour leftover marinade into the pan. Add a little water and bring to a simmer.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan', 'Ladle']],
                ['title' => 'Step 5: The Onion', 'instruction' => 'Add onion rings on top. Do not stir, let them steam and soften. Return beef to the pan and coat with sauce.', 'timerSeconds' => 120, 'equipment' => ['Frying Pan']],
                ['title' => 'Step 6: Serve', 'instruction' => 'Plate and serve hot with rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['beef sirloin', 'soy sauce', 'calamansi', 'lemon juice', 'garlic', 'onion', 'pepper', 'cooking oil', 'water'],
            'equipment' => ['Knife', 'Chopping Board', 'Bowl', 'Frying Pan', 'Tongs', 'Ladle', 'Plate'],
            'likes' => 11,
        ]);

        Recipe::create([
            'name' => 'Pork Hamonado',
            'image' => 'pork-hamonado.jpg',
            'cook_time' => 35,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Mince garlic. Mix soy sauce, pineapple juice, and sugar in a bowl. Marinate pork for 15-30 minutes. Set aside.', 'timerSeconds' => 1800, 'equipment' => ['Bowl', 'Knife']],
                ['title' => 'Step 2: The Sear', 'instruction' => 'Heat oil in a pan. Saute garlic then sear pork until browned on both sides.', 'timerSeconds' => 180, 'equipment' => ['Frying Pan', 'Spatula']],
                ['title' => 'Step 3: The Simmer', 'instruction' => 'Pour in the marinade. Simmer on low heat until pork is tender and sauce thickens.', 'timerSeconds' => 600, 'equipment' => ['Frying Pan', 'Ladle']],
                ['title' => 'Step 4: Serve', 'instruction' => 'Taste and adjust sweetness. Plate and serve hot with rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['pork', 'pork belly', 'soy sauce', 'pineapple juice', 'sugar', 'garlic', 'cooking oil'],
            'equipment' => ['Bowl', 'Knife', 'Frying Pan', 'Spatula', 'Ladle', 'Plate'],
            'likes' => 7,
        ]);

        Recipe::create([
            'name' => 'Pritong Tuyo with Garlic',
            'image' => 'pritong-tuyo.jpg',
            'cook_time' => 10,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Crush or slice garlic. Set aside vinegar as dipping sauce.', 'timerSeconds' => 30, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: The Fry', 'instruction' => 'Heat oil in a pan. Fry garlic until golden then fry tuyo on both sides until crispy.', 'timerSeconds' => 180, 'equipment' => ['Frying Pan', 'Tongs']],
                ['title' => 'Step 3: Serve', 'instruction' => 'Drain on paper towel. Serve with vinegar dip and garlic rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate', 'Paper Towel']],
            ]),
            'ingredients' => ['tuyo', 'dried herring', 'garlic', 'cooking oil', 'vinegar'],
            'equipment' => ['Knife', 'Chopping Board', 'Frying Pan', 'Tongs', 'Plate', 'Paper Towel'],
            'likes' => 6,
        ]);

        Recipe::create([
            'name' => 'Lugaw',
            'image' => 'lugaw.jpg',
            'cook_time' => 40,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Mince garlic, slice ginger and onion. Slice green onion for topping. Set aside.', 'timerSeconds' => 60, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: The Saute', 'instruction' => 'Heat oil in a pot. Saute garlic, ginger, and onion until fragrant.', 'timerSeconds' => 60, 'equipment' => ['Pot', 'Spatula']],
                ['title' => 'Step 3: The Porridge', 'instruction' => 'Add rice and broth or water. Bring to a boil then lower heat. Stir occasionally and simmer until rice breaks down into a thick porridge.', 'timerSeconds' => 1800, 'equipment' => ['Pot', 'Ladle']],
                ['title' => 'Step 4: Serve', 'instruction' => 'Season with fish sauce and pepper. Top with green onion and toasted garlic. Serve hot and enjoy!', 'timerSeconds' => 0, 'equipment' => ['Bowl']],
            ]),
            'ingredients' => ['rice', 'ginger', 'garlic', 'onion', 'chicken broth', 'water', 'bouillon', 'fish sauce', 'salt', 'pepper', 'green onion'],
            'equipment' => ['Knife', 'Chopping Board', 'Pot', 'Spatula', 'Ladle', 'Bowl'],
            'likes' => 8,
        ]);

        Recipe::create([
            'name' => 'Egg Drop Soup',
            'image' => 'egg-drop-soup.jpg',
            'cook_time' => 15,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Beat eggs in a bowl. Slice green onion. Dissolve bouillon cube in hot water if no broth. Set aside.', 'timerSeconds' => 60, 'equipment' => ['Bowl', 'Fork', 'Knife']],
                ['title' => 'Step 2: The Broth', 'instruction' => 'Bring broth to a boil in a pot. Season with salt and pepper.', 'timerSeconds' => 180, 'equipment' => ['Pot', 'Ladle']],
                ['title' => 'Step 3: The Egg', 'instruction' => 'Slowly drizzle beaten egg into the boiling broth while stirring gently in circles to create ribbons.', 'timerSeconds' => 60, 'equipment' => ['Pot', 'Ladle']],
                ['title' => 'Step 4: Serve', 'instruction' => 'Top with green onion. Serve hot as soup or with rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Bowl']],
            ]),
            'ingredients' => ['eggs', 'chicken broth', 'water', 'bouillon cube', 'garlic', 'green onion', 'salt', 'pepper', 'cornstarch'],
            'equipment' => ['Bowl', 'Fork', 'Knife', 'Pot', 'Ladle'],
            'likes' => 6,
        ]);

        Recipe::create([
            'name' => 'Chili Peanut Noodles',
            'image' => 'chili-peanut-noodles.jpg',
            'cook_time' => 15,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Prepare your instant noodles, peanut butter, chili oil, and soy sauce. Set aside.', 'timerSeconds' => 30, 'equipment' => ['Bowl']],
                ['title' => 'Step 2: Boil noodles', 'instruction' => 'Boil your noodles in a pot until cooked.', 'timerSeconds' => 300, 'equipment' => ['Pot']],
                ['title' => 'Step 3: Make the sauce', 'instruction' => 'In a bowl, mix your peanut butter, chili oil, and soy sauce for the peanut sauce.', 'timerSeconds' => 120, 'equipment' => ['Bowl']],
                ['title' => 'Step 4: Serve', 'instruction' => 'Mix the noodles with the sauce thoroughly and enjoy!', 'timerSeconds' => 0, 'equipment' => ['Bowl']],
            ]),
            'ingredients' => ['instant noodles', 'peanut butter', 'chili oil', 'soy sauce'],
            'equipment' => ['Bowl', 'Pot'],
            'likes' => 9,
        ]);

        Recipe::create([
            'name' => 'Creamy Tuna Pasta',
            'image' => 'creamy-tuna-pasta.jpg',
            'cook_time' => 20,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Slice onion. Open canned tuna. Prepare all purpose cream and cheese. Set aside.', 'timerSeconds' => 30, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Boil pasta', 'instruction' => 'Boil your pasta in a pot to an al dente state.', 'timerSeconds' => 480, 'equipment' => ['Pot']],
                ['title' => 'Step 3: Make the sauce', 'instruction' => 'Saute butter and onion in a pan. Add canned tuna and saute. Pour in all purpose cream and let it simmer.', 'timerSeconds' => 300, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 4: Serve', 'instruction' => 'Put the noodles into the pan and toss. Plate and serve with cheese on top. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['pasta', 'canned tuna', 'butter', 'onion', 'all purpose cream', 'cheese'],
            'equipment' => ['Knife', 'Chopping Board', 'Pot', 'Pan', 'Spatula', 'Plate'],
            'likes' => 10,
        ]);

        Recipe::create([
            'name' => 'Ginisang Sardinas',
            'image' => 'ginisang-sardinas.jpg',
            'cook_time' => 15,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Mince garlic, slice onion. Prepare pechay and canned sardines. Set aside.', 'timerSeconds' => 60, 'equipment' => ['Knife', 'Chopping Board']],
                ['title' => 'Step 2: Saute', 'instruction' => 'Saute onion and garlic in a pan.', 'timerSeconds' => 180, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 3: Add sardines', 'instruction' => 'Add the sardines, salt and pepper in the pan and let it boil. Add water if needed.', 'timerSeconds' => 300, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 4: Add pechay', 'instruction' => 'Add pechay into the pan and let it simmer.', 'timerSeconds' => 240, 'equipment' => ['Pan']],
                ['title' => 'Step 5: Serve', 'instruction' => 'Plate and serve hot with rice. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['canned sardines', 'pechay', 'onion', 'garlic', 'oil', 'salt', 'pepper'],
            'equipment' => ['Knife', 'Chopping Board', 'Pan', 'Spatula', 'Plate'],
            'likes' => 7,
        ]);

        Recipe::create([
            'name' => 'Cabbage Omelette',
            'image' => 'cabbage-omelette.jpg',
            'cook_time' => 15,
            'instructions' => json_encode([
                ['title' => 'Step 1: The Prep', 'instruction' => 'Chop up the cabbage thinly. Crack an egg into a bowl and whisk it. Add salt and pepper. Mix in the cabbage. Set aside.', 'timerSeconds' => 120, 'equipment' => ['Knife', 'Chopping Board', 'Bowl', 'Fork']],
                ['title' => 'Step 2: Fry', 'instruction' => 'Heat oil in a pan. Fry the batter in small circular pieces until golden on both sides.', 'timerSeconds' => 300, 'equipment' => ['Pan', 'Spatula']],
                ['title' => 'Step 3: Serve', 'instruction' => 'Plate and serve hot. Enjoy!', 'timerSeconds' => 0, 'equipment' => ['Plate']],
            ]),
            'ingredients' => ['cabbage', 'egg', 'salt', 'pepper', 'oil'],
            'equipment' => ['Knife', 'Chopping Board', 'Bowl', 'Fork', 'Pan', 'Spatula', 'Plate'],
            'likes' => 5,
        ]);
    }
}