using System.ComponentModel.DataAnnotations;
using Cookbook.Interfaces;

var app = WebApplication
    .CreateBuilder(args)
    .BuildCookbookApi();

app.MapGet("/exception", async () =>
{
    throw new Exception("Sadie!");
});
app.MapGet("/recipes", async (IRecipeService service, string? searchTerm, long[]? categoryIds) =>
{
    return await service.GetByParamsAsync(searchTerm, categoryIds);
});

app.MapGet("/recipes/{recipeId:long}", async (IRecipeService service, long recipeId) => 
{
    var recipe = await service.GetByIdAsync(recipeId);
    return recipe is null ? Results.NotFound() : Results.Ok(recipe);
});

app.MapGet("/categories", async (ICategoryService service) =>
{
    return await service.GetAllAsync();
});

app.Run();
