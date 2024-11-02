using System.Text.Json;
using Meals.Adapters;

namespace Meals.Tests.Unit.JsonRecipeRepositoryTests;

public class FakeJsonRecipeFileReader : IReader
{
    private readonly IEnumerable<Recipe> _recipes =
    [
        new ()
        {
            Id = 0,
            Name = "Chocolate Chip Cookies",
            Category = "Dessert",
            Ingredients = [
                "3 1/4 cups flour", "1 teaspoon baking soda", "3/4 teaspoon salt",
                "1 1/3 cups butter, softened",
                "1 1/4 cups granulated sugar", "1 cup firmly packed light brown sugar", "2 eggs",
                "4 teaspoons Vanilla Extract", "1 package (12 ounces) semi-sweet chocolate chips"
            ],
            Instructions = [
                "Preheat oven to 375 degrees F", "Mix flour, baking soda and salt in medium bowl and set aside",
                "Beat butter and sugars in large bowl with electric mixer on medium speed until light and fluffy",
                "Add eggs and vanilla; mix well",
                "Gradually beat in flour mixture on low speed until well mixed",
                "Stir in chocolate chips",
                "Drop by rounded tablespoons about 2 inches apart onto ungreased baking sheets",
                "Bake 8 to 10 minutes or until lightly browned. Cool on baking sheets 1 minute. Remove to wire racks; cool completely."
            ]
        },
        new ()
        {
            Id = 1,
            Name = "Spaghetti Carbonara",
            Category = "Main Course",
            Ingredients = [
                "1 pound spaghetti", "2 large eggs", "1 cup grated Pecorino Romano cheese",
                "1 cup grated Parmesan cheese", "1/2 pound pancetta", "4 cloves garlic",
                "Salt and black pepper to taste", "1/4 cup chopped fresh parsley"
            ],
            Instructions = [
                "Bring a large pot of salted water to a boil",
                "Cook spaghetti in the boiling water, stirring occasionally until tender yet firm to the bite, about 12 minutes",
                "Meanwhile, whisk eggs, Pecorino Romano cheese, and Parmesan cheese in a bowl until smooth",
                "Cook pancetta in a skillet over medium heat until browned and crispy, 5 to 10 minutes",
                "Add garlic and cook until fragrant, about 1 minute",
                "Drain spaghetti, reserving 1 cup of the cooking water",
                "Add spaghetti to the skillet with pancetta and garlic",
                "Pour egg mixture over the spaghetti and quickly toss to combine, adding some of the reserved cooking water to loosen the sauce if needed",
                "Season with salt and pepper", "Stir in parsley"
            ]
        },
        new ()
        {
            Id = 2,
            Name = "Salted Caramel Brownies",
            Category = "Dessert",
            Ingredients = [
                "1 cup butter", "2 cups sugar", "4 large eggs", "1 1/2 cups cocoa", "1/2 teaspoon salt",
                "1 teaspoon baking powder", "1 teaspoon espresso powder", "1 tablespoon vanilla extract",
                "1 1/2 cups all-purpose flour", "2 cups chocolate chips", "36 caramel squares",
                "1/2 cup heavy cream", "Sea salt"
            ],
            Instructions = [
                "Preheat the oven to 350°F", "Lightly grease a 9x13 pan",
                "In a medium-sized microwave-safe bowl, or in a saucepan set over low heat, melt the butter",
                "Add the sugar and stir to combine",
                "Return the mixture to the heat (or microwave) briefly, just until it's hot, but not bubbling; it'll become shiny looking as you stir it",
                "Heating this mixture a second time will dissolve more of the sugar, which will yield a shiny top crust on your brownies",
                "Stir in the cocoa, salt, baking powder, espresso powder, and vanilla",
                "Whisk in the eggs, stirring until smooth",
                "Add the flour and chips, again stirring until smooth",
                "Spoon the batter into a lightly greased 9x13 pan",
                "Bake the brownies for about 30 minutes, until a cake tester inserted into the center comes out clean, or with just a few moist crumbs clinging to it",
                "Remove them from the oven and cool on a rack before cutting",
                "While the brownies are cooling, make the caramel topping",
                "Place the unwrapped caramels in a microwave-safe bowl with the cream",
                "Microwave until the caramels are melted, stirring every 30 seconds",
                "Once the caramels are smooth, pour the caramel over the brownies",
                "Refrigerate the brownies for about 30 minutes, to set the caramel",
                "Sprinkle with coarse sea salt just before serving"
            ]
        },
        new ()
        {
            Id = 3,
            Name = "Chicken Alfredo",
            Category = "Main Course",
            Ingredients = [
                "1 pound fettuccine pasta", "1 cup butter", "2 cups heavy cream", "4 cloves garlic, minced",
                "2 cups grated Parmesan cheese", "1/2 teaspoon salt", "1/2 teaspoon ground black pepper",
                "1 teaspoon chopped fresh parsley"
            ],
            Instructions = [
                "Bring a large pot of lightly salted water to a boil",
                "Add fettuccine and cook for 8 to 10 minutes or until al dente; drain",
                "In a large skillet, melt butter into cream over low heat", "Add garlic, stirring constantly",
                "Add Parmesan and stir until melted", "Stir in salt, pepper and parsley",
                "Serve over fettuccine"
            ]
        },
    ];

    public IEnumerable<Recipe> GetRecipes() => _recipes;

    public string Read() => JsonSerializer.Serialize(_recipes);
}