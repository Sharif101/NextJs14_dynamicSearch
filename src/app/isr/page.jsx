import { ISR } from "@/components";

async function fetchPost() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    next: { revalidate: 10 }, // ISR applies here this is use for rerender data from server cz nextjs cache data thats why show cache data after 10s rerender new data from server
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function page() {
  const data = await fetchPost();
  return (
    <div>
      <ISR data={data} />
    </div>
  );
}
