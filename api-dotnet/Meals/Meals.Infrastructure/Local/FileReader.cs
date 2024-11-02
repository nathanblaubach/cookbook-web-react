using Meals.Adapters;

namespace Meals.Infrastructure.Local;

public class FileReader(string path) : IReader
{
    public string Read()
    {
        return File.ReadAllText(path);
    }
}
