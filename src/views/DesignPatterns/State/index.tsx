import { useCreateStateClient } from "./stores/client";

export default function StatePage() {
  const client = useCreateStateClient();
  return (
    <ul>
      <li>State: {client}</li>
    </ul>
  );
}
