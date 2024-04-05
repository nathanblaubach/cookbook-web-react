using Hellang.Middleware.ProblemDetails;
using System.Diagnostics.CodeAnalysis;

namespace Cookbook.Api;

[ExcludeFromCodeCoverage]
public static class ServiceConfiguration
{
    public static WebApplication ConfigureApi(this WebApplication app)
    {
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        app.UseHttpsRedirection();
        app.UseProblemDetails();
        return app;
    }
}
