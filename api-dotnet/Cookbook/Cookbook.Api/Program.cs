using Cookbook.Domain;
using Cookbook.Infrastructure;
using Cookbook.Api;
using Cookbook.Application;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .ConfigureDomain()
    .ConfigureApplication()
    .ConfigureInfrastructure()
    .ConfigureApi();

builder
    .Build()
    .Configure()
    .Run();
