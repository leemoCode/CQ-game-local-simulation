# 盒模型
  什么是盒模型？
  在对一个文档进行布局的时候， 浏览器的渲染引擎会根据标准之一的CSS基础盒模型，将所有元素渲染为一个个的矩形盒子

  一个盒模型由四部分组成：
  content border padding margin

  一共有两种盒模型：
  1. border-box: （IE盒模型）
  width = content + border + padding
  2. content-box: （W3C标准盒模型）
  width = content

  设置盒模型：
  box-sizing: border-box | content-box;
  在IE8+浏览器中使用哪个盒模型可以通过box-sizing进行控制，默认为content-box，即为标准盒模型。

  在IE6,7,8等低版本浏览器中
  如果DOCTYPE类型缺失浏览器会将盒子模型解释为IE盒子模型(border-box)
  如果声明了DOCTYPE类型，所有的浏览器都会把盒模型解释为标准盒模型(content-box)

  使用IE盒模型时，确定宽高后放大padding/border的值会压缩content的大小

  详解链接：
  https://juejin.cn/post/6844903505983963143

# CSS选择器
  1. id选择器: #myid
  2. 类选择器: .class-name
  3. 标签选择器: div span p h1
  4. 后代选择器（包含选择器）: h1 p
  5. 子选择器: ul > li
  6. 兄弟选择器: h1 ~ p
  7. 相邻兄弟选择器: li + li
  8. 属性选择器 a[rel="external"]
  9. 伪类选择器  a:hover li:nth-child
  10. 伪元素选择器 ::before ::after
  11. 通配符选择器 *


  ## 兄弟选择器：
  查找某一个指定元素的后面的 所有的 兄弟结点
    <p>1</p>
    <h1>2</h1>
    <p>3</p>
    <p>4</p>
    <p>5</p>
  使用 h1 ~ p { color: red } 后，3、4、5均变为红色

  ## 相邻兄弟选择器
    选择紧跟在h1元素后的段落p，h1和p拥有共同的父元素

    <div>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ul>
      <ol>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ol>
    </div>

    使用 li + li { font-weight: bold; }最终效果：
    列表中的所有List item 2和3变为粗体，List item 1不受影响


  ## 后代选择器 和 子选择器的区别
    子选择器（child selector）仅是指它的直接后代，或者你可以理解为作用于子元素的第一代后代。
    后代选择器是作用于所有子后代元素。后代选择器通过空格来进行选择，而子选择器是通过“>”进行选择。
    总结： > 作用于元素的第一代后代 空格作用于元素的所有后代。


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

  部分浏览器由于字节溢出问题出现的进位表现暂不考虑 （256class干掉一个id （opera除外）

# 水平垂直居中问题

# ::before :after 单冒号和双冒号的区别 以及这两个伪元素的作用
  单冒号用于表示伪类 双冒号表示伪元素。
  但是为了兼容已有的伪元素写法，在部分浏览器中也可以使用单冒号来表示伪元素（支持旧的已经存在的伪元素的写法）如:first-letter、:first-line、:after等

  插入的内容在之前用::before 反之用:after



# 伪元素 & 伪类
  CSS引入伪类和伪元素是为了修饰格式化文档以外的信息。
  伪类和伪元素是用来修饰文档树中不存在的部分，如一句话的第一个字母或列表中的第一个元素。

  伪类一般匹配的是元素的一些特殊状态，如hover、link等，而伪元素一般匹配的特殊的位置，比如after、before等。
  伪类用于当已有的元素处于某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的
  元素时，我们可以通过:hover来描述这个元素的状态。

  伪元素用于创建一些不在文档树中的元素，并为其添加样式。它们允许我们为元素的某些部分设置样式。
  比如说，我们可以通过::before来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。

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


# CSS哪些属性可以继承
  每个属性在定义时都给出了这个属性是否具有继承性，一个可继承的属性在未指定值时会使用父元素的同属性值作为自己的值。

  ## 有继承性的属性：
    字体系列：
      font-family font-size font-weight font-style
    文本系列：
      line-height text-align text-shadow word-spacing letter-spacing color
    元素可见性：
      visibility
    表格布局属性、列表属性、光标属性等

  ## 无继承性的属性：
    display
    vertical-align: baseline  // 行内元素的垂直对齐方式 middle居中 top顶部 bottom底部
    text-decoration 属性规定添加到文本的修饰，下划线、上划线、删除线等
    盒模型的相关属性
    定位属性
  ## 特殊点
    a标签的字体颜色不能被继承 h标签的字体大小不能被继承
    原因是它们都有一个默认值

  ## 注意
    当一个属性不是继承属性时，可以使用inherit关键字指定一个属性应从父元素继承它的值。
    inherit关键字用于显式地指定继承性，可用于任何继承性/非继承性属性。

# CSS3 新增的伪类
  child系列
  1. elem:nth-child(n):
    选择父元素下的第n个子元素，并且该子元素的标签名为elem
    n可以为具体数字或函数
  2. elem:nth-last-child(n):
    同上，从后查找
  3. elem:last-child:
    选中最后一个元素
  4. elem:only-child:
    如果elem是父元素唯一的子元素则选中之

  type系列
  1. elem:nth-of-type(n):
    选中父元素下第n个elem类型元素
  2. elem:first-of-type:
    选中父元素下第一个elem类型的元素
  3. elem:last-of-type
  4. elem:only-of-type

  其他
  1. elem:empty:
    选中不包含子元素和内容的elem类型元素
  2. :not(elem):
    选中不是elem类型的每个元素
  3. :enabled
    激活表单控件
  4. :disabled
    禁用表单控件
  5. :checked
    单选框或复选框被选中





# 关于伪类LVHA
  a 标签有四种状态：
  L 链接访问前 :link
  V 链接访问后 :visited
  H 鼠标滑过 :hover
  A 激活 :active

  ## 当链接未访问过时：
  1. 鼠标滑过a标签，满足:link 和 :hover两种状态， 要改变a标签的颜色 :hover 要在 :link伪类后声明
  2. 鼠标点击激活a标签时，同时满足:link :hover :active三种状态， 要显示a标签激活的样式:active
  所以要显示如下顺序： :link :visited :hover :active

  ## LVHA的顺序可以改变吗？
    可以，仅限于:link和:visited交换位置，因为一个链接要么访问过，要么没访问过
    不会同时满足，也就不存在覆盖的问题


# 页面呈现的流程
  1. 读取所有html代码并解析，生成： dom tree
  2. 读取样式并解析，生成： style rules
  3. dom tree + style rules = render tree
  4. 浏览器根据render tree 绘制页面

# 回流与重绘
  如何区分：
  文档流是否发生了变化？ 回流 ： 重绘

  回流：
  部分元素的规模尺寸布局发生了变化，需要重建render tree

  重绘：
  只影响元素的外观、风格
  不引起布局的改变，更新部分属性即可

  回流必重绘， 重绘不一定回流

# display:none & visibility:hidden
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


# CSS画三角形、圆形、椭圆形


# VW VH ？

  content="width=device-width, initial-scale=1.0"
