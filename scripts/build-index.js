// 根据现有条目生成站点首页。首页不入库，构建前现写。
import { writeFile } from 'node:fs/promises'
import { listSections } from './articles.js'

function newestUpdate(sections) {
  let newest = ''
  for (const section of sections) {
    for (const article of section.articles) {
      if (article.updatedAt > newest) newest = article.updatedAt
    }
  }
  return newest
}

function catalog(sections) {
  const lines = []
  for (const section of sections) {
    lines.push(`## ${section.text}`)
    lines.push('')
    for (const article of section.articles) {
      lines.push(`- [${article.title}](.${article.link})`)
    }
    lines.push('')
  }
  return lines.join('\n')
}

const sections = await listSections()
const updatedAt = newestUpdate(sections)
const page = `---
title: 曲阜师范大学知识库
updated_at: ${updatedAt}
editLink: false
---

# 曲阜师范大学知识库

正文在本仓库的 Markdown，不使用 GitHub Wiki。这里不是学校官网，具体规则以学校最新通知为准。

${catalog(sections)}`
await writeFile(new URL('../index.md', import.meta.url), page)
console.log('wrote index.md')
