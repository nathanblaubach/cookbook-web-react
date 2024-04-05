using System.Diagnostics.CodeAnalysis;
using Cookbook.Domain.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace Cookbook.Infrastructure;

[ExcludeFromCodeCoverage]
public static class ServiceRegistrar
{
    public static IServiceCollection AddInfrastructure(this IServiceCollection services) => services
        .AddSingleton<IDatabase, Database>();
}