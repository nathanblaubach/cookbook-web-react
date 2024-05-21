using Cookbook.Api;
using Cookbook;
using Cookbook.Interfaces;
using Cookbook.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddInternalServices()
    .AddExternalServices()
    .AddApiServices();

var app = builder
    .Build()
    .ConfigureApi();

app.MapGet("/recipes",
    async (IRecipeService service, string? searchTerm, long[]? categoryIds)
        => await service.GetByParamsAsync(searchTerm, categoryIds));

app.MapGet("/recipes/{recipeId:long}",
    async (IRecipeService service, long recipeId)
        => await service.GetByIdAsync(recipeId));

app.MapGet("/categories",
    async (ICategoryService service)
        => await service.GetAllAsync());

app.Run();
