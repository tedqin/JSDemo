//后端通过设置httpheader跨域
response.setHeader("Access-Control-Allow-Origin", "http://a.com, http://b.com");
response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
response.setHeader("Access-Control-Allow-Methods", "PUT, POST,GET, OPTIONS, DELETE");
//允许接收跨域的cookie
response.setHeader("Access-Control-Allow-Credentials", "true");