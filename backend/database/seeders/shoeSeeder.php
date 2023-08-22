<?php

namespace Database\Seeders;

use App\Models\Shoe;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class shoeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Shoe::insert([
            // timnerland shoes
            ['title'=>'Killington Trekker Boot', 'gender'=>'men', 'price'=>1350, 'imgPath'=>'timberland/1.jpg', 'qtStock'=>10, 'color'=>'yellow', 'rating'=>4.5, 'category_id'=>1, 'brand_id'=>1],
            ['title'=>'Euro Hiker Chukka', 'gender'=>'men', 'price'=>900, 'imgPath'=>'timberland/3.jpg', 'qtStock'=>10, 'color'=>'grey', 'rating'=>4.2, 'category_id'=>1, 'brand_id'=>1],
            ['title'=>'Sky Chelsea Boot ', 'gender'=>'women', 'price'=>1200, 'imgPath'=>'timberland/6.jpg', 'qtStock'=>10, 'color'=>'grey', 'rating'=>4.3, 'category_id'=>1, 'brand_id'=>1],
            ['title'=>'Radford 6 Inch Boot', 'gender'=>'men', 'price'=>1500, 'imgPath'=>'timberland/2.jpg', 'qtStock'=>10, 'color'=>'yellow', 'rating'=>4.7, 'category_id'=>1, 'brand_id'=>1],
            ['title'=>'TBL® Turbo Trainer', 'gender'=>'women', 'price'=>1000, 'imgPath'=>'timberland/5.jpg', 'qtStock'=>10, 'color'=>'yellow', 'rating'=>4.2, 'category_id'=>1, 'brand_id'=>1],
            ['title'=>'Heritage LNY 6 Inch Boot', 'gender'=>'women', 'price'=>1300, 'imgPath'=>'timberland/4.jpg', 'qtStock'=>10, 'color'=>'black', 'rating'=>4.1, 'category_id'=>1, 'brand_id'=>1],

            // nike shoes
            ['title'=>'Air Max Excee Sneakers', 'gender'=>'men', 'price'=>700, 'imgPath'=>'nike/1.jpg', 'qtStock'=>10, 'color'=>'white', 'rating'=>4.5, 'category_id'=>2, 'brand_id'=>2],
            ['title'=>'Court Vision Alta Leather Platform Sneakers', 'gender'=>'women', 'price'=>850, 'imgPath'=>'nike/3.jpg', 'qtStock'=>10, 'color'=>'white', 'rating'=>4.3, 'category_id'=>2, 'brand_id'=>2],
            ['title'=>'Renew Elevate III Basketball Shoes', 'gender'=>'men', 'price'=>500, 'imgPath'=>'nike/6.jpg', 'qtStock'=>10, 'color'=>'blue', 'rating'=>4.9, 'category_id'=>2, 'brand_id'=>2],
            ['title'=>'Revolution 6 Next Nature Sustainable Running Shoes', 'gender'=>'women', 'price'=>650, 'imgPath'=>'nike/2.jpg', 'qtStock'=>10, 'color'=>'black', 'rating'=>4.1, 'category_id'=>2, 'brand_id'=>2],
            ['title'=>'Air Max Systm Sneakers', 'gender'=>'men', 'price'=>900, 'imgPath'=>'nike/4.jpg', 'qtStock'=>10, 'color'=>'black', 'rating'=>4.0, 'category_id'=>2, 'brand_id'=>2],
            ['title'=>'Downshifter 12 Running Shoes', 'gender'=>'women', 'price'=>650, 'imgPath'=>'nike/5.jpg', 'qtStock'=>10, 'color'=>'blue', 'rating'=>4.7, 'category_id'=>2, 'brand_id'=>2],

            // vans shoes
            ['title'=>'Filmore High-Top Skate Shoes', 'gender'=>'women', 'price'=>700, 'imgPath'=>'vans/1.jpg', 'qtStock'=>10, 'color'=>'white', 'rating'=>4.45, 'category_id'=>1, 'brand_id'=>3],
            ['title'=>'Ward Skate Shoes', 'gender'=>'men', 'price'=>700, 'imgPath'=>'vans/2.jpg', 'qtStock'=>10, 'color'=>'black', 'rating'=>4.75, 'category_id'=>1, 'brand_id'=>3],
            ['title'=>'Asher Checker Skate Shoes', 'gender'=>'women', 'price'=>650, 'imgPath'=>'vans/3.jpg', 'qtStock'=>10, 'color'=>'black', 'rating'=>4.5, 'category_id'=>1, 'brand_id'=>3],
            ['title'=>'Atwood Skate Shoes', 'gender'=>'men', 'price'=>650, 'imgPath'=>'vans/4.jpg', 'qtStock'=>10, 'color'=>'grey', 'rating'=>4.7, 'category_id'=>1, 'brand_id'=>3],
            ['title'=>'Filmore Hi Platform Skate Shoes', 'gender'=>'women', 'price'=>850, 'imgPath'=>'vans/5.jpg', 'qtStock'=>10, 'color'=>'black', 'rating'=>5.0, 'category_id'=>1, 'brand_id'=>3],
            ['title'=>'Doheny Skate Shoes', 'gender'=>'men', 'price'=>600, 'imgPath'=>'vans/6.jpg', 'qtStock'=>10, 'color'=>'black', 'rating'=>4.65, 'category_id'=>1, 'brand_id'=>3],


            // adidas shoes
            ['title'=>'Questar Sneakers', 'gender'=>'men', 'price'=>400, 'imgPath'=>'adidas/1.jpg', 'qtStock'=>10, 'color'=>'white', 'rating'=>4.6, 'category_id'=>2, 'brand_id'=>4],
            ['title'=>'Grand Court 2.0 Sneakers', 'gender'=>'women', 'price'=>700, 'imgPath'=>'adidas/2.jpg', 'qtStock'=>10, 'color'=>'white', 'rating'=>5.0, 'category_id'=>2, 'brand_id'=>4],
            ['title'=>'Puremotion Adapt Slip-On Sneakers', 'gender'=>'women', 'price'=>600, 'imgPath'=>'adidas/3.jpg', 'qtStock'=>10, 'color'=>'black', 'rating'=>4.5, 'category_id'=>2, 'brand_id'=>4],
            ['title'=>'Duramo 10 Running Shoes', 'gender'=>'men', 'price'=>600, 'imgPath'=>'adidas/4.jpg', 'qtStock'=>10, 'color'=>'black', 'rating'=>5.0, 'category_id'=>2, 'brand_id'=>4],
            ['title'=>'Racer TR 21 Sustainable Sneakers', 'gender'=>'men', 'price'=>700, 'imgPath'=>'adidas/5.jpg', 'qtStock'=>10, 'color'=>'black', 'rating'=>4.5, 'category_id'=>2, 'brand_id'=>4],
            ['title'=>'Puremotion Super Sustainable Training Shoes', 'gender'=>'women', 'price'=>650, 'imgPath'=>'adidas/6.jpg', 'qtStock'=>10, 'color'=>'black', 'rating'=>4.0, 'category_id'=>2, 'brand_id'=>4],

            // converse shoes
            ['title'=>'Chuck Taylor All Star Lift Hi High-Top Platform Sneakers', 'gender'=>'women', 'price'=>750, 'imgPath'=>'converse/1.jpg', 'qtStock'=>10, 'color'=>'white', 'rating'=>4.6, 'category_id'=>1, 'brand_id'=>5],
            ['title'=>'Chuck Taylor All Star Foundation Ox Sneakers', 'gender'=>'men', 'price'=>600, 'imgPath'=>'converse/2.jpg', 'qtStock'=>10, 'color'=>'white', 'rating'=>3, 'category_id'=>1, 'brand_id'=>5],
            ['title'=>'Chuck Taylor All Star Hi Street Canvas Sneakers', 'gender'=>'men', 'price'=>650, 'imgPath'=>'converse/3.jpg', 'qtStock'=>10, 'color'=>'blue', 'rating'=>4.1, 'category_id'=>1, 'brand_id'=>5],
            ['title'=>'Madison Mid-Top Sneakers', 'gender'=>'women', 'price'=>650, 'imgPath'=>'converse/4.jpg', 'qtStock'=>10, 'color'=>'black', 'rating'=>4.75, 'category_id'=>1, 'brand_id'=>5],
            ['title'=>'CTAS Malden HI Sneakers', 'gender'=>'men', 'price'=>650, 'imgPath'=>'converse/5.jpg', 'qtStock'=>10, 'color'=>'grey', 'rating'=>5.0, 'category_id'=>1, 'brand_id'=>5],
            ['title'=>'Chuck Taylor All Star Shoreline Sneakers', 'gender'=>'women', 'price'=>600, 'imgPath'=>'converse/6.jpg', 'qtStock'=>10, 'color'=>'white', 'rating'=>4.65, 'category_id'=>1, 'brand_id'=>5],
        ]);
    }
}
