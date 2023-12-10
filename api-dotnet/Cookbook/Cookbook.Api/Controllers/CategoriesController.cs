using Cookbook.Api.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Cookbook.Api.Controllers;

[Route("categories")]
public class CategoriesController(ISender sender) : Controller
{
    [HttpGet]
    public async Task<IActionResult> Index()
        => Ok(await sender.Send(new GetAllCategories()));
}
