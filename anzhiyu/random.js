var posts=["2024/02/23/搞渗透/","2024/02/23/hello-world/","2024/02/23/搞编程/","2024/02/23/搞逆向/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };