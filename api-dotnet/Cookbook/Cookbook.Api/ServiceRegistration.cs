using System.ComponentModel.DataAnnotations;
using Cookbook.Domain.Exceptions;
using Hellang.Middleware.ProblemDetails;

namespace Cookbook.Api;

public static class ServiceRegistration
{
    public static IServiceCollection ConfigureApiServices(this IServiceCollection services)
    {
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
        services.AddControllers();
        services.AddProblemDetails(options =>
        {
            options.MapToStatusCode<ValidationException>(StatusCodes.Status400BadRequest);
            options.MapToStatusCode<NotFoundException>(StatusCodes.Status404NotFound);
            options.MapToStatusCode<Exception>(StatusCodes.Status500InternalServerError);
        });
        return services;
    }

    public static WebApplication ConfigureApi(this WebApplication app)
    {
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();
        app.MapControllers();
        app.UseProblemDetails();
        return app;
    }
}
