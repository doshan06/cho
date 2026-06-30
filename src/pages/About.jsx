import { Gamepad2, Users, Newspaper, Trophy, Mail, MapPin, Github, Twitter } from 'lucide-react'

const stats = [
  { icon: Gamepad2, label: '收录游戏', value: '2,000+' },
  { icon: Newspaper, label: '资讯文章', value: '10,000+' },
  { icon: Users, label: '注册用户', value: '50,000+' },
  { icon: Trophy, label: '攻略数量', value: '5,000+' },
]

const features = [
  {
    title: '全面资讯',
    desc: '实时追踪全球游戏行业动态，涵盖新作发布、版本更新、赛事报道等全方位资讯。',
  },
  {
    title: '深度攻略',
    desc: '由专业玩家和攻略组撰写的详尽指南，从新手入门到高阶技巧，助你畅玩游戏。',
  },
  {
    title: '活跃社区',
    desc: '与志同道合的玩家交流心得，分享游戏体验，组队开黑，发现游戏的更多乐趣。',
  },
  {
    title: '游戏库管理',
    desc: '记录你的游戏历程，管理游戏收藏，追踪游玩进度，打造专属游戏档案。',
  },
]

const team = [
  { name: 'GameHub团队', role: '平台运营', avatar: 'https://i.pravatar.cc/150?u=team1' },
  { name: '攻略组Alpha', role: '内容创作', avatar: 'https://i.pravatar.cc/150?u=team2' },
  { name: '社区管理员', role: '社区维护', avatar: 'https://i.pravatar.cc/150?u=team3' },
]

function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white border-b border-divider">
        <div className="container-main py-16 sm:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-title mb-4 tracking-tight">
            关于 GameHub
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            我们致力于打造最优质的中文游戏资讯与玩家社区平台，<br className="hidden sm:block" />
            让每一位玩家都能发现游戏的无限可能。
          </p>
        </div>
      </section>

      {/* 数据 */}
      <section className="container-main py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card p-6 text-center">
              <stat.icon className="w-6 h-6 text-brand mx-auto mb-3" />
              <div className="text-2xl font-bold text-title mb-1">{stat.value}</div>
              <div className="text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 功能特色 */}
      <section className="bg-white border-y border-divider">
        <div className="container-main py-16">
          <h2 className="text-2xl font-bold text-center mb-12">平台特色</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card p-6">
                <h3 className="text-lg font-bold text-title mb-2">{feature.title}</h3>
                <p className="text-body leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 团队 */}
      <section className="container-main py-16">
        <h2 className="text-2xl font-bold text-center mb-12">运营团队</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-3"
                onError={(e) => {
                  e.target.src = `https://picsum.photos/seed/${member.name}/80/80`
                }}
              />
              <div className="font-semibold text-title">{member.name}</div>
              <div className="text-sm text-muted">{member.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 联系我们 */}
      <section className="bg-white border-t border-divider">
        <div className="container-main py-16">
          <h2 className="text-2xl font-bold text-center mb-12">联系我们</h2>
          <div className="max-w-lg mx-auto space-y-4">
            <div className="flex items-center gap-3 text-body">
              <Mail className="w-5 h-5 text-brand" />
              <span>contact@gamehub.com</span>
            </div>
            <div className="flex items-center gap-3 text-body">
              <MapPin className="w-5 h-5 text-brand" />
              <span>北京市海淀区中关村</span>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-page flex items-center justify-center hover:bg-brand hover:text-white transition-colors text-muted">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-page flex items-center justify-center hover:bg-brand hover:text-white transition-colors text-muted">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
