import { deterministicPartitionKey } from "./dpk";

describe("deterministicPartitionKey", () => {
  it("Returns the hash of the event object when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey.length).toBe(256);
  });

  it("Returns a hash of the input when the input exceeds the max key length", () => {
    const trivialInput = "0".repeat(300);
    const output = deterministicPartitionKey({ partitionKey: trivialInput });
    expect(output.length).toBe(256);
  })

  it("Returns a hash of the input when the input length >= 1 && <= 256", () => {
    const trivialInput = "1234567890abcdef";
    const output = deterministicPartitionKey({ partitionKey: trivialInput });
    expect(output.length).toBe(256);
  })
});
