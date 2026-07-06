'use client';

import imgRectangle20 from "./403ead74f01a7d688e26ac8283b4224fa0042d50.png";
import imgChatGptImage202666211824RemovebgPreview1 from "./a5286f2d5406e296a687b4debcf8d7a4bd5ca6a8.png";

export default function PcDiagnosticLP() {
  return (
    <div className="w-[1440px] relative overflow-hidden" style={{ fontFamily: '"Noto Serif JP", serif' }}>
      {/* Header */}
      <div className="relative w-full py-6 px-20 border-b border-gray-200 bg-white">
        <div className="w-28 h-14 bg-white border-2 border-black flex items-center justify-center">
          <p className="text-sm font-serif font-bold text-black">ロゴ</p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full py-28 px-20" style={{ backgroundImage: `url(${imgRectangle20})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#8B6F47', minHeight: '500px' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-5xl font-bold text-gray-800 font-serif leading-tight">
                マッチングアプリで<br />出会った彼…
              </h1>
            </div>

            {/* Pain Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-8 h-8 text-pink-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeWidth="3" />
                  <path d="M9.8549 20.9603L15.3293 26.6537" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                  <path d="M30.1156 10.935L14.9888 28.3551" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                </svg>
                <p className="text-base text-gray-700 font-serif pt-0.5">昼間や休日になかなか会えない…</p>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-8 h-8 text-pink-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeWidth="3" />
                  <path d="M9.8549 20.9603L15.3293 26.6537" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                  <path d="M30.1156 10.935L14.9888 28.3551" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                </svg>
                <p className="text-base text-gray-700 font-serif pt-0.5">結婚の話になると話題を変えられる</p>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-8 h-8 text-pink-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeWidth="3" />
                  <path d="M9.8549 20.9603L15.3293 26.6537" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                  <path d="M30.1156 10.935L14.9888 28.3551" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                </svg>
                <p className="text-base text-gray-700 font-serif pt-0.5">友人や家族を紹介してくれない</p>
              </div>
            </div>

            {/* Main CTA Circle */}
            <div className="inline-block bg-pink-500 rounded-full py-7 px-8">
              <p className="text-2xl font-bold text-white font-serif text-center leading-tight">
                もしかして彼、<br />
                <span>婚活者かもしれない</span>
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full transition inline-flex items-center gap-3">
              結婚観の相性診断でわかる
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right: Image */}
          <div className="flex items-center justify-center">
            <img src={imgChatGptImage202666211824RemovebgPreview1} alt="Woman thinking" className="w-full h-auto object-contain max-h-96" />
          </div>
        </div>
      </div>

      {/* Empathy Section */}
      <div className="w-full py-20 px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 font-serif">こんな違和感、ありませんか？</h2>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4">
              <span className="text-pink-500 text-3xl font-serif flex-shrink-0 pt-1">○</span>
              <p className="text-base text-gray-700 font-serif pt-1">記念日より仕事を優先される</p>
            </div>
            <div className="flex gap-4">
              <span className="text-pink-500 text-3xl font-serif flex-shrink-0 pt-1">●</span>
              <p className="text-base text-gray-700 font-serif pt-1">結婚への具体的な考えを聞きたいけど聞けない</p>
            </div>
            <div className="flex gap-4">
              <span className="text-pink-500 text-3xl font-serif flex-shrink-0 pt-1">◎</span>
              <p className="text-base text-gray-700 font-serif pt-1">好きな人の気持ちに不安を感じている</p>
            </div>
            <div className="flex gap-4">
              <span className="text-pink-500 text-3xl font-serif flex-shrink-0 pt-1">◆</span>
              <p className="text-base text-gray-700 font-serif pt-1">人んで婚活をしてくれていない</p>
            </div>
            <div className="col-span-2">
              <div className="flex gap-4 max-w-md">
                <span className="text-pink-500 text-3xl font-serif flex-shrink-0 pt-1">■</span>
                <p className="text-base text-gray-700 font-serif pt-1">もっと結婚の話をしたい</p>
              </div>
            </div>
          </div>

          {/* Gray Box */}
          <div className="bg-gray-600 text-white rounded-lg p-8 text-center mb-8">
            <p className="text-lg font-serif leading-relaxed">
              こういった違和感を感じているあなたが今すべきことを、<br />
              恋愛心理学をもとに診断いたします。
            </p>
          </div>

          {/* Secondary CTA */}
          <div className="flex justify-center">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-full transition inline-flex items-center gap-3">
              結婚観の相性診断でわかる
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Diagnostic Questions Section */}
      <div className="w-full py-20 px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 font-serif">読むだけで分かること</h2>
          
          <div className="space-y-12">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="flex gap-8">
                <div className="flex-shrink-0 w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold font-serif text-xl">
                  0{num}
                </div>
                <div className="flex-grow pt-1">
                  <p className="text-lg text-gray-700 font-serif mb-4 leading-relaxed">
                    診断項目{num}: マッチングアプリで出会った彼との結婚観の相性、関係の将来性、コミュニケーションの課題について診断します。
                  </p>
                  <div className="flex gap-3">
                    {[1, 2, 3, 4, 5].map((circle) => (
                      <div key={circle} className="w-8 h-8 rounded-full bg-gray-300"></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="w-full py-20 px-20 bg-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 font-serif">あなたの診断結果</h2>
          
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Pie Chart */}
            <div className="flex justify-center">
              <div className="relative w-56 h-56">
                <div className="absolute inset-0 rounded-full border-8 border-pink-500 flex items-center justify-center bg-gradient-to-br from-pink-300 to-pink-500">
                  <div className="text-center">
                    <p className="text-6xl font-bold text-white font-serif">68%</p>
                    <p className="text-sm text-white font-serif mt-2">結婚観が合致</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Result Text */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 font-serif leading-relaxed">
                あなたと彼の結婚観が一致している可能性があります。
              </p>
              <p className="text-lg text-gray-700 font-serif leading-relaxed">
                これは両者が人生設計について共通の見解を持つことを示しており、関係の継続と発展に向けた良好な兆候です。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Call-to-Action Section */}
      <div className="w-full py-20 px-20 bg-pink-500 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 font-serif">診断結果を見て、「考え方」がわかった……</h2>
          
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left: Description */}
            <div>
              <p className="text-lg font-serif leading-relaxed mb-8">
                そう思った人へ、次に考えるべき行動を提案します。<br />
                あなたの大切な人との関係をより良いものにするために。
              </p>

              <div className="space-y-4 text-lg font-serif">
                <div className="flex gap-4">
                  <span className="flex-shrink-0">●</span>
                  <span>良い人だからこそ聞きにくい「結婚」について</span>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0">●</span>
                  <span>これまで「結婚」について聞けていない理由</span>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0">●</span>
                  <span>二人の結婚観が合致したかどうか、確かめる方法</span>
                </div>
                <div className="flex gap-4">
                  <span className="flex-shrink-0">●</span>
                  <span>それでも、心が「結婚」が「付き」ない</span>
                </div>
              </div>
            </div>

            {/* Right: Button */}
            <div className="flex flex-col justify-center items-center">
              <button className="w-full bg-white text-pink-500 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition text-xl font-serif">
                私の場合をくわしく聞きたい
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 px-20 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm text-gray-600 font-serif">
          <div>
            <p>ナゾヨラシ / 恋愛心理学コンサルタント</p>
            <p className="mt-1">東京都渋谷区 / 090-1234-5678</p>
          </div>
          <p>info@nazoyorashi.jp</p>
        </div>
      </footer>
    </div>
  );
}
