import axios from "axios";
import fetchSingleCoin from "../services/fetchSingleCoin";

jest.mock("axios");

describe("fetchSingleCoin", () => {
  it("fetches a single coin data from the API", async () => {
    const mockCoinData = {
      id: "bitcoin",
      name: "Bitcoin",
      market_data: {
        current_price: { usd: 50000 },
        market_cap_rank: 1,
        market_cap: { usd: 90000000000 },
        high_24h: { usd: 52000 },
        low_24h: { usd: 49000 },
        price_change_24h: 1500,
        market_cap_change_24h: 2000000000,
        total_supply: 21000000,
        max_supply: 21000000,
        circulating_supply: 20000000,
      },
      image: { large: "https://example.com/bitcoin.jpg" },
      description: { en: "Bitcoin description" },
    };

    axios.get.mockResolvedValue({ data: mockCoinData });

    const coinData = await fetchSingleCoin("bitcoin");

    expect(coinData).toEqual(mockCoinData);
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.coingecko.com/api/v3/coins/bitcoin"
    );
  });

  it("handles fetch error", async () => {
    const errorMessage = "Network Error";
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(fetchSingleCoin("bitcoin")).rejects.toThrow(errorMessage);
  });
});
