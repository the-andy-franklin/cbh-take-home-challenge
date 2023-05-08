import crypto from "crypto";

const hashValue = (value: string) => {
  return (
    crypto
      .createHash("sha3-512")
      .update(value)
      .digest("hex")
  );
}

export const deterministicPartitionKey = (event: { partitionKey: string } = { partitionKey: '' }) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event.partitionKey) return hashValue(JSON.stringify(event));
  if (event.partitionKey.length > MAX_PARTITION_KEY_LENGTH) return hashValue(TRIVIAL_PARTITION_KEY);

  return hashValue(event.partitionKey);
};