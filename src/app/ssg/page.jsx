import { SSG } from "@/components";

async function fetchUser() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function page() {
  const data = await fetchUser();

  return (
    <div>
      <SSG data={data} />
    </div>
  );
}
