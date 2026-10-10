// 读取分组目录下的知识条目，供网页目录和首页使用。
import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

// 网页分组。顺序就是侧边栏顺序。新增分组时在这里加一项。
export const sections = [
  { dir: 'life', text: '生活' },
  { dir: 'study', text: '学业' },
  { dir: 'about', text: '关于' },
  { dir: 'example', text: '示例' }
]

// 标题缺失时用文件名，避免一篇坏 front matter 让整个站点构建停掉。
function titleOf(raw, name) {
  const matched = raw.match(/^title:\s*(.+)$/m)
  if (!matched) return name
  return matched[1].trim()
}

function updatedAtOf(raw) {
  const matched = raw.match(/^updated_at:\s*(.+)$/m)
  if (!matched) return ''
  return matched[1].trim()
}

// 中文标题排序；标题相同再按文件名，保证每次构建顺序一致。
function byTitle(left, right) {
  const titleOrder = left.title.localeCompare(right.title, 'zh-CN')
  if (titleOrder !== 0) return titleOrder
  return left.slug.localeCompare(right.slug)
}

export async function articlesIn(dir) {
  const names = await readdir(dir)
  const articles = []
  for (const name of names) {
    // 分类目录里只收正式条目，不把以后可能出现的说明页算进去。
    if (!name.endsWith('.md') || name === 'index.md') continue
    const raw = await readFile(join(dir, name), 'utf8')
    const slug = name.slice(0, -3)
    articles.push({
      title: titleOf(raw, name),
      slug,
      link: `/${dir}/${slug}`,
      updatedAt: updatedAtOf(raw)
    })
  }
  articles.sort(byTitle)
  return articles
}

export async function listSections() {
  const result = []
  for (const section of sections) {
    result.push({
      text: section.text,
      dir: section.dir,
      articles: await articlesIn(section.dir)
    })
  }
  return result
}
