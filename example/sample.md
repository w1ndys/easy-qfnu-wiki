---
title: 示例条目
source: https://github.com/w1ndys/easy-qfnu-wiki
updated_at: 2026-10-10T00:00:00Z
---
# 示例条目

这是占位示例，不是校园知识。复制这一页再改，不要把示例内容当成事实。

新分组是仓库根目录下的一个文件夹。分组名用英文短横线，并加到 `scripts/articles.js` 的 `sections`。网页侧边栏按这个列表生成。

分组里的每篇条目是一个 Markdown 文件。文件名用英文短横线。开头必须有这四项：

- front matter 的 `title`：浏览器标题和侧边栏文字
- front matter 的 `source`：依据来源的网址
- front matter 的 `updated_at`：UTC 时间，例如 `2026-10-10T00:00:00Z`
- 正文第一行 `# 标题`：页面上显示的大标题，和 `title` 保持一致

写完后运行 `npm run build`。首页目录会按分组自动列出。
