using System.ComponentModel.DataAnnotations;
using Cookbook.Domain.Exceptions;
using Hellang.Middleware.ProblemDetails;

namespace Cookbook.Api;

public static class ServiceRegistration
{
    public static IServiceCollection ConfigureApi(this IServiceCollection services)
    {
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen();
        services.AddControllers();
        services.AddProblemDetails(ConfigureProblemDetails);
        return services;
    }

    public static WebApplication Configure(this WebApplication app)
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

    private static void ConfigureProblemDetails(Hellang.Middleware.ProblemDetails.ProblemDetailsOptions options)
    {
        //options.MapFluentValidationException();
        options.Rethrow<NotSupportedException>();
        options.MapToStatusCode<ValidationException>(StatusCodes.Status400BadRequest);
        options.MapToStatusCode<NotFoundException>(StatusCodes.Status404NotFound);
        options.MapToStatusCode<Exception>(StatusCodes.Status500InternalServerError);
    }
}
