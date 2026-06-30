import { useState } from 'react'
import { MessageCircle, Eye, Clock, X, Flame, Pin, ThumbsUp, MessageSquare } from 'lucide-react'
import { postsList, sortOptions, postCategories } from '../data/communityData'

function Community() {
  const [activeCategory, setActiveCategory] = useState('全部')
  const [activeSort, setActiveSort] = useState('最新回复')
  const [expandedId, setExpandedId] = useState(null)

  const filteredPosts = postsList.filter((post) => {
    if (activeCategory === '全部') return true
    return post.tags.includes(activeCategory)
  })

  const expandedPost = postsList.find((p) => p.id === expandedId)

  return (
    <div className="container-main py-10">
      {/* 页面标题 */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold">社区论坛</h1>
        <button className="btn-primary self-start sm:self-auto">
          发布帖子
        </button>
      </div>

      {/* 分类 + 排序 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {postCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                activeCategory === cat
                  ? 'bg-brand text-white'
                  : 'bg-white text-body border border-divider hover:border-brand'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted">排序：</span>
          <select
            value={activeSort}
            onChange={(e) => setActiveSort(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-divider bg-white text-sm focus:outline-none focus:border-brand"
          >
            {sortOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* 帖子列表 */}
        <div className={`space-y-3 ${expandedId ? 'lg:w-3/5' : 'w-full'}`}>
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setExpandedId(expandedId === post.id ? null : post.id)}
              className={`card p-4 cursor-pointer transition-all ${
                expandedId === post.id ? 'ring-2 ring-brand shadow-md' : 'hover:shadow-sm'
              }`}
            >
              <div className="flex items-start gap-3">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/avatar${post.id}/40/40`
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    {post.isPinned && (
                      <span className="tag bg-red-50 text-red-600 flex items-center gap-1">
                        <Pin className="w-3 h-3" />
                        置顶
                      </span>
                    )}
                    {post.isHot && (
                      <span className="tag-hot flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        热帖
                      </span>
                    )}
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag-muted">{tag}</span>
                    ))}
                  </div>
                  <h3 className="font-semibold text-title mb-2 leading-snug">{post.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      {post.replies}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {post.views}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-muted">
              该分类下暂无帖子
            </div>
          )}
        </div>

        {/* 帖子详情面板 */}
        {expandedId && expandedPost && (
          <div className="lg:w-2/5">
            <div className="card sticky top-24">
              <div className="p-5 border-b border-divider">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={expandedPost.avatar}
                      alt={expandedPost.author}
                      className="w-8 h-8 rounded-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://picsum.photos/seed/av${expandedPost.id}/32/32`
                      }}
                    />
                    <span className="font-medium text-title">{expandedPost.author}</span>
                  </div>
                  <button
                    onClick={() => setExpandedId(null)}
                    className="w-7 h-7 rounded-full bg-page flex items-center justify-center hover:bg-divider transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="font-bold text-lg text-title">{expandedPost.title}</h3>
                <div className="flex items-center gap-3 mt-2 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {expandedPost.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {expandedPost.views}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="text-body leading-relaxed whitespace-pre-line mb-6">
                  {expandedPost.content}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-divider">
                  <button className="flex items-center gap-1.5 text-muted hover:text-brand transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">点赞</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-muted hover:text-brand transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span className="text-sm">回复 ({expandedPost.replies})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Community
