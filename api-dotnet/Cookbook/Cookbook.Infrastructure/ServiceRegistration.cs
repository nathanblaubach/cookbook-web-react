using System.Diagnostics.CodeAnalysis;
using Cookbook.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace Cookbook.Infrastructure;

[ExcludeFromCodeCoverage]
public static class ServiceRegistrar
{
    public static IServiceCollection AddExternalServices(this IServiceCollection services) => services
        .AddSingleton<IDatabase, Database>();
}