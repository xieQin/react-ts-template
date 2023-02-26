import { useCreateSingletonClient } from "./stores";

export default function SingletonPage() {
  const { s1, s2 } = useCreateSingletonClient();
  return (
    <>
      <ul>
        <li>s1 === s2: {s1 === s2 ? "Singleton" : "Not Singleton"}</li>
      </ul>
    </>
  );
}
