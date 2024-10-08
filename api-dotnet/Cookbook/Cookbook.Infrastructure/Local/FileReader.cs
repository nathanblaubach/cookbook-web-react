using Cookbook.Adapters;

namespace Cookbook.Infrastructure.Local;

public class FileReader(string path) : IReader
{
    public string Read()
    {
        return File.ReadAllText(path);
    }
}
