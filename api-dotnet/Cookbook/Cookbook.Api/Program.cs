using Cookbook.Infrastructure;
using Cookbook.Api;
using Cookbook.Application;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .ConfigureApplicationServices()
    .ConfigureInfrastructureServices()
    .ConfigureApiServices();

builder
    .Build()
    .ConfigureApi()
    .Run();
