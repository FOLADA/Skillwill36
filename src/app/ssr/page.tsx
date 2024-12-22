export default async function SSRPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: 'no-store', 
    });
    const posts = await res.json();
  
    return (
      <div>
        <h1>Server-Side Rendering (SSR) in App Router</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  