using System.Diagnostics.CodeAnalysis;
using Cookbook.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace Cookbook.Infrastructure;

[ExcludeFromCodeCoverage]
public static class ServiceRegistration
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services) => services
        .AddSingleton<IDatabase, Database>();
}
