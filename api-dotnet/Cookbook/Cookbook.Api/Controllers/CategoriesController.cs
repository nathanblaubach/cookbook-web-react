using Cookbook.Application.Interfaces;
using Cookbook.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Cookbook.Api.Controllers;

[Route("categories")]
public class CategoriesController(ICategoryQueries categoryQueries) : Controller
{
    [HttpGet]
    [ProducesResponseType(typeof(IEnumerable<Category>), StatusCodes.Status202Accepted)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> Index()
        => Ok(await categoryQueries.GetAllAsync());
}
