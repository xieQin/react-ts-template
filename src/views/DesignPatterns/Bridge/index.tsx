import { useCreateBridgeClient } from "./stores";

export default function BridgePage() {
  const { abstractionA, abstractionB } = useCreateBridgeClient();
  return (
    <ul>
      <li>AbstractionA: {abstractionA.operation()}</li>
      <li>AbstractionB: {abstractionB.operation()}</li>
    </ul>
  );
}
