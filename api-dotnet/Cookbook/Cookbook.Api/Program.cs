using Cookbook.Api;
using Cookbook.Application;
using Cookbook.Domain.Interfaces;
using Cookbook.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddInfrastructure()
    .AddApplication()
    .AddApi();

var app = builder
    .Build()
    .ConfigureApi();

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
