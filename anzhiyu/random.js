var posts=["2024/02/26/杂项/Hexo文章页面插入B站视频/","2024/02/25/渗透攻防/APP渗透之系统设备信息检测绕过/","2024/02/26/渗透攻防/使用reqable联动burpsuite抓取APP数据包/","2024/02/25/渗透攻防/公众号渗透数据包解密/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };