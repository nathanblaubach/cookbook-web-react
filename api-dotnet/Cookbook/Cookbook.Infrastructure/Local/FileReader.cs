namespace Cookbook.Infrastructure.Local;

public class FileReader(string path)
{
    public string Read()
    {
        return File.ReadAllText(path);
    }
}
