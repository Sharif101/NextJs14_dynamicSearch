import Link from "next/link";

export default function SSG({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {data.map((user) => (
        <div
          key={user.id}
          className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition"
        >
          <Link
            href={`ssg/${user.id}`}
            className="text-xl font-semibold text-gray-900 underline underline-offset-1"
          >
            {user.name}
          </Link>
          <p className="text-gray-600">@{user.username}</p>
          <p className="text-gray-700">{user.email}</p>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-800">Address:</h3>
            <p className="text-gray-600">
              {user.address.street}, {user.address.city}
            </p>
            <p className="text-gray-500">Zip: {user.address.zipcode}</p>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <a
              href={`https://${user.website}`}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              {user.website}
            </a>
            <p>{user.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
