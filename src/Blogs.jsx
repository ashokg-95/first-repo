import React from 'react'

const posts = [
  {id:1, title:'Welcome so i am just testing for the git hub', body:'This is a simple blog post.'},
  {id:2, title:'About', body:'Some info about this demo.'},
]

export default function Blogs({ user, onLogout }){
  return (
    <div className="blogs">
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2>Blogs</h2>
        <div>
          <span style={{marginRight:8}}>Signed in as hbhfnjdv adhdbhkvdfkv usbvdfv ubvdfhkvbhfdv fbvhdfvbdfhv bvdfvbdfhv kjdfvnhkdfvdfv  {user.name}</span>
          <button onClick={onLogout}>Logout</button>
        </div>
      </header>
      <main>
        {posts.map(p=>(
          <article key={p.id} style={{borderTop:'1px solid #eee',paddingTop:12,marginTop:12}}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </article>
        ))}
      </main>
    </div>
  )
}
