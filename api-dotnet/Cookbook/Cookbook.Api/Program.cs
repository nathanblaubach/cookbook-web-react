using Cookbook.Services;

var app = WebApplication
    .CreateBuilder(args)
    .BuildCookbookApi();

app.MapGet("/recipes", async (RecipeService service, string? searchTerm, long[]? categoryIds) =>
{
    return await service.GetByParamsAsync(searchTerm, categoryIds);
});

app.MapGet("/recipes/{recipeId:long}", async (RecipeService service, long recipeId) => 
{
    var recipe = await service.GetByIdAsync(recipeId);
    return recipe is null ? Results.NotFound() : Results.Ok(recipe);
});

app.MapGet("/categories", async (CategoryService service) =>
{
    return await service.GetAllAsync();
});

app.Run();
