import React from 'react'

const Menu = () => {
  const posts = [
        {
            id : 1,
            title: "adaldana",
            desc: "dadadad",
            img : "https://res.cloudinary.com/demo/basketball_shot.jpg"
        },
        {
            id : 2,
            title: "adaldana",
            desc: "dadadad",
            img : "https://picsum.photos/id/237/536/354"
        },
        {
            id : 3,
            title: "adaldana",
            desc: "dadadad",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmC9LxfDlbb0WRHZslcrI286JlfbUDHDV461jDcDn0AwSo8yzqIwu3uzpBVP-dv_M-T8&usqp=CAU"
        },
        {
            id : 4,
            title: "adaldana",
            desc: "dadadad",
            img : "https://aniyuki.com/wp-content/uploads/2021/08/aniyuki-roronoa-zoro-81-1536x864.jpg"
        },
        {
            id : 5,
            title: "adaldana",
            desc: "dadadad",
            img : "https://aniyuki.com/wp-content/uploads/2021/08/aniyuki-roronoa-zoro-81-1536x864.jpg"
        },
        {
            id : 6,
            title: "adaldana",
            desc: "dadadad",
            img: "https://aniyuki.com/wp-content/uploads/2021/08/aniyuki-roronoa-zoro-81-1536x864.jpg"
        }
        ] 

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map(post=>(
        <div className="post" key={post.id}>
            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu