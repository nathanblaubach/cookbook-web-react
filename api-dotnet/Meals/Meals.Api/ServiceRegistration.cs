using Meals.Adapters.Recipes;
using Meals.Infrastructure.Local;
using System.Diagnostics.CodeAnalysis;

namespace Meals.Api;

[ExcludeFromCodeCoverage]
public static class ServiceRegistration
{
    public static IServiceCollection RegisterLocalServices(this IServiceCollection services)
    {
        var jsonRecipesFilePath = Path.Combine(Environment.CurrentDirectory, "..", "recipes.json");
        var localJsonRecipeRepository = new JsonRecipeRepository(new FileReader(jsonRecipesFilePath));

        return services.AddScoped<IRecipeRepository, JsonRecipeRepository>(provider => localJsonRecipeRepository);
    }
}
