using Cookbook;
using Cookbook.Interfaces;
using Cookbook.Infrastructure;
using Microsoft.Extensions.DependencyInjection;

namespace Cookbook.Tests;

public static class CookbookServiceProvider
{
    private static IServiceProvider provider = new ServiceCollection()
        // Default mappings to match application
        .AddInternalServices()
        .AddExternalServices()
        // Overwrite mappings to stub external systems
        .AddSingleton<IDatabase, TestDatabase>()
        // Generate the service provider
        .BuildServiceProvider();

    public static T Get<T>() => provider.GetService<T>()!;
}