---
title: ngnix不可不知的秘密
date: 2021-01-20
categories:
 - ngnix
tags:
 - ngnix
---

# nginx的基本操作

## nginx启动
> ./nginx   将nginx进行启动

## nginx停止
> ./nginx -s stop   将nginx进行停止

## nginx重启
> ./nginx -s reload     将nginx进行重启（PS：一般在修改了nginx配置文件之后需要进行nginx的重启）

# nginx不可不知的秘密

nginx是一个高性能的HTTP和支持反向代理的web服务器

```
# nginx.conf的自定义配置

#user  nobody;
worker_processes  1;

events {
    # 设置nginx链接的最大并发量
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;

    keepalive_timeout  65;

    # 开启gzip压缩
    #gzip  on;

    server {
        listen       80;
        server_name  127.0.0.1;

# root模式就是将  location后面的值拼接在root后面，最终在服务器上形成的路劲就是    html/
        location / {
            root   html;
            index  index.html;
        }

        location /test {
            root html;
            index index.html;
        }

# alias模式就是将 alias路径映射给location，也就是在URL中的/abc并不能真正代表服务器的真实位置，只是一个映射而已
        location /abc {
            alias   html/test;
            index  index.html;
        }

        # 当 root模式下 设置 /  与alias模式下  设置 /index  时会发生冲突，前者会失效，用户在访问页面时会发生404错误
        # location /index {
        #     alias html;
        #     index index.html;
        # }


        # 可以自动转发至自己编写的接口
        location /zzz {
            proxy_pass http://127.0.0.1:81;
        }

        # 当状态码为404时，显示404.html页面（nginx默认情况下是没有这个页面的）
        # error_page  404              /404.html;
        # 当状态码为500、502、503、504时，显示50x.html页面（nginx默认情况下有这个页面）
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }


# # 配置第二个server
    server {
        listen       81;
        server_name  123.56.163.186;

        location / {
            proxy_pass http://123.56.163.186;
        }
    }


}

```

