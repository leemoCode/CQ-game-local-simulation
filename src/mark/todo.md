
# 2022

# 0110

锁屏发布
评论发布
话题发布

新页面 和 表态 设计


整理技术需求

述职准备

表态遗留

----------------------------
Q1 OKR


review 51的代码

51改gitlab的用户信息

分支命名

# 遗留优化项：
锁屏升级评论1.4 (删除toast同步修改 评论已删除 回复已删除)

视图层内通用的能力全部向sdk内迁移（表态等等）

wv.isMethodValid能力封装

commentsdk TS校验


页面跳转时携带参数全部收拢至transparam内(sourceMedia和followId)

跟帖命名（post、follow）统一

pubArticleInfo 能否替代updateArticleInfo


api层统一起来

公告样式待优化

话题列表图片 服务端传错链接的情况 屏蔽掉

话题 本地调试相对路径问题


预览功能按钮样式变化

commentsdk demo工程 模板


### 回收站
2021 Q4 绩效自评

话题 UI修改

负反馈浏览器联调

0124需求评审 了解需求

删除本人评论联调

信息流一个bug
2022

锁屏浅暗色模式闪黑问题定位



-------------------------------------

isFromTopic剔除

发布器联调

话题入口需求 把控进度 如何本地mock数据
跟帖主文章搞清楚做什么

serverConfig 确认

浏览器运营后台 - 客户端配置 -  策略测试


跟帖链接UI修改

负反馈 信息流 代码加入

作者删评联调 - 埋点  - clickComment 加字段判断二级页

锁屏升级1.3后 要注意 发布器回调函数的绑定方式 window[xxx] 而不是window.oppofeeds.xxx

锁屏公告未添加kkua锁屏 magazine.ts广播能力没有合到1.4

<!-- 评论负反馈逻辑新增场景： 无评论且有剩余时自动拉下一刷 -->

<!-- 汇报进度

代码review

新增字段KKUA

重定向白名单问题
评论内无用代码清理

清理todo

dataSource 加到businessTxstension

锁屏bug定位

浏览器新包出现的话题详情页下拉问题

帮新同学 跑起来项目


评论sdk 1.2 向上合并 -->

<!-- 拉一个新分支 关闭话题入口 -->

<!-- browser_cms release/20211206 分支上线
feature/closeTopic common-view分支上线
dev/1.3 common-sdk 分支上线
dev/1.3 common-view 分支上线
dev/1.3 topic-view 分支上线 -->

<!-- 浏览器评论 回复的回复展示问题 -->


<!-- # 本迭代遗留任务
打标UI

文章链接UI -->

<!-- 话题埋点修改 -->


<!-- isfromtopic isfrommessage  和现有sdk耦合 -->

<!-- magazine.ts getConfigValue代码改动

下拉刷新问题 -->

<!-- tab隐藏功能 发布 -->

<!-- styleType 问题 1.5- > 1.4 -->

<!-- 增加三方id -->

<!-- 点赞埋点 -->

<!-- 哥伦布拆解 -->

<!-- query频繁查询公告 -->

<!-- 禁评公告样式 -->

<!-- 首刷显示正在加载回复 -->

<!-- source datasource  修正 -->

<!-- 网易文章是否还需用resourceId作docId -->


<!-- getSource 合并 utils && api && contactNative -->

<!-- 内容详情页评论功能 -->

<!-- 切换tab 加jsapi 作埋点用 -->

<!-- 发评后数目没有同步到话题 -->

<!-- 点赞同步 -->


<!-- 跟帖缺少点赞按钮 -->

<!-- 线上 feedsession穿了30009 timeout -->

<!-- 夜间模式话题tag颜色 -->

<!-- 本话题下tag点击不跳转 -->

<!-- 公告 间距 -->


<!-- 还机器

写表态的方案设计 -->

<!-- 还机申请 -->

<!-- 哥伦布拆解 -->

<!-- 视觉修改 锁屏二级页 -->

<!-- 预览功能 -->

<!-- 预览支持中文 -->

<!-- 公告埋点 -->

<!-- 二级页面提示错误 -->

<!-- 点赞同步异常 -->

<!-- 黑色 -->

<!-- h5 加xlog日志
https://doc.myoas.com/pages/viewpage.action?pageId=94512023 -->

<!-- 话题 videoUrl问题 -->


<!-- 展开文章 底bar状态异常收起 -->

<!-- 广播收发名字不一致 -->


<!-- 话题发布CF链接
https://doc.myoas.com/pages/viewpage.action?pageId=528717645 -->

<!-- 话题正式环境 切换tab保持状态问题 -->



<!-- 二级页面评论同步至一级页面 -->

<!-- 文章不锚评 评论区锚评 -->

<!-- 暗色模式闪白 -->

<!-- 缓存 查询审核状态 source丢失 -->
<!-- 缓存 回复缓存不生效 -->
<!-- 取消点赞取消不了 -->
<!-- 回复内容样式有问题 -->

<!-- 点赞消息进去显示没点赞 -->

<!-- 文章页点话题入口没反应 -->

<!-- getSubReplyList 接口偶先失败 -->

<!-- 消息发版 -->

<!-- browser_cms 走前端发布流程
https://doc.myoas.com/pages/viewpage.action?pageId=525692137 用模板创建文档 抄写 -->

<!-- 浏览器两个bug -->

<!-- 分离两个分支 -->

<!-- comment-common-view  topicUpdate分支与dev/1.3合并 -->

<!-- browser_cms 向release分支合并 -->


<!-- commentStatus 网易新闻 -->


<!-- 消息 -->

<!-- card 显示 -->

<!-- 公告需求发拼接规则 -->


<!-- bizplatform 正式环境配置 -->


<!-- 向下离开评论区后 要隐藏发布器 -->

<!-- 空页面样式  加载失败 加载中 已经做完  有遗留 -->


<!-- 评论页拼接规则 -->

<!-- browser_cms 拉取纯净分支 -->

<!-- browser_cms 代码修改  跳转方法 目前跳转后无法正常回复 -->


<!-- 消息打通 -->

<!-- comment-common-view 代码回归
topic-common-view 代码回归 -->

<!--
biz-platform 代码回归  打包去掉 --combine  云平台 去掉combine
biz-platform 查看是否 -->

<!-- 根据topicId拉列表 -->

<!-- 更新文档 -->

<!-- 发新的url规则 -->

<!-- bId有就带 -->

<!-- 公告功能做完后 要合入1.3 -->


<!-- buildoption name  字段    comment-common-view  fileKey -->

<!-- isFollow -> iF
fromFollow -> rF
followId -> fId
curTopicId -> cTId
topicId -> tId
docTitle -> dTt
新: bId -->

<!-- 对跟帖的评论进行回复 缺少followId和topicTitle -->



<!-- ### topicCard 加限制 6个 -->

<!-- ### 详情页加载更多时 闪白 -->


<!-- # 消息 开发 -->

<!-- # 评论服务迁移 -->


<!-- # tab切换 keep-alive不生效 -->

<!-- # tab切换内容有间隙 空格问题 -->

<!-- # 点赞闪动 -->

<!-- # 跟帖内容换行 -->

<!-- # 话题详情页评论数同步 -->

<!-- # 列表UI 加载全部跟帖 距离 -->

<!-- # 详情页 图片 给兜底颜色 -->

<!-- # 最大号字体时 异常 -->

<!-- # 获取文章评论失败 二级页 -->

<!-- # 夜间模式 > 丢失 -->
