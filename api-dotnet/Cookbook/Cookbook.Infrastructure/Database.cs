using System.Data;
using System.Text.Json;
using Cookbook.Entities;
using Cookbook.Interfaces;

namespace Cookbook.Infrastructure;

public class Database : IDatabase
{
    public IEnumerable<Recipe> Recipes { get; private set; }
    public IEnumerable<Category> Categories { get; private set; }

    public Database()
    {
        Recipes = Load<IEnumerable<Recipe>>("recipes")
            ?? throw new DataException("Could not read recipes from file");

        Categories = Load<IEnumerable<Category>>("categories")
            ?? throw new DataException("Could not read categories from file");
    }

    private const string Directory = "../Cookbook.Infrastructure/";
    private static T? Load<T>(string fileName)
    {
        using var streamReader = new StreamReader($"{Directory}{fileName}.json");
        var json = streamReader.ReadToEnd();
        var options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        };
        return JsonSerializer.Deserialize<T>(json, options);
    }
}
