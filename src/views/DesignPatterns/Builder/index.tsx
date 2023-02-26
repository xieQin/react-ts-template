import { Director, useCreateBuilderClient } from "./stores";

export default function BuilderPage() {
  const director = new Director();
  const { getBasicProduct, getCustomProduct, getFullFeaturedProduct } =
    useCreateBuilderClient(director);
  return (
    <>
      <ul>
        <li>Standard basic product: {getBasicProduct().join(", ")}</li>
        <li>
          Standard full featured product: {getFullFeaturedProduct().join(", ")}
        </li>
        <li>Custom product: {getCustomProduct().join(", ")}</li>
      </ul>
    </>
  );
}
