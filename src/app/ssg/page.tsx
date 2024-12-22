// app/ssg/page.js
export default async function SSGPage() {
    // Cached at build time
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      cache: 'force-cache',
    });
    const posts = await res.json();
  
    return (
      <div>
        <h1>Static Site Generation (SSG) in App Router</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  