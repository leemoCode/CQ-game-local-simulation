# 盒模型
  什么是盒模型？
  在对一个文档进行布局的时候， 浏览器的渲染引擎会根据标准之一的CSS基础盒模型，将所有元素渲染为一个个的矩形盒子

  一个盒模型由四部分组成： 
  content border padding margin

  种类：
  1. border-box:
  width = content + padding + margin
  2. content-box: (默认为此模型)
  width = content

  设置盒模型：
  box-sizing: border-box | content-box;

  使用IE盒模型时，确定宽高后放大padding/border的值会压缩content的大小