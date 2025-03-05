async function fetchSingleUser(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

// Generate Static Params for Pre-Rendering //define in readme file go there!
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return users.map((user) => ({
    id: user.id.toString(), // Convert ID to string (Next.js requires strings)
  }));
}

//Fetch User Data at Build Time (SSG)
export default async function Page({ params }) {
  const { id } = params;
  const data = await fetchSingleUser(id);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">User Info</h2>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">
          <span className="text-gray-600">ID:</span> {data.id}
        </h3>
        <h3 className="text-lg font-semibold text-gray-800">
          <span className="text-gray-600">Name:</span> {data.name}
        </h3>
        <h3 className="text-lg font-semibold text-gray-800">
          <span className="text-gray-600">Username:</span> {data.username}
        </h3>
        <h3 className="text-lg font-semibold text-gray-800">
          <span className="text-gray-600">Email:</span> {data.email}
        </h3>
      </div>
    </div>
  );
}
