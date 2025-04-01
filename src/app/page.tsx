export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch('http://api.github.com/users/lubnimorais');
  const users = await response.json();

  return <pre>{JSON.stringify(users, null, 2)}</pre>;
}
