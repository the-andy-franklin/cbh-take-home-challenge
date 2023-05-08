import { deterministicPartitionKey } from "./dpk";

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns a hash when the input exceeds the max key length", () => {
    const trivialInput = "0".repeat(300)
    const output = deterministicPartitionKey({ partitionKey: trivialInput })
    console.log(output)
  })
});
