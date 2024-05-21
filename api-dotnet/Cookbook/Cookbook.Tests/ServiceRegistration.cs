using System.Diagnostics.CodeAnalysis;
using Cookbook.Interfaces;
using Cookbook.Tests;
using Microsoft.Extensions.DependencyInjection;

namespace Cookbook.Infrastructure;

[ExcludeFromCodeCoverage]
public static class ServiceRegistrar
{
    public static IServiceCollection AddExternalFakes(this IServiceCollection services) => services
        .AddSingleton<IDatabase, TestDatabase>();
}
