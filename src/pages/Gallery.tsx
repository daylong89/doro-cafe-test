import { useState } from 'react'
import { X, Download, Heart, Eye } from 'lucide-react'

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [filter, setFilter] = useState('all')

  const images = [
    {
      src: 'dororong_meme.jpg',
      title: 'Dororong Meme',
      category: 'meme',
      description: 'Meme nổi tiếng "Dororong" liên quan đến cam'
    },
    {
      src: 'dorothy_default.png',
      title: 'Dorothy Default',
      category: 'avatar',
      description: 'Avatar mặc định của Dorothy'
    },
    {
      src: 'dorothy_alternate.png',
      title: 'Dorothy Alternate',
      category: 'avatar',
      description: 'Phiên bản avatar thay thế'
    },
    {
      src: 'dorothy_happy_memory.png',
      title: 'Happy Memory',
      category: 'emotion',
      description: 'Kỷ niệm hạnh phúc của Dorothy'
    },
    {
      src: 'dorothy_cover_idle.png',
      title: 'Cover Idle',
      category: 'pose',
      description: 'Hình cover với tư thế thân thiện'
    },
    {
      src: 'dorothy_nostalgia.png',
      title: 'Nostalgia',
      category: 'special',
      description: 'Phiên bản hoài cổ ấm cúng'
    },
    {
      src: 'dorothy_nostalgia_alt.png',
      title: 'Nostalgia Alt',
      category: 'special',
      description: 'Biến thể của phiên bản hoài cổ'
    },
    {
      src: 'dorothy_nostalgia_cover.png',
      title: 'Nostalgia Cover',
      category: 'special',
      description: 'Cover hoài cổ vintage'
    },
    {
      src: 'dorothy_kimono_render.png',
      title: 'Kimono Render',
      category: 'costume',
      description: 'Dorothy trong trang phục kimono'
    },
    {
      src: 'dorothy_skill_burst.png',
      title: 'Skill Burst',
      category: 'action',
      description: 'Kỹ năng đặc biệt năng động'
    },
    {
      src: 'dorothy_nostalgia_skill_burst.png',
      title: 'Nostalgia Skill',
      category: 'action',
      description: 'Phiên bản skill hoài cổ'
    },
    {
      src: 'dorothy_aim_combat.png',
      title: 'Aim Combat',
      category: 'action',
      description: 'Tư thế ngắm bắn chiến đấu'
    },
    {
      src: 'dorothy_red_ash.png',
      title: 'Red Ash',
      category: 'special',
      description: 'Phiên bản Red Ash màu đỏ cam'
    },
    {
      src: 'dorothy_official_mmd.png',
      title: 'Official MMD',
      category: 'official',
      description: 'Mô hình MMD chính thức'
    },
    {
      src: 'dorothy_anniversary_splash.jpg',
      title: 'Anniversary Splash',
      category: 'splash',
      description: 'Splash art kỷ niệm 1 năm'
    },
    {
      src: 'dorothy_over_zone_splash_1.jpg',
      title: 'Over Zone Splash 1',
      category: 'splash',
      description: 'Splash art Over Zone phần 1'
    },
    {
      src: 'dorothy_over_zone_splash_2.jpg',
      title: 'Over Zone Splash 2',
      category: 'splash',
      description: 'Splash art Over Zone phần 2'
    },
    {
      src: 'dorothy_red_ash_splash.jpg',
      title: 'Red Ash Splash',
      category: 'splash',
      description: 'Splash art Red Ash'
    },
    {
      src: 'dorothy_pickup_banner.jpg',
      title: 'Pickup Banner',
      category: 'official',
      description: 'Banner pickup chính thức'
    },
    {
      src: 'dorothy_pinterest_1.jpg',
      title: 'Pinterest Fanart',
      category: 'fanart',
      description: 'Fanart chất lượng cao từ Pinterest'
    }
  ]

  const categories = [
    { key: 'all', label: 'Tất Cả', count: images.length },
    { key: 'avatar', label: 'Avatar', count: images.filter(img => img.category === 'avatar').length },
    { key: 'action', label: 'Hành Động', count: images.filter(img => img.category === 'action').length },
    { key: 'splash', label: 'Splash Art', count: images.filter(img => img.category === 'splash').length },
    { key: 'special', label: 'Đặc Biệt', count: images.filter(img => img.category === 'special').length },
    { key: 'official', label: 'Chính Thức', count: images.filter(img => img.category === 'official').length }
  ]

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter)

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
            <span className="text-orange-600 font-semibold">Thư Viện Doro</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              Bộ Sưu Tập
            </span>
            <br />
            <span className="text-gray-800">Hình Ảnh Doro</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá bộ sưu tập hình ảnh đầy đủ của nhân vật Doro đáng yêu. Từ avatar đến splash art, mỗi hình ảnh đều kể một câu chuyện riêng!
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.key
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md hover:shadow-lg'
              }`}
            >
              {category.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                filter === category.key
                  ? 'bg-white/20 text-white'
                  : 'bg-orange-100 text-orange-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={`/images/doro/${image.src}`} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Icons */}
                <div className="absolute top-3 right-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Eye className="w-5 h-5 text-gray-700" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-3 left-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                  {image.category === 'all' ? 'Tất cả' : 
                   image.category === 'avatar' ? 'Avatar' :
                   image.category === 'action' ? 'Hành động' :
                   image.category === 'splash' ? 'Splash' :
                   image.category === 'special' ? 'Đặc biệt' :
                   image.category === 'official' ? 'Chính thức' :
                   image.category === 'costume' ? 'Trang phục' :
                   image.category === 'emotion' ? 'Cảm xúc' :
                   image.category === 'pose' ? 'Pose' :
                   image.category === 'meme' ? 'Meme' :
                   image.category === 'fanart' ? 'Fan Art' :
                   image.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-12 text-white text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Bộ Sưu Tập Hoàn Chỉnh
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              {images.length} hình ảnh chất lượng cao của Doro, bao gồm tất cả các pose, biểu cảm và trang phục khác nhau
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold">20</div>
                <div className="text-orange-100 text-sm">Hình ảnh</div>
              </div>
              <div>
                <div className="text-3xl font-bold">6</div>
                <div className="text-orange-100 text-sm">Danh mục</div>
              </div>
              <div>
                <div className="text-3xl font-bold">HD</div>
                <div className="text-orange-100 text-sm">Chất lượng</div>
              </div>
              <div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-orange-100 text-sm">Chính thức</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <img 
              src={`/images/doro/${selectedImage}`} 
              alt="Doro preview"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <div className="flex justify-between items-center text-white">
                <div>
                  <h3 className="text-xl font-bold">
                    {images.find(img => img.src === selectedImage)?.title}
                  </h3>
                  <p className="text-gray-200">
                    {images.find(img => img.src === selectedImage)?.description}
                  </p>
                </div>
                <button className="w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors">
                  <Download className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}