# easy-qfnu-wiki

曲阜师范大学知识库。正文在本仓库的 Markdown，不使用 GitHub Wiki。

网页由这些 Markdown 用 VitePress 构建。合并到 `main` 后自动发布两处：

- 主站（Vercel，绑自定义域名）：https://wiki.easy-qfnu.top
- 备用（GitHub Pages 项目页）：https://w1ndys.github.io/easy-qfnu-wiki/

Vercel 的构建配置在仓库根 `vercel.json`（跑 `npm run build`，产物 `.vitepress/dist`）。`base` 按环境自动切：Vercel 上站点在域名根路径，GitHub Pages 是项目页、必须带仓库名前缀。
域名在 Vercel 项目里绑定，DNS 是 `wiki` 的 CNAME 指向 `vercel.cdn.yt-blog.top`，和账号里其他 Vercel 站点走同一条代理。

当前分组：

- `life/`：校园生活，现有 `life/express.md`（快递问题）、`life/water-card.md`（水卡绑定）
- `about/`：关于本站，现有 `about/contribute.md`（提交收录）
- `example/`：示例分组，`example/sample.md` 用来看页面怎么写

本地预览：

```bash
npm ci
npm run dev
```

文章仍在整理，还不是完整知识库。这里不是学校官网。
