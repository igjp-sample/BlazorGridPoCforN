using System.Net.Http.Json;

namespace Blazor_Grid.JpPeople
{
    public class JpPeopleService
    {
        private readonly HttpClient http;

        public JpPeopleService(HttpClient http)
        {
            this.http = http;
        }

        public async Task<Table1Type[]?> GetTable1()
        {
            return await this.http.GetFromJsonAsync<Table1Type[]>("https://excel2json.io/api/share/548b3c63-2fb5-4578-e677-08dab79fa5b4");
        }
    }
}