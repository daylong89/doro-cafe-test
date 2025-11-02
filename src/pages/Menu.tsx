import { Star, Clock, Coffee } from 'lucide-react'

export function Menu() {
  const menuCategories = [
    {
      title: 'Doro Signature Series',
      subtitle: 'Bộ sưu tập đặc trưng của Doro',
      items: [
        {
          name: 'Dororong Orange Milk Tea',
          price: '49.000₫',
          description: 'Trà sữa cam đặc trưng với hương vị cam tươi ngon, phả quyến sức mạnh của Doro',
          image: 'dororong_meme.jpg',
          isSpecial: true,
          prepTime: '5 phút'
        },
        {
          name: 'Dorothy Power Burst',
          price: '52.000₫',
          description: 'Trà sữa đào với tôpping trân châu rainbow, đầy năng lượng như kỹ năng đặc biệt',
          image: 'dorothy_skill_burst.png',
          isSpecial: true,
          prepTime: '7 phút'
        },
        {
          name: 'Kawaii Pink Dream',
          price: '45.000₫',
          description: 'Trà sữa dâu tây màu hồng đề thương như màu tóc của Doro',
          image: 'dorothy_happy_memory.png',
          isSpecial: false,
          prepTime: '5 phút'
        }
      ]
    },
    {
      title: 'Memory Collection',
      subtitle: 'Những kỷ niệm đẹp của Doro',
      items: [
        {
          name: 'Nostalgia Vintage Tea',
          price: '48.000₫',
          description: 'Trà sữa bí mật công thức cổ điển, mang hương vị hoài cổ',
          image: 'dorothy_nostalgia.png',
          isSpecial: false,
          prepTime: '6 phút'
        },
        {
          name: 'Kimono Elegance',
          price: '55.000₫',
          description: 'Trà xanh matcha cao cấp với sữa tươi, tinh tế như trang phục kimono',
          image: 'dorothy_kimono_render.png',
          isSpecial: true,
          prepTime: '8 phút'
        },
        {
          name: 'Happy Memory Delight',
          price: '42.000₫',
          description: 'Trà sữa vầng với topping marshmallow, ngọt ngào như kỷ niệm đẹp',
          image: 'dorothy_cover_idle.png',
          isSpecial: false,
          prepTime: '5 phút'
        }
      ]
    },
    {
      title: 'Combat Series',
      subtitle: 'Dành cho những chiến binh thực thụ',
      items: [
        {
          name: 'Red Ash Battle Fuel',
          price: '50.000₫',
          description: 'Trà đen đậm đà với espresso, tiếp thêm năng lượng cho trận chiến',
          image: 'dorothy_red_ash.png',
          isSpecial: false,
          prepTime: '6 phút'
        },
        {
          name: 'Over Zone Ultimate',
          price: '58.000₫',
          description: 'Bộ đôi trà sữa cam + trà xanh, sức mạnh tối đa của Doro',
          image: 'dorothy_over_zone_splash_1.jpg',
          isSpecial: true,
          prepTime: '10 phút'
        },
        {
          name: 'Combat Ready Boost',
          price: '47.000₫',
          description: 'Trà sữa socola đậm đà với caffeine tăng cường',
          image: 'dorothy_aim_combat.png',
          isSpecial: false,
          prepTime: '5 phút'
        }
      ]
    },
    {
      title: 'Special Occasions',
      subtitle: 'Dành cho những dịp đặc biệt',
      items: [
        {
          name: 'Anniversary Celebration',
          price: '65.000₫',
          description: 'Trà sữa đặc biệt kỷ niệm với topping hạt ngọc tây và kem phủ vàng',
          image: 'dorothy_anniversary_splash.jpg',
          isSpecial: true,
          prepTime: '12 phút'
        },
        {
          name: 'Official MMD Special',
          price: '60.000₫',
          description: 'Phiên bản giới hạn với hương vị bí mật, chỉ dành cho fan thực thụ',
          image: 'dorothy_official_mmd.png',
          isSpecial: true,
          prepTime: '8 phút'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-lg border border-orange-200">
            <img 
              src="/images/doro/dororong_meme.jpg" 
              alt="Doro" 
              className="w-8 h-8 rounded-full"
            />
            <span className="text-orange-600 font-semibold">Menu Trà Sữa Doro</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Thực Đơn
            </span>
            <br />
            <span className="text-gray-800">Doro Café</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá bộ sưu tập trà sữa độc đáo được lấy cảm hứng từ nhân vật Doro đáng yêu. Mỗi ly đều mang theo một câu chuyện riêng!
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="">
              {/* Category Header */}
              <div className="text-center space-y-3 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                  {category.title}
                </h2>
                <p className="text-lg text-gray-600">
                  {category.subtitle}
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto rounded-full"></div>
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className={`group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 ${
                      item.isSpecial ? 'ring-2 ring-orange-200 border-2 border-orange-100' : ''
                    }`}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={`/images/doro/${item.image}`} 
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      
                      {/* Special Badge */}
                      {item.isSpecial && (
                        <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <Star className="w-4 h-4" fill="currentColor" />
                          <span>Đặc biệt</span>
                        </div>
                      )}

                      {/* Prep Time */}
                      <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{item.prepTime}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                          {item.price}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.description}
                      </p>

                      {/* Order Button */}
                      <button className="w-full bg-gradient-to-r from-orange-100 to-pink-100 hover:from-orange-200 hover:to-pink-200 text-orange-700 font-semibold py-3 rounded-2xl transition-all duration-300 group-hover:shadow-lg flex items-center justify-center space-x-2">
                        <Coffee className="w-5 h-5" />
                        <span>Thêm vào giỏ hàng (ảo)</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-12 text-white">
            <div className="space-y-6">
              <div className="flex justify-center">
                <img 
                  src="/images/doro/dorothy_happy_memory.png" 
                  alt="Doro vui vẻ" 
                  className="w-24 h-24 rounded-full border-4 border-white/20 shadow-lg"
                />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Chưa tìm thấy món yêu thích?
              </h2>
              <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                Hãy gặp Doro ở trang "Về Doro" để tìm hiểu thêm về nhân vật đáng yêu này!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-orange-600 font-semibold rounded-full hover:bg-orange-50 transition-all duration-300 shadow-lg">
                  Liên Hệ Doro
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-600 transition-all duration-300">
                  Góp Ý Kiến
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}