using System.Diagnostics.CodeAnalysis;
using Cookbook.Domain.Interfaces;
using Cookbook.Infrastructure;
using Microsoft.Extensions.DependencyInjection;

namespace Cookbook.Infrastructure;

[ExcludeFromCodeCoverage]
public static class ServiceRegistrar
{
    public static IServiceCollection ConfigureInfrastructureServices(this IServiceCollection services) => services
        .AddSingleton<IDatabase, Database>();
}