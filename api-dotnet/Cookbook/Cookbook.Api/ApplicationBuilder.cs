using Cookbook.Application;
using Cookbook.Infrastructure;

namespace Cookbook.Api;

public static class ApplicationBuilder
{
    public static WebApplication BuildCookbookApiApplication(this WebApplicationBuilder builder)
    {
        builder.Services
            .ConfigureInfrastructureServices()
            .ConfigureApplicationServices()
            .ConfigureApiServices();

        return builder
            .Build()
            .ConfigureApiApplication();
    }
}
