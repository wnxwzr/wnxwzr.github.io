var posts=["2024/02/25/渗透攻防/Android APP渗透之系统设备信息检测绕过/","2024/02/25/漏洞挖掘/挖漏洞/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };