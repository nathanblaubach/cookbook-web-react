namespace Cookbook.Api;

using Cookbook.Domain.Exceptions;
using Hellang.Middleware.ProblemDetails;
using System.ComponentModel.DataAnnotations;

public static class ServiceRegistration
{
    public static IServiceCollection AddApi(this IServiceCollection services)
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
}
