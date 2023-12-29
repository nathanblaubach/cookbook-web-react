using Cookbook.Application.Queries;
using Cookbook.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Cookbook.Api.Controllers;

[Route("categories")]
public class CategoriesController(ISender sender) : Controller
{
    [HttpGet]
    [ProducesResponseType(typeof(IEnumerable<Category>), StatusCodes.Status202Accepted)]
    [ProducesResponseType(typeof(ProblemDetails), StatusCodes.Status500InternalServerError)]
    public async Task<IActionResult> Index()
        => Ok(await sender.Send(new GetAllCategories()));
}
