using Cookbook.Application;
using Cookbook.Domain.Exceptions;
using Cookbook.Infrastructure;
using Hellang.Middleware.ProblemDetails;
using System.ComponentModel.DataAnnotations;

namespace Cookbook.Api;

public static class CookbookBuilder
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
