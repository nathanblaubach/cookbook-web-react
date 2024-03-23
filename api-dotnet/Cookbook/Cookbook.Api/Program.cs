using Cookbook.Api;
using Cookbook.Application.Interfaces;

var app = CookbookBuilder.Build(WebApplication.CreateBuilder(args));

app.MapGet("/recipes",
    async (IRecipeQueries queries, string? searchTerm, long[]? categoryIds)
        => await queries.GetByParamsAsync(searchTerm, categoryIds));

app.MapGet("/recipes/{recipeId:long}",
    async (IRecipeQueries queries, long recipeId)
        => await queries.GetByIdAsync(recipeId));

app.MapGet("/categories",
    async (ICategoryQueries queries)
        => await queries.GetAllAsync());

app.Run();
