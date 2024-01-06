using System.Reflection;
using Microsoft.Extensions.DependencyInjection;

namespace Cookbook.Application;

public static class ServiceRegistration
{
    public static IServiceCollection ConfigureApplicationServices(this IServiceCollection services) => services
        .AddMediatR(cfg => cfg.RegisterServicesFromAssembly(Assembly.GetExecutingAssembly()));
}
