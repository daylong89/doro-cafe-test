import { ArrowRight, Coffee, Heart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Home() {
  const features = [
    {
      icon: Coffee,
      title: 'Trà Sữa Đặc Biệt',
      description: 'Công thức độc đáo với hương vị cam Dororong'
    },
    {
      icon: Heart,
      title: 'Không Khí Ấm Cúng',
      description: 'Thiết kế đáng yêu với nhân vật Doro'
    },
    {
      icon: Star,
      title: 'Trải Nghiệm Độc Đáo',
      description: 'Quán trà sữa ảo đầu tiên với chủ đề anime'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-100 via-pink-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-orange-600 bg-clip-text text-transparent">
                    Chào Mừng đến
                  </span>
                  <br />
                  <span className="text-gray-800">Doro Café!</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Quán trà sữa ảo đầu tiên với nhân vật Doro đáng yêu từ NIKKE. Khám phá thế giới trà sữa với hương vị cam Dororong độc đáo!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/menu" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Xem Menu
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/about" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-orange-300 text-orange-700 font-semibold rounded-full hover:bg-orange-50 hover:border-orange-400 transition-all duration-300"
                >
                  Tìm Hiểu Về Doro
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/doro/dorothy_happy_memory.png" 
                  alt="Doro đáng yêu" 
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-4 py-2 rounded-full font-semibold transform -rotate-12 shadow-lg">
                  Dororong!
                </div>
              </div>
              <div className="absolute top-8 left-8 w-full h-full bg-gradient-to-r from-orange-200 to-pink-200 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-800">
              Tại sao chọn <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Doro Café</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trải nghiệm độc đáo với không khí ấm cúng và nhân vật đáng yêu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-orange-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-800">
              Khám Phá Thế Giới <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Doro</span>
            </h2>
            <p className="text-xl text-gray-600">
              Những hình ảnh đẹp nhất của nhân vật mascot của chúng tôi
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              'dorothy_default.png',
              'dorothy_kimono_render.png',
              'dororong_meme.jpg',
              'dorothy_nostalgia.png'
            ].map((image, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-2xl bg-white p-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <img 
                  src={`/images/doro/${image}`} 
                  alt={`Doro ${index + 1}`}
                  className="w-full h-48 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/gallery" 
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-orange-200 hover:border-orange-300"
            >
              Xem Tất Cả Hình Ảnh
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-pink-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Sẵn Sàng Trải Nghiệm?
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Hãy khám phá menu trà sữa độc đáo của chúng tôi và gặp gỡ Doro đáng yêu!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/menu" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Khám Phá Menu
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Tìm Hiểu Thêm
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}