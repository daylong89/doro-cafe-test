import { Heart, Star, Coffee, Gamepad2, Users, Award } from 'lucide-react'

export function About() {
  const stats = [
    { icon: Heart, label: 'Fan Toàn Cầu', value: '1M+', color: 'text-pink-500' },
    { icon: Star, label: 'Đánh Giá', value: '5 sao', color: 'text-orange-500' },
    { icon: Coffee, label: 'Ly Trà Sữa', value: '∞', color: 'text-orange-600' },
    { icon: Gamepad2, label: 'Game Xuất Hiện', value: '2+', color: 'text-purple-500' }
  ]

  const timeline = [
    {
      year: '2021',
      title: 'Ra đời từ Fan Art',
      description: 'Doro được tạo ra bởi hai nghệ sĩ fan art ẩn danh, kết hợp phần đầu chibi và thân hình đơn giản',
      image: 'dorothy_default.png'
    },
    {
      year: '2023',
      title: 'Chấp Nhận Chính Thức',
      description: 'ShiftUp chính thức chấp nhận Doro và sử dụng trong các sự kiện quảng bá',
      image: 'dorothy_official_mmd.png'
    },
    {
      year: '2024',
      title: 'Crossover với Stellar Blade',
      description: 'Doro xuất hiện trong DLC crossover giữa NIKKE và Stellar Blade',
      image: 'dorothy_skill_burst.png'
    },
    {
      year: '2025',
      title: 'World Tour Toàn Cầu',
      description: 'Doro bắt đầu world tour với mô hình khổng lồ 10m tại nhiều thành phố lớn',
      image: 'dorothy_anniversary_splash.jpg'
    }
  ]

  const traits = [
    {
      title: 'Tinh Nghiệch',
      description: 'Luôn vui vẻ và thích đùa giỡn, mang lại nét đáng yêu cho mọi ai gặp',
      icon: '😊'
    },
    {
      title: 'Nhanh Nhẹn',
      description: 'Có thể di chuyển nhanh chóng ở cả tư thế bốn chân và hai chân',
      icon: '💨'
    },
    {
      title: 'Mê Cam',
      description: 'Có mối liên hệ đặc biệt với màu cam và quả cam trong cộng đồng',
      icon: '🍊'
    },
    {
      title: 'Đáng Yêu',
      description: 'Thiết kế chibi với đôi mắt to, nụ cười ngơ ngẩn đặc trưng',
      icon: '🥺'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-lg border border-orange-200">
                  <Users className="w-5 h-5 text-orange-600" />
                  <span className="text-orange-600 font-semibold">Tìm Hiểu Về Doro</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    Gặp gỡ
                  </span>
                  <br />
                  <span className="text-gray-800">Dorothy "Doro"</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Nhân vật mascot đáng yêu của chúng tôi - một hiện tượng toàn cầu sinh ra từ tình yêu của cộng đồng fan NIKKE. Từ những bức fan art đơn giản đến biểu tượng văn hóa toàn cầu.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center space-x-3">
                        <Icon className={`w-8 h-8 ${stat.color}`} />
                        <div>
                          <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <img 
                    src="/images/doro/dorothy_happy_memory.png" 
                    alt="Doro vui vẻ" 
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
                <div className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <img 
                    src="/images/doro/dororong_meme.jpg" 
                    alt="Dororong meme" 
                    className="w-full h-32 object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <img 
                    src="/images/doro/dorothy_kimono_render.png" 
                    alt="Doro kimono" 
                    className="w-full h-32 object-cover rounded-2xl"
                  />
                </div>
                <div className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <img 
                    src="/images/doro/dorothy_nostalgia.png" 
                    alt="Doro nostalgia" 
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Character Traits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-800">
              Đặc Điểm <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Nhân Vật</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những nét đặc trưng khiến Doro trở thành nhân vật được yêu thích toàn cầu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {traits.map((trait, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-orange-100"
              >
                <div className="text-center space-y-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {trait.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {trait.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {trait.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-800">
              Hành Trình <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Phát Triển</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Từ fan art đến hiện tượng toàn cầu - câu chuyện thành công của Doro
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 to-pink-400 h-full rounded-full hidden lg:block"></div>

            <div className="space-y-16">
              {timeline.map((event, index) => (
                <div 
                  key={index} 
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:text-left text-center`}
                >
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'} space-y-4`}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="space-y-4">
                        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-2 rounded-full">
                          <Award className="w-5 h-5 text-orange-600" />
                          <span className="text-orange-700 font-bold text-lg">{event.year}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10 w-6 h-6 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                  {/* Image */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'} mt-8 lg:mt-0`}>
                    <div className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <img 
                        src={`/images/doro/${event.image}`} 
                        alt={event.title}
                        className="w-full h-64 object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Sự Thật Thú Vị
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">2</div>
                <div className="text-orange-100">Nghệ sĩ fan art tạo ra Doro</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">10m</div>
                <div className="text-orange-100">Chiều cao mô hình World Tour</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                <div className="text-3xl font-bold mb-2">∞</div>
                <div className="text-orange-100">Số lượng quả cam yêu thích</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Tại sao Doro lại liên quan đến cam?</h3>
              <p className="text-lg text-orange-100 leading-relaxed max-w-2xl mx-auto">
                Meme "Dororong" xuất hiện trong cộng đồng Trung Quốc với hình ảnh Doro và quả cam (orange). 
                Điều này tạo nên mối liên hệ đặc biệt giữa nhân vật và màu cam - hoàn hảo cho theme trà sữa!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-lg">
                Xem Thêm Hình Ảnh
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300">
                Quay Về Menu
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}