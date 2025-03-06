export default function ISR({ data }) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      <ul className="space-y-2">
        {data.slice(0, 5).map((post, id) => (
          <li key={id} className="p-4 border rounded-lg shadow">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
