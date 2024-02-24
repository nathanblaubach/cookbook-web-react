using System.ComponentModel.DataAnnotations;
using Cookbook.Domain.Exceptions;
using Hellang.Middleware.ProblemDetails;

namespace Cookbook.Api;

public static class ServiceRegistrar
{
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
