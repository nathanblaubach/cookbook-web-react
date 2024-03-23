using Cookbook.Application;
using Cookbook.Domain.Exceptions;
using Cookbook.Infrastructure;
using Hellang.Middleware.ProblemDetails;
using System.ComponentModel.DataAnnotations;

namespace Cookbook.Api;

public static class CookbookBuilder
{
    public static WebApplication Build(this WebApplicationBuilder builder)
    {
        builder.Services
            .ConfigureInfrastructureServices()
            .ConfigureApplicationServices()
            .ConfigureApiServices();

        return builder
            .Build()
            .ConfigureApiApplication();
    }

    public static IServiceCollection ConfigureApiServices(this IServiceCollection services)
    {
        services.AddMvc();
        return services
            .AddEndpointsApiExplorer()
            .AddSwaggerGen()
            .AddProblemDetails(options =>
            {
                options.MapToStatusCode<ValidationException>(StatusCodes.Status400BadRequest);
                options.MapToStatusCode<NotFoundException>(StatusCodes.Status404NotFound);
                options.MapToStatusCode<Exception>(StatusCodes.Status500InternalServerError);
            });
    }

    public static WebApplication ConfigureApiApplication(this WebApplication app)
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
