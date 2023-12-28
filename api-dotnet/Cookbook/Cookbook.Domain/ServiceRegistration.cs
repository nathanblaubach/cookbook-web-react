using Microsoft.Extensions.DependencyInjection;

namespace Cookbook.Domain;

public static class ServiceRegistration
{
    public static IServiceCollection ConfigureDomain(this IServiceCollection services) => services;
}
