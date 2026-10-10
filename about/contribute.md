---
title: 提交收录
source: https://github.com/w1ndys/easy-qfnu-wiki
updated_at: 2026-10-10T00:00:00Z
---
# 提交收录

这个知识库想攒的是在校生活和学习里真正用得上的信息：教程、经验、实验数据、考试试题，这类都收。写得糙没关系，能用就行；不确定值不值得收，先问一声也行。

## 方式一：直接改 GitHub 仓库

适合会 Git 的同学。

- 仓库地址：https://github.com/w1ndys/easy-qfnu-wiki
- 已有条目写得不全或过时了，直接改那个 Markdown 文件，然后提 PR。
- 想加新条目，就在已有分组目录（比如 `life/`）里新建一个 Markdown，文件名用英文短横线；要开新分组就新建一个文件夹，再把文件夹加进 `scripts/articles.js` 的 `sections`。
- 文件开头要写 `title`、`source`、`updated_at` 三项，正文第一行再写一遍 `# 标题`。格式照抄[示例条目](/example/sample)。
- 提交前跑一次 `npm run build`（校验 front matter、生成首页目录、试构建一遍），本地预览用 `npm run dev`。
- 合并进 `main` 后由 GitHub Actions 自动发布到本站。

格式拿不准就先随便写，后面的格式问题可以帮你调。

## 方式二：找 QQ 群群主

不想碰 Git，就把内容直接发给群主或管理员，让群主代你整理上去。第一个群可能快满了，推荐加 2 群。

- 1 群【[曲奇味儿巧克力福团1箱](https://qm.qq.com/q/zmOhKz3PdS)】
- 2 群【[曲奇味夹心饼干2盒](https://qm.qq.com/q/rehpUHSXp8)】

## 收录前留意

- 学号、身份证号、密码、Cookie 这类敏感信息，不要写进正文，也不要贴在截图里。
- 时间、电话、价格这类会变的信息，写明是什么时候整理的，别人好判断还有效没有。
- 这里不是学校官网，具体规则以学校最新通知为准。
