import { useState } from 'react'
import { Calendar, Eye, ChevronDown, ChevronUp, X } from 'lucide-react'
import { newsList, newsCategories } from '../data/newsData'

function News() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [expandedId, setExpandedId] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredNews = newsList.filter((item) => {
    const matchCategory = activeCategory === '全部' || item.category === activeCategory
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="container-main py-10">
      {/* 页面标题 + 搜索 */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold">游戏资讯</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="搜索资讯..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-72 pl-4 pr-10 py-2.5 rounded-lg border border-divider bg-white
                       focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand/20"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-body"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 分类筛选 */}
      <div className="flex flex-wrap gap-2 mb-8">
        {newsCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-brand text-white'
                : 'bg-white text-body border border-divider hover:border-brand hover:text-brand'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 资讯列表 */}
      <div className="space-y-4">
        {filteredNews.map((item) => {
          const isExpanded = expandedId === item.id
          return (
            <div
              key={item.id}
              className={`card overflow-hidden transition-shadow ${isExpanded ? 'shadow-md' : 'hover:shadow-sm'}`}
            >
              {/* 卡片头部 - 始终显示 */}
              <div
                className="flex flex-col sm:flex-row cursor-pointer"
                onClick={() => toggleExpand(item.id)}
              >
                <div className="sm:w-64 h-44 sm:h-auto flex-shrink-0 overflow-hidden">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/seed/news${item.id}/400/260`
                    }}
                  />
                </div>
                <div className="flex-1 p-5 sm:p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="tag-brand">{item.category}</span>
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <Eye className="w-3.5 h-3.5" />
                      {(item.views / 1000).toFixed(1)}k
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-title mb-2">{item.title}</h3>
                  <p className="text-body text-sm leading-relaxed mb-4 flex-1">
                    {item.summary}
                  </p>
                  <div className="flex items-center text-brand text-sm font-medium">
                    {isExpanded ? '收起详情' : '阅读全文'}
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 ml-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </div>
                </div>
              </div>

              {/* 展开详情 */}
              {isExpanded && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-divider">
                  <div className="prose prose-sm max-w-none text-body leading-relaxed whitespace-pre-line">
                    {item.content}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-20 text-muted">
          没有找到匹配的资讯
        </div>
      )}
    </div>
  )
}

export default News
