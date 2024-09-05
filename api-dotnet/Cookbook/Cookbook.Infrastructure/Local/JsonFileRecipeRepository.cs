using System.Data;
using System.Runtime.ConstrainedExecution;
using System.Text.Json;
using Cookbook.Entities;
using Cookbook.Interfaces;

namespace Cookbook.Infrastructure;

public class JsonFileRecipeRepository : IRecipeRepository
{
    private static readonly JsonSerializerOptions options = new()
    {
        PropertyNameCaseInsensitive = true
    };

    private class JsonFileRecipeRepositorySchema
    {
        public required IEnumerable<Recipe> Recipes { get; set; }
    }
    
    private readonly JsonFileRecipeRepositorySchema data;

    public JsonFileRecipeRepository()
    {
        using var streamReader = new StreamReader($"../Cookbook.Infrastructure/Local/recipe-repository.json");
        data = JsonSerializer.Deserialize<JsonFileRecipeRepositorySchema>(streamReader.ReadToEnd(), options)
            ?? throw new DataException("Could not read data from file");
    }

    public IEnumerable<Recipe> GetRecipes()
    {
        return data?.Recipes ?? [];
    }
}
