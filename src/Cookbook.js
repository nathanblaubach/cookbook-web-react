import React from 'react';
import Tags from './Tags.js';
import Recipes from './Recipes.js';
import './Cookbook.css';

class Cookbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [
        { key: 0, name: "Beverage" },
        { key: 1, name: "Hors d'oeuvre" },
        { key: 2, name: "Main Entree" },
        { key: 3, name: "Salad" },
        { key: 4, name: "Side Dish" },
        { key: 5, name: "Soup" },
        { key: 6, name: "Bread" },
        { key: 7, name: "Breakfast" },
        { key: 8, name: "Dessert" },
        { key: 9, name: "Miscellaneous" },
      ],
      recipes: [
        // Beverages
        { tag: 0, name: "Hot Mulled Cider" },
        { tag: 0, name: "Cranberry Tea" },
        { tag: 0, name: "Hot Cocoa Mix" },
        { tag: 0, name: "Cindy Smith's Punch" },
        { tag: 0, name: "7-Up Punch" },
        { tag: 0, name: "Orange Rind Curls" },
        { tag: 0, name: "Slush Sparkle" },
        { tag: 0, name: "Tomato Cocktail" },
        { tag: 0, name: "Fruit Smoothies" },
        { tag: 0, name: "White Grape Punch" },
        { tag: 0, name: "Summertime Slush" },
        { tag: 0, name: "Chai Tea" },
        
        // Hors d'oeuvre
        { tag: 1, name: "Hot Spinach Artichocke Dip" },
        { tag: 1, name: "Fresh Fruit Dip" },
        { tag: 1, name: "Chestnuts" },
        { tag: 1, name: "Cheese Ball" },
        { tag: 1, name: "Little Smokies" },
        { tag: 1, name: "Reuben Spread" },
        { tag: 1, name: "Cheese Dreams" },
        { tag: 1, name: "Taco Salad" },
        { tag: 1, name: "Vegetable Dip" },
        { tag: 1, name: "Fruit Dip" },
        { tag: 1, name: "Caramel Apple Dip" },
        { tag: 1, name: "Apple Snickers" },
        { tag: 1, name: "Nuts And Bolts" },
        { tag: 1, name: "Joni's Wedding Chex Mix" },
        { tag: 1, name: "Spinach Dip in a Bread Bowl" },
        { tag: 1, name: "Chicken Pillows" },
        
        // Main Entree
        { tag: 2, name: "Bar-B-Q Ribs" },
        { tag: 2, name: "Taco Casserole" },
        { tag: 2, name: "Corn Beef Casserole" },
        { tag: 2, name: "Frikadellas (Norwegian Meatballs)" },
        { tag: 2, name: "Stuffed Peppers" },
        { tag: 2, name: "Reuben Loaf" },
        { tag: 2, name: "Sloppy Joe" },
        { tag: 2, name: "Chop Suey Casserole" },
        { tag: 2, name: "Belly Burner Meat Balls" },
        { tag: 2, name: "Hamburger Pie" },
        { tag: 2, name: "Oven Swedish Meatballs" },
        { tag: 2, name: "Brown's BBQ Beef Supreme Sloppy Joes" },
        { tag: 2, name: "Beautiful Baked Ziti" },
        { tag: 2, name: "Beef Stroganoff" },
        { tag: 2, name: "Tater Tot Casserole" },
        { tag: 2, name: "Colorado Pie" },
        { tag: 2, name: "Pizza Style Fondue" },
        { tag: 2, name: "Kathy's Spaghetti Sauce" },
        { tag: 2, name: "Diane's Thick Pan Pizza" },
        { tag: 2, name: "Stir Fried Beef and Broccoli" },
        { tag: 2, name: "Rice and Peanut Gravy Beef" },
        { tag: 2, name: "Easy Pork Chops" },
        { tag: 2, name: "Ham and Spaghetti" },
        { tag: 2, name: "Chicken Salad" },
        { tag: 2, name: "Cheesy Ham and Broccoli Casserole" },
        { tag: 2, name: "Creamy Italian Chicken" },
        { tag: 2, name: "Chili-Cheese Black Bean Enchiladas" },
        { tag: 2, name: "Honey Baked Chicken" },
        { tag: 2, name: "Chicken and Broccoli Casserole" },
        { tag: 2, name: "Turkey Tetrazzini" },
        { tag: 2, name: "Chicken Rolls" },
        { tag: 2, name: "Lasanga Primavera" },
        { tag: 2, name: "California Chicken - Crock Pot" },
        { tag: 2, name: "Chicken Alfredo Lasanga" },
        { tag: 2, name: "Chicken Couscous" },
        { tag: 2, name: "Holly's Impossible Chicken Broccoli Pie" },
        { tag: 2, name: "Kathy's Chicken and Rice" },
        { tag: 2, name: "Kathy's Tacos de Gallina" },
        { tag: 2, name: "Tomato-Basil Chicken" },
        { tag: 2, name: "Fettuccine and Chicken in Herb Sauce" },
        { tag: 2, name: "Thai Chicken and Cashews" },
        { tag: 2, name: "Frozen Fruit Cup" },
        { tag: 2, name: "Chicken and Vegetable Lasagna - Crock Pot" },
        { tag: 2, name: "Chicken Sate with Ponzu Sauce" },
        { tag: 2, name: "Chicken Mushroom Crepes" },
        { tag: 2, name: "Marinade for Tri-tip" },
        
        // Salad
        { tag: 3, name: "Lettuce and Mandarine Orange Salad" },
        { tag: 3, name: "Linda's Sweet and Sour Dressing" },
        { tag: 3, name: "Korean Salad" },
        { tag: 3, name: "Gourmet Salad" },
        { tag: 3, name: "Layered Overnight Salad" },
        
        // Side Dish
        { tag: 4, name: "Sweet Potato Hash" },
        { tag: 4, name: "Au Gratin Potatoes" },
        { tag: 4, name: "Mashed Potato Casserole" },
        { tag: 4, name: "Pizza Potatoes" },
        { tag: 4, name: "Hidden Valley Ranch Potatoes" },
        { tag: 4, name: "Banana Pineapple Salad" },
        { tag: 4, name: "7-Up Salad" },
        { tag: 4, name: "Linda's Sparkling Fruit Mold" },
        { tag: 4, name: "Mississippi Corn Bread Salad" },
        { tag: 4, name: "Ramen Noodle Salad" },
        { tag: 4, name: "Marilee's 3 Bean Salad" },
        { tag: 4, name: "Ann's Fruit Salad" },
        { tag: 4, name: "Vegetable Salad" },
        { tag: 4, name: "Marinated Vegetables" },
        { tag: 4, name: "Marilee's Broccoli and Grape Salad" },
        { tag: 4, name: "German Potato Salad" },
        { tag: 4, name: "Susie's Vegetable Casserole" },
        { tag: 4, name: "Candied Sweet Potatoes" },
        { tag: 4, name: "Green Bean Casserole" },
        { tag: 4, name: "Linda's Cheesy Broccoli Bake" },
        { tag: 4, name: "Onion Pie" },
        { tag: 4, name: "Chi-Chi's Sweet Corn Cake" },
        { tag: 4, name: "Zucchini Casserole" },
        { tag: 4, name: "Linda's 5 Way Beans" },
        { tag: 4, name: "Marilee's Golden Cheddar Broccoli Bake" },
        { tag: 4, name: "Marilee's Calico Beans" },
        { tag: 4, name: "Diane's Del Monico Potatoes" },
        { tag: 4, name: "Boston Baked Beans" },
        { tag: 4, name: "Diane's Carrot Casserole" },
        { tag: 4, name: "Linda's Super Rice" },
        { tag: 4, name: "Kathryn's Pickled Beets" },
        { tag: 4, name: "Gary and Beas's Pickles" },
        { tag: 4, name: "Candied Dill Pickles" },
        { tag: 4, name: "VCY Refrigerator Pickles" },
        
        // Soup
        { tag: 5, name: "Wild Rice Soup" },
        { tag: 5, name: "Taco Soup" },
        { tag: 5, name: "Taco Soup (2?)" },
        { tag: 5, name: "Creamy Onion Spinach Soup" },
        { tag: 5, name: "Cheese-Broccoli Soup" },
        { tag: 5, name: "Dad's Vegetable Soup" },
        //{ tag: 5, name: "-- Page 56 --" },
        { tag: 5, name: "Souper Chili" },
        
        // Bread
        { tag: 6, name: "Pizza Dough" },
        { tag: 6, name: "Marilee's Zucchini Bread" },
        { tag: 6, name: "Honey Buns" },
        { tag: 6, name: "Holly's Potato Dough" },
        { tag: 6, name: "Holly's Honey Whole Wheat Bread" },
        { tag: 6, name: "Carmel Bubble Rolls" },
        { tag: 6, name: "Grandma Conklyn's Cinnamon Rolls" },
        { tag: 6, name: "Krantz" },
        { tag: 6, name: "Banana Nut Bread" },
        { tag: 6, name: "Christmas Stolen" },
        { tag: 6, name: "Parmesan Rolls" },
        { tag: 6, name: "Mom's Butterhorn Rolls" },
        { tag: 6, name: "Kathy's Cranberry Bread" },
        { tag: 6, name: "Mom's Banana Bread" },
        { tag: 6, name: "Pumpkin Bread" },
        { tag: 6, name: "Bran Muffins" },
        { tag: 6, name: "Cranberry Almond Sour Cream Bread" },
        { tag: 6, name: "Holly's Oatmeal Bread" },
        { tag: 6, name: "Blueberry Oatmeal Muffins" },
        
        // Breakfast
        { tag: 7, name: "Breakfast Egg-Souffle" },
        { tag: 7, name: "Sunny Frittata" },
        { tag: 7, name: "Crepes" },
        { tag: 7, name: "Holly's Pancake Mix" },
        { tag: 7, name: "Kathy's Whole Wheat Pancakes" },
        { tag: 7, name: "Christmas Eggs" },
        { tag: 7, name: "Scrambled Eggs and Noodles" },
        { tag: 7, name: "Breakfast Casserole" },
        { tag: 7, name: "Coffee Cake Streusel" },
        
        // Dessert
        { tag: 8, name: "Cake Cookies" },
        { tag: 8, name: "Christmas Jello" },
        { tag: 8, name: "Cartwheel Desserts" },
        { tag: 8, name: "Key Lime Pie" },
        { tag: 8, name: "Cherry or Blueberry Dessert" },
        { tag: 8, name: "Fluffy Strawberry Frosting" },
        { tag: 8, name: "Rhubarb Crunch" },
        { tag: 8, name: "Linda's Pumpkin Pie Cake" },
        { tag: 8, name: "Schaum Torte" },
        { tag: 8, name: "Mexican Wedding Cake" },
        { tag: 8, name: "Browned Butter Frosting" },
        { tag: 8, name: "Texas Sheet Cake" },
        { tag: 8, name: "Frosting for Texas Sheet Cake" },
        { tag: 8, name: "Self Frosted Chocolate Bundt Cake" },
        { tag: 8, name: "Orange Tapioca Jello" },
        { tag: 8, name: "Reese Peanut Bars" },
        { tag: 8, name: "Orange Delight" },
        { tag: 8, name: "Lemon-Lime Cream Jello" },
        { tag: 8, name: "Caramel Nutties" },
        { tag: 8, name: "French Butter Horns" },
        { tag: 8, name: "Oatmeal Carmel Bars" },
        { tag: 8, name: "Lemon Bars" },
        { tag: 8, name: "Kathy's Blonde Brownies" },
        { tag: 8, name: "Chocolate Fudge Tarts" },
        { tag: 8, name: "Chocolate Scotcheroos" },
        { tag: 8, name: "California Dream Bars" },
        { tag: 8, name: "Pumpkin Bars" },
        { tag: 8, name: "Kathy's Brownie Recipe" },
        { tag: 8, name: "Rhubarb Sauce" },
        { tag: 8, name: "Caramel Layer Choco-Squares" },
        { tag: 8, name: "Holly's Apple Bars" },
        { tag: 8, name: "Brownies with Peanut Butter Frosting" },
        { tag: 8, name: "7 Layer Bars" },
        { tag: 8, name: "Gingerbread Bars" },
        { tag: 8, name: "Carol's No-Bake Cookies" },
        { tag: 8, name: "Aunt Ollie's Butter Scotch Icebox Cookies" },
        { tag: 8, name: "Aunt Jennie's Sugar Cookie" },
        { tag: 8, name: "Peppermint Meringue Kisses" },
        { tag: 8, name: "Ginger Snaps" },
        { tag: 8, name: "Pecan Shorts" },
        { tag: 8, name: "Molasses Cookies" },
        { tag: 8, name: "Thumbprints - Butterballs" },
        { tag: 8, name: "Swedish Heirlooms" },
        { tag: 8, name: "Peanut Butter Cookies" },
        { tag: 8, name: "Easy Apple Crisp" },
        { tag: 8, name: "Sandbaker" },
        { tag: 8, name: "Linda's Five Flavor Cake" },
        { tag: 8, name: "Italian Dunkers" },
        { tag: 8, name: "Apple Cranberry Cobbler" },
        { tag: 8, name: "Glorified Ginger Cake" },
        { tag: 8, name: "Rosy Rhubarb Cake" },
        { tag: 8, name: "Holly's Twinkies" },
        { tag: 8, name: "Pinchme Cake (Monkey Bread)" },
        { tag: 8, name: "Linda's Cream Cheese Pound Cake" },
        { tag: 8, name: "Grandma Conklyn's Apple Cake" },
        { tag: 8, name: "Mom's Sour Cream Cookies" },
        { tag: 8, name: "Ohio Buckeye's" },
        { tag: 8, name: "Chocolate Ice Box Torte" },
        { tag: 8, name: "Company Cheese Cake" },
        { tag: 8, name: "Blitz Torte" },
        { tag: 8, name: "Petite Cheese Cakes" },
        { tag: 8, name: "Puppy Chow" },
        { tag: 8, name: "Elizabeth's Rhubarb Cake" },
        { tag: 8, name: "Spice Cake in a Jar" },
        { tag: 8, name: "Mom's Cheese Torte" },
        { tag: 8, name: "Apple Delight" },
        { tag: 8, name: "Meringue" },
        { tag: 8, name: "Jello Torte" },
        { tag: 8, name: "Holly's Chocolate Eclair Torte" },
        { tag: 8, name: "Luscious 4 Layer Pumpkin Cake" },
        { tag: 8, name: "Aunt Jennie's Chocolate Pie" },
        { tag: 8, name: "Pumpkin Torte" },
        { tag: 8, name: "Holly's Apple Pizza Pie" },
        { tag: 8, name: "Pumkin Pie" },
        { tag: 8, name: "Aunt Jenny's Lemon Meringue Pie" },
        { tag: 8, name: "Fruit Pizza" },
        { tag: 8, name: "Holly's Chocolate Chip Brittle" },
        { tag: 8, name: "Chocolate Mousse Pie" },
        { tag: 8, name: "Holly's Peanut Butter Balls" },
        { tag: 8, name: "Yummy Chocolate Brownies" },
        { tag: 8, name: "Penny's Time-Saving Caramels" },
        { tag: 8, name: "Peanut Butter Temptations" },
        { tag: 8, name: "Oven-Baked Caramel Corn" },
        { tag: 8, name: "Buttery Toffee" },
        { tag: 8, name: "Paul and Di's Hand Dipped Creams" },
        { tag: 8, name: "Fudge" },
        { tag: 8, name: "Mints" },
        { tag: 8, name: "Krantz" },
        
        // Miscellaneous
        { tag: 9, name: "Kathy's Play Dough" },
        { tag: 9, name: "Mac's Window Cleaning Solution" },
      ],
      checkedTags: [],
      searchString: "",
    }
  }

  handleSearchBarChange() {
    this.setState({
      searchString: document.getElementById('searchText').value.toUpperCase(),
    });
  }

  handleTagSelectionChange(i) {
    let updatedTags;
    if (this.state.checkedTags.includes(i)) {
      updatedTags = this.state.checkedTags.filter(cat => cat !== i);
    } else {
      updatedTags = this.state.checkedTags.concat(i);
    }
    this.setState({
      checkedTags: updatedTags,
    });
  }

  render() {
    return (
      <div className="Cookbook">
        <header className="Cookbook-header">
          <h1 className="Cookbook-title">Cookbook</h1>
          <input type="text" className="form-control" id="searchText" onKeyUp={() => this.handleSearchBarChange()} />
        </header>
        <div className="row">
          <div className="col-lg-3">
            <Tags 
              tags={this.state.tags}
              onChange={(i) => this.handleTagSelectionChange(i)}
            />
          </div>
          <div className="col-lg-9">
            <Recipes
              recipes={this.state.recipes}
              searchString={this.state.searchString}
              checkedTags={this.state.checkedTags}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Cookbook;
