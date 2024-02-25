var posts=["2024/02/25/渗透攻防/APP渗透之系统设备信息检测绕过/","2024/02/25/渗透攻防/公众号渗透数据包解密/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };