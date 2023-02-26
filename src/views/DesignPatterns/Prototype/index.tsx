import { useCreatePrototypeClient } from "./stores";

export default function PrototypePage() {
  const { p1, p2 } = useCreatePrototypeClient();
  return (
    <>
      <ul>
        <li>
          p1.primitive === p2.primitive:{" "}
          {p1.primitive === p2.primitive ? "Equal" : "Not Equal"}
        </li>
        <li>
          p1.component === p2.component:{" "}
          {p1.component === p2.component ? "Equal" : "Not Equal"}
        </li>
        <li>
          p1.circularReference === p2.circularReference:{" "}
          {p1.circularReference === p2.circularReference
            ? "Equal"
            : "Not Equal"}
        </li>
        <li>
          p1.circularReference.prototype === p2.circularReference.prototype:{" "}
          {p1.circularReference.prototype === p2.circularReference.prototype
            ? "Equal"
            : "Not Equal"}
        </li>
      </ul>
    </>
  );
}
