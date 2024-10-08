using Cookbook.Infrastructure.Local.Recipes;
using System.Diagnostics.CodeAnalysis;

namespace Cookbook.Api;

[ExcludeFromCodeCoverage]
public static class Configuration
{
    public static WebApplication BuildCookbookApi(this WebApplicationBuilder builder)
    {
        builder.Services
            .AddLocalServices()
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

    public static IServiceCollection AddCommonServices(this IServiceCollection services) => services
        .AddScoped<RecipeService>();

    public static IServiceCollection AddLocalServices(this IServiceCollection services) => services
        .AddCommonServices()
        .AddScoped<IRecipeRepository, JsonFileRecipeRepository>();
}
