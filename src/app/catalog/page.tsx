export default async function CatalogPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <h1>Catalog</h1>;
}
