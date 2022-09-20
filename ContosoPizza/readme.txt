// crear la migracion inicial de la base de datos.
dotnet ef migrations add InitialCreate --context PizzaContext

// Ingeniería inversa. A partir de la base de datos existentes, generamos el context y el modelo
dotnet ef dbcontext scaffold "Data Source=.\Promotions\Promotions.db" Microsoft.EntityFrameworkCore.Sqlite --context-dir .\Data --output-dir .\Models