# 首页

1. 这个页面是我们的首页，在普通模式下我们可以在这个页面进行一些md格式的输出，达到一打开我们这个项目直接就能展示这个md文件上面的内容对用户进行指引

2. 我们可以在每个md文件上面进行配置，例如

   ```
   ---
   ## 页面的标题
   title: 页面一
   ##页面创建的时间2
   date: 2020-08-25
   ##本页面所属的分类，如果所有的页面分类都没有进行设置，那么顶部导航栏将不进行显示
   categories:
    - frontEnd
   ##本页面所属的标记，如果所有页面的标记没有设置，那么顶部导航栏还是会显示，并且标记只有一种 --- all
   tags:
    - vue
   ---
   ```

   

3. 这个主题不是Vuepress默认的主题而是我们引用第三方  reco    的主题，这个主题有两种模式，一种是普通模式，另一种是博客模式，只需要在config.js中的themeConfig中设置type:'blog'即可

   ![](C:\Users\TBY\Desktop\vuepress-project\docs\.vuepress\public\images\设置blog模式.png)

   **普通模式**![](C:\Users\TBY\Desktop\vuepress-project\docs\.vuepress\public\images\普通模式.png)**博客模式**![](C:\Users\TBY\Desktop\vuepress-project\docs\.vuepress\public\images\reco博客模式.png)