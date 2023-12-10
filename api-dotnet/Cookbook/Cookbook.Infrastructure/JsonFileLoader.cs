using System.Text.Json;

namespace Cookbook.Infrastructure;

public static class JsonFileLoader
{
    private const string Directory = "../../../web-angular/src/app/services/";
    
    /// <summary>
    /// Load json from a file into a C# object
    /// </summary>
    /// <param name="fileName">The file that the json lives in</param>
    /// <typeparam name="T">The type of the data in the file</typeparam>
    /// <returns>The json file in C# object format</returns>
    public static T? Load<T>(string fileName)
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
