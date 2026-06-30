import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { heroData, weeklyGames } from '../data/homeData'

function Home() {
  return (
    <div>
      {/* Hero - 静态大图 */}
      <section className="relative h-[420px] sm:h-[500px] overflow-hidden">
        <img
          src={heroData.image}
          alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              {heroData.title}
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              {heroData.subtitle}
            </p>
            <Link
              to={heroData.ctaLink}
              className="inline-flex items-center gap-2 bg-brand text-white px-7 py-3 rounded-lg font-medium hover:bg-brand-hover transition-colors"
            >
              {heroData.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 本周推荐 - 3个游戏卡片 */}
      <section className="container-main py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">本周推荐</h2>
          <Link to="/games" className="text-brand font-medium hover:text-brand-hover transition-colors flex items-center gap-1">
            查看全部
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {weeklyGames.map((game) => (
            <div
              key={game.id}
              className="card overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={game.cover}
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/seed/${game.id}/400/300`
                  }}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="tag-hot">{game.tag}</span>
                  <span className="tag-muted">{game.platform}</span>
                </div>
                <h3 className="text-lg font-bold text-title mb-1">{game.name}</h3>
                <p className="text-sm text-muted mb-3">{game.nameEn}</p>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-hot fill-hot" />
                  <span className="font-semibold text-title">{game.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
