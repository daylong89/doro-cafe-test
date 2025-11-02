import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-100 to-pink-100 border-t-4 border-orange-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo và thông tin */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-orange-200 to-pink-200 p-1">
                <img 
                  src="/images/doro/dororong_meme.jpg" 
                  alt="Doro" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Doro Café
                </h3>
                <p className="text-sm text-orange-600">Trà Sữa Dororong Đáng Yêu</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Quán trà sữa ảo với nhân vật Doro đáng yêu từ NIKKE. Nơi mang đến những ly trà sữa thơm ngon với không khí ấm cúng và vui tươi.
            </p>
          </div>

          {/* Menu nhanh */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Menu Nhanh</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-600 hover:text-orange-600 transition-colors">Trang Chủ</a></li>
              <li><a href="/menu" className="text-gray-600 hover:text-orange-600 transition-colors">Menu Trà Sữa</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-orange-600 transition-colors">Về Doro</a></li>
              <li><a href="/gallery" className="text-gray-600 hover:text-orange-600 transition-colors">Thư Viện Hình Ảnh</a></li>
            </ul>
          </div>

          {/* Thông tin liên hệ (ảo) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Liên Hệ</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📍 123 Đường Doro, Quận Kawaii, TP. Anime</p>
              <p>📞 0123-DORO-999</p>
              <p>📧 hello@dorocafe.com</p>
              <p>🕒 Mở cửa 24/7 trong thế giới ảo</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
            Được tạo với <Heart className="w-4 h-4 text-pink-500" fill="currentColor" /> bởi MiniMax Agent
            <span className="mx-2">•</span>
            Nhân vật Doro © ShiftUp (NIKKE)
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Đây là website trưng bày phi thương mại - Không phải quán trà sữa thực tế
          </p>
        </div>
      </div>
    </footer>
  )
}