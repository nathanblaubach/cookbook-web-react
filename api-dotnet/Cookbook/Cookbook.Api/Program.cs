using Cookbook;
using Cookbook.Api;

var app = WebApplication
    .CreateBuilder(args)
    .BuildCookbookApi();

app.MapGet("/recipes", async (RecipeService service, string? searchTerm, string[]? categories) =>
{
    return await service.GetRecipesBySearchTermAndCategoriesAsync(searchTerm, categories);
});

app.MapGet("/recipes/{recipeId:long}", async (RecipeService service, long recipeId) => 
{
    var recipe = await service.GetRecipeByIdAsync(recipeId);
    return recipe is null ? Results.NotFound() : Results.Ok(recipe);
});

app.MapGet("/categories", async (RecipeService service) =>
{
    return await service.GetCategoriesAsync();
});

await app.RunAsync();
