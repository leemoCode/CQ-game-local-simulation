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


# CSS权重&优先级
  行内样式 +1000
  id选择器 +100
  属性选择器、class选择器（包括伪类） +10
  元素（包括伪元素）选择器 +1
  通配符 *  +0

  !important优先级最高，都使用!important时按权重算优先级

  常用选择器权重优先级：!important > id > class > tag


  !important可以提升样式优先级，但不建议使用。
  如果!important被用于一个简写的样式属性，那么这条简写的样式属性所代表的子属性都会被应用上!important。 
  例如：background: blue !important; 则background-size 也会带上!important

  内联样式和外联样式的权重相同，优先级与加载顺序有关，后加载的样式覆盖先加载的。



# 伪元素 & 伪类
如何区分： 是否创建了新元素？ 伪元素 ： 伪类
## 伪元素：
  创建了一个虚拟容器(元素)，我们可以在其中添加内容或样式

  CSS3官方定义翻译：
  伪元素可以创建一些文档语言无法创建的虚拟元素。
  比如：文档语言没有一种机制可以描述元素内容的第一个字母或第一行，但伪元素可以做到(::first-letter、::first-line)。
  同时，伪元素还可以创建源文档不存在的内容。
  比如使用 ::before 或 ::after。

## 伪类：
  弥补了CSS选择器的不足，用来更方便地获取信息

  1.格式化DOM树以外的信息。
  比如： a标签的:link、:visited 等。这些信息不存在于DOM树中。
  2.不能被常规CSS选择器获取到的信息。
  比如：要获取第一个子元素，我们无法用常规的CSS选择器获取，但可以通过 :first-child 来获取到。

## 页面呈现的流程
  1. 读取所有html代码并解析，生成： dom tree
  2. 读取样式并解析，生成： style rules
  3. dom tree + style rules = render tree
  4. 浏览器根据render tree 绘制页面

## 回流与重绘
  如何区分：
  文档流是否发生了变化？ 回流 ： 重绘

  回流：
  部分元素的规模尺寸布局发生了变化，需要重建render tree

  重绘：
  只影响元素的外观、风格
  不引起布局的改变，更新部分属性即可

  回流必重绘， 重绘不一定回流

## display:none & visibility:hidden
  如何区分：
  是否占据文档流？ visibility:hidden : display:none

  display:none：
  彻底消失
  将会隐藏它以及所有的后代元素
  所占文档流消失，浏览器不会解析该元素
  页面： 回流+重绘

  visibility:hidden：
  视觉上的隐藏， 可以理解为透明度为0
  仍然占据文档流，浏览器仍然会解析该元素
  页面： 重绘

  都具有继承性, 但是
  父元素设置visibility:hidden, 子元素重新设置visibility: visible, 又会重新显示
  父元素设置display:none, 子元素设置显示也不会生效


## CSS画三角形、圆形、椭圆形


# VW VH ？ 

  content="width=device-width, initial-scale=1.0"