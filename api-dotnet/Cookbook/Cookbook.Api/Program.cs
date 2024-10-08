using Cookbook;
using Cookbook.Api;

var app = WebApplication
    .CreateBuilder(args)
    .BuildCookbookApi();

var service = Configuration.GetLocalRecipeService();

app.MapGet("/recipes", async (string? searchTerm, string[]? categories) =>
{
    return await service.GetRecipesBySearchTermAndCategoriesAsync(searchTerm, categories);
});

app.MapGet("/recipes/{recipeId:long}", async (long recipeId) => 
{
    var recipe = await service.GetRecipeByIdAsync(recipeId);
    return recipe is null ? Results.NotFound() : Results.Ok(recipe);
});

app.MapGet("/categories", async () =>
{
    return await service.GetCategoriesAsync();
});

await app.RunAsync();
