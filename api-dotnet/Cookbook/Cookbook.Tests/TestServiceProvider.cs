using Cookbook.Infrastructure;
using Microsoft.Extensions.DependencyInjection;

namespace Cookbook.Tests;

public static class CookbookServiceProvider
{
    private static readonly IServiceProvider provider = new ServiceCollection()
        .AddCookbookServices()
        .AddFakeInfrastructure()
        .BuildServiceProvider();

    public static T Get<T>() => provider.GetService<T>()!;
}