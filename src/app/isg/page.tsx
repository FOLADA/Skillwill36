export default async function ISGPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 10 }, 
  });
  const posts = await res.json();

  return (
    <div>
      <h1>Incremental Static Generation (ISG) in App Router</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
