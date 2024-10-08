using System.Data;
using System.Text.Json;

namespace Cookbook.Adapters;

public static class JsonParser
{
    private static readonly JsonSerializerOptions options = new()
    {
        PropertyNameCaseInsensitive = true
    };

    public static T Parse<T>(string json)
    {
        return JsonSerializer.Deserialize<T>(json, options)
            ?? throw new DataException("Could not read data from file");
    }

}
