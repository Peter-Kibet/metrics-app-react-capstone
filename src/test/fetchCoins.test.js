import axios from "axios";
import fetchCoins from "../services/fetchCoins";

jest.mock("axios");

describe("fetchCoins", () => {
  it("fetches coins data from the API", async () => {
    const mockCoinsData = [
      {
        id: "bitcoin",
        name: "Bitcoin",
        image: "https://example.com/bitcoin.jpg",
        current_price: 50000,
      },
      {
        id: "ethereum",
        name: "Ethereum",
        image: "https://example.com/ethereum.jpg",
        current_price: 3000,
      },
    ];

    axios.get.mockResolvedValue({ data: mockCoinsData });

    const coinsData = await fetchCoins();

    expect(coinsData).toEqual(mockCoinsData);
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
    );
  });

  it("handles fetch error", async () => {
    const errorMessage = "Network Error";
    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(fetchCoins()).rejects.toThrow(errorMessage);
  });
});
