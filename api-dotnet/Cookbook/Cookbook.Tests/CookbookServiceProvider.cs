using Cookbook;
using Cookbook.Interfaces;
using Cookbook.Infrastructure;
using Microsoft.Extensions.DependencyInjection;

namespace Cookbook.Tests;

public static class CookbookServiceProvider
{
    private static IServiceProvider provider = new ServiceCollection()
        .AddServices()
        .AddExternalFakes()
        .BuildServiceProvider();

    public static T Get<T>() => provider.GetService<T>()!;
}