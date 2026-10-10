// VitePress 站点配置。条目仍在仓库根的分组目录，不另放一套正文。
import { defineConfig } from 'vitepress'
import { listSections } from '../scripts/articles.js'

const groups = await listSections()

function sidebar() {
  const items = []
  for (const group of groups) {
    const links = []
    for (const article of group.articles) {
      links.push({ text: article.title, link: article.link })
    }
    items.push({ text: group.text, items: links })
  }
  return items
}

export default defineConfig({
  title: '曲阜师大校园知识',
  description: '曲阜师范大学校园生活与学习说明。正文在仓库 Markdown。',
  lang: 'zh-CN',
  // 项目页地址是 https://w1ndys.github.io/easy-qfnu-wiki/
  base: '/easy-qfnu-wiki/',
  srcExclude: ['**/README.md'],
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    search: { provider: 'local' },
    sidebar: sidebar(),
    nav: [
      { text: '首页', link: '/' },
      { text: '生活', link: '/life/express' },
      { text: '示例', link: '/example/sample' }
    ],
    outline: { label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '更新于' },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '回到顶部',
    editLink: {
      pattern: 'https://github.com/w1ndys/easy-qfnu-wiki/edit/main/:path',
      text: '在 GitHub 上修改此页'
    },
    footer: {
      message: '非学校官方网站。具体规则以学校通知为准。',
      copyright: '正文在仓库 Markdown，不使用 GitHub Wiki'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/w1ndys/easy-qfnu-wiki' }
    ]
  },
  transformPageData(pageData) {
    const updated = pageData.frontmatter.updated_at
    // 没有条目日期时保留 Git 时间，避免首页或新页面显示成无效日期。
    if (!updated) return
    const time = Date.parse(updated)
    if (Number.isNaN(time)) return
    pageData.lastUpdated = time
  }
})
