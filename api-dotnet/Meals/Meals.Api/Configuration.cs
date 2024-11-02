using Meals.Adapters.Recipes;
using Meals.Infrastructure.Local;
using System.Diagnostics.CodeAnalysis;

namespace Meals.Api;

[ExcludeFromCodeCoverage]
public static class Configuration
{
    public static WebApplication BuildMealsApi(this WebApplicationBuilder builder)
    {
        builder.Services
            .AddProblemDetails();

        var app = builder
            .Build();

        app.UseHttpsRedirection();

        app.UseExceptionHandler(handler => handler
            .Run(async context => await Results.Problem().ExecuteAsync(context)));

        app.UseStatusCodePages(async statusCodeContext => await Results
            .Problem(statusCode: statusCodeContext.HttpContext.Response.StatusCode)
            .ExecuteAsync(statusCodeContext.HttpContext));

        return app;
    }

    public static IRecipeRepository GetLocalRecipeRepository()
    {
        var jsonRecipesFilePath = Path.Combine(Environment.CurrentDirectory, "..", "recipes.json");
        var localJsonRecipeRepository = new JsonRecipeRepository(new FileReader(jsonRecipesFilePath));
        return localJsonRecipeRepository;
    }
}
