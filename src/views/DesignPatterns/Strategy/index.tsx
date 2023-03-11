import { useCreateStrategyClient } from "./stores/client";

export default function StrategyPage() {
  const client = useCreateStrategyClient();
  return (
    <ul>
      <li>Strategy: {client}</li>
    </ul>
  );
}
