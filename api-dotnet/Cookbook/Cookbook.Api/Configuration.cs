using Cookbook;
using Cookbook.Infrastructure;
using System.Diagnostics.CodeAnalysis;

[ExcludeFromCodeCoverage]
public static class Configuration
{
    public static WebApplication BuildCookbookApi(this WebApplicationBuilder builder)
    {
        builder.Services
            .AddCookbookServices()
            .AddInfrastructure()
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
}
