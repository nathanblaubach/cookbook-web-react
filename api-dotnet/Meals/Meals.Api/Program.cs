using Meals;
using Meals.Api;

var app = WebApplication
    .CreateBuilder(args)
    .BuildMealsApi();

IRecipeRepository repository = Configuration.GetLocalRecipeRepository();

app.MapGet("/recipes", async (string? searchTerm, string[]? categories) =>
{
    return await repository.GetRecipesBySearchTermAndCategoriesAsync(searchTerm, categories);
});

app.MapGet("/recipes/{recipeId:long}", async (long recipeId) => 
{
    var recipe = await repository.GetRecipeByIdAsync(recipeId);
    return recipe is null ? Results.NotFound() : Results.Ok(recipe);
});

app.MapGet("/categories", async () =>
{
    return await repository.GetCategoriesAsync();
});

await app.RunAsync();
