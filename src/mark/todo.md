https://vue3js.cn/interview/vue/show_if.html#%E4%BA%8C%E3%80%81v-show%E4%B8%8Ev-if%E7%9A%84%E5%8C%BA%E5%88%AB
# 2022

# 0215
工作待办：

消息中心 架构设计

调研下 navigator.connection  type = none 却能上网的情况


评论发gif图 图片尺寸 引用回复中的形态适配

功能发布： biz-platform 针对公告位发版

comment-common-view ts检查
topic-common-view ts检查

表态后 不滑动不出图片的问题

技术需求合入 吴毅3 李函朔1


个人待办：

# 技术需求：
1. 锁屏评论升级1.4版本
2. 视图层内通用的能力全部向sdk内迁移（表态等等）

吴毅：
3. wv.isMethodValid能力封装
5. 页面跳转时携带参数全部收拢至transparam内
6. 跟帖命名（post、follow）统一

前端涉及到的埋点改动：
1. 20211002埋点，只保留topicList内的topicSource字段，多余的删除。
2. 在话题入口页、话题列表页，topicList字段报所有话题的信息；在话题详情页、跟贴详情页，topicList字段只报当前话题的信息。
3. 20211002埋点重写，逻辑变更为曝光。删除原来的接口返回成功埋点。
4. 话题入口页的所有埋点需要额外携带openSource字段：文章页进入 article 全部评论页进入 comment 短视频进入 shortV 小视频进入 smallV。
5. 跳转到话题列表页时携带的openSource值改为： 文章页进入 article 全部评论页进入 comment 短视频进入 shortV 小视频进入 smallV。


# 遗留优化项：
pubArticleInfo 能否替代updateArticleInfo

api层统一起来

公告样式待优化

话题列表图片 服务端传错链接的情况 屏蔽掉

话题 本地调试相对路径问题

预览功能按钮样式变化

commentsdk demo工程 模板


# 回收站

表态埋点曝光异常

浏览器信息流 禁评公告位bug

2022年2月17日15:20:19

OJT PPT 优化
OJT 讲解练习

2022年2月17日10:13:17

功能发布： 话题卡片文案修改 表态埋点 百分比计算 轮播表情更新

2022年2月16日17:37:26

未过审情况下 回复自己的内容问题

功能发布： 话题引用回复 topic-common-view  comment-sdk

2022年2月16日14:46:32

commentSdk ts校验

表态 埋点加错误码  轮播动画

发照片
