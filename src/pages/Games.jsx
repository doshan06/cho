import { useState } from 'react'
import { Star, Calendar, Building2, Gamepad2, X, ChevronDown, ChevronUp, Monitor } from 'lucide-react'
import { gamesList, platformFilters, genreFilters } from '../data/gamesData'

function Games() {
  const [activePlatform, setActivePlatform] = useState('全部')
  const [activeGenre, setActiveGenre] = useState('全部')
  const [expandedId, setExpandedId] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredGames = gamesList.filter((game) => {
    const matchPlatform = activePlatform === '全部' || game.platform.includes(activePlatform)
    const matchGenre = activeGenre === '全部' || game.genre === activeGenre
    const matchSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchPlatform && matchGenre && matchSearch
  })

  const expandedGame = gamesList.find((g) => g.id === expandedId)

  return (
    <div className="container-main py-10">
      {/* 页面标题 + 搜索 */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold">游戏库</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="搜索游戏..."
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

      {/* 筛选 */}
      <div className="space-y-3 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted mr-1">平台：</span>
          {platformFilters.map((p) => (
            <button
              key={p}
              onClick={() => setActivePlatform(p)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                activePlatform === p
                  ? 'bg-brand text-white'
                  : 'bg-white text-body border border-divider hover:border-brand'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted mr-1">类型：</span>
          {genreFilters.map((g) => (
            <button
              key={g}
              onClick={() => setActiveGenre(g)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                activeGenre === g
                  ? 'bg-brand text-white'
                  : 'bg-white text-body border border-divider hover:border-brand'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* 游戏列表 */}
        <div className={`space-y-4 ${expandedId ? 'lg:w-1/2' : 'w-full'}`}>
          {filteredGames.map((game) => (
            <div
              key={game.id}
              onClick={() => setExpandedId(expandedId === game.id ? null : game.id)}
              className={`card p-4 cursor-pointer transition-all ${
                expandedId === game.id ? 'ring-2 ring-brand shadow-md' : 'hover:shadow-sm'
              }`}
            >
              <div className="flex gap-4">
                <div className="w-20 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                  <img
                    src={game.cover}
                    alt={game.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/seed/game${game.id}/160/224`
                    }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-title mb-1">{game.name}</h3>
                  <p className="text-sm text-muted mb-2">{game.nameEn}</p>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {game.platform.map((p) => (
                      <span key={p} className="tag-muted">{p}</span>
                    ))}
                    <span className="tag-brand">{game.genre}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-hot fill-hot" />
                      <span className="font-semibold text-title">{game.rating}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {game.releaseDate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {filteredGames.length === 0 && (
            <div className="text-center py-20 text-muted">
              没有找到匹配的游戏
            </div>
          )}
        </div>

        {/* 详情面板 */}
        {expandedId && expandedGame && (
          <div className="lg:w-1/2">
            <div className="card sticky top-24">
              <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-xl">
                <img
                  src={expandedGame.cover}
                  alt={expandedGame.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/detail${expandedGame.id}/800/400`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setExpandedId(null)}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl font-bold text-white mb-1">{expandedGame.name}</h2>
                  <p className="text-white/70 text-sm">{expandedGame.nameEn}</p>
                </div>
              </div>

              <div className="p-6 space-y-5">
                {/* 评分与平台 */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-5 h-5 text-hot fill-hot" />
                    <span className="text-2xl font-bold text-title">{expandedGame.rating}</span>
                  </div>
                  <div className="flex gap-2">
                    {expandedGame.platform.map((p) => (
                      <span key={p} className="tag-muted">{p}</span>
                    ))}
                  </div>
                </div>

                {/* 基本信息 */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-muted">
                    <Building2 className="w-4 h-4" />
                    <span>{expandedGame.developer}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <Gamepad2 className="w-4 h-4" />
                    <span>{expandedGame.genre}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted">
                    <Calendar className="w-4 h-4" />
                    <span>{expandedGame.releaseDate}</span>
                  </div>
                </div>

                {/* 简介 */}
                <p className="text-body leading-relaxed">{expandedGame.description}</p>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2">
                  {expandedGame.details.tags.map((tag) => (
                    <span key={tag} className="tag-brand">{tag}</span>
                  ))}
                </div>

                {/* 详细内容 */}
                <div className="border-t border-divider pt-5">
                  <h4 className="font-semibold text-title mb-3">游戏介绍</h4>
                  <div className="text-sm text-body leading-relaxed whitespace-pre-line">
                    {expandedGame.details.summary}
                  </div>
                </div>

                {/* 配置要求 */}
                <div className="border-t border-divider pt-5">
                  <h4 className="font-semibold text-title mb-3 flex items-center gap-2">
                    <Monitor className="w-4 h-4" />
                    配置要求
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="bg-page rounded-lg p-3">
                      <div className="font-medium text-title mb-1">最低配置</div>
                      <div className="text-muted">{expandedGame.details.systemRequirements.minimum}</div>
                    </div>
                    <div className="bg-page rounded-lg p-3">
                      <div className="font-medium text-title mb-1">推荐配置</div>
                      <div className="text-muted">{expandedGame.details.systemRequirements.recommended}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Games
