'use client';

import imgLpFv1 from "./0f4c380b4e4d0eb7928efcc870e6e1d8b8bb74a3.png";
import imgChatGptImage202666211824RemovebgPreview1 from "./a5286f2d5406e296a687b4debcf8d7a4bd5ca6a8.png";

export default function SpDiagnosticLP() {
  return (
    <div className="w-[390px] relative overflow-hidden" style={{ fontFamily: '"Noto Serif JP", serif' }}>
      {/* Header/Logo */}
      <div className="relative w-full pt-6 px-6 pb-4 border-b border-gray-200 bg-white">
        <div className="w-28 h-12 bg-white border-2 border-black flex items-center justify-center">
          <p className="text-xs font-serif font-bold text-black">ロゴ</p>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full" style={{ backgroundImage: `url(${imgLpFv1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#8B6F47', minHeight: '600px' }}>
        <div className="w-full px-5 py-8 space-y-5">
          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-800 font-serif leading-snug">
              マッチングアプリで<br />出会った彼…
            </h1>
          </div>

          {/* Pain Points */}
          <div className="space-y-3">
            <div className="flex gap-2.5 items-start">
              <svg className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="13.5" stroke="currentColor" strokeWidth="3" />
                <path d="M9 14.5L14 19.5" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                <path d="M14.3064 19.203L22.9998 10.5" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
              </svg>
              <p className="text-xs text-gray-700 font-serif text-left pt-0.5 leading-snug">昼間や休日になかなか会えない…</p>
            </div>
            
            <div className="flex gap-2.5 items-start">
              <svg className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="13.5" stroke="currentColor" strokeWidth="3" />
                <path d="M9 14.5L14 19.5" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                <path d="M14.3064 19.203L22.9998 10.5" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
              </svg>
              <p className="text-xs text-gray-700 font-serif text-left pt-0.5 leading-snug">結婚の話になると話題を変えられる</p>
            </div>

            <div className="flex gap-2.5 items-start">
              <svg className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="13.5" stroke="currentColor" strokeWidth="3" />
                <path d="M9 14.5L14 19.5" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
                <path d="M14.3064 19.203L22.9998 10.5" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
              </svg>
              <p className="text-xs text-gray-700 font-serif text-left pt-0.5 leading-snug">友人や家族を紹介してくれない</p>
            </div>
          </div>

          {/* Main Copy Circle */}
          <div className="bg-pink-500 rounded-full py-5 px-3 text-center mt-5">
            <p className="text-base font-bold text-white font-serif leading-tight">
              もしかして彼、<br />
              <span className="block">婚活者かもしれない</span>
            </p>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-full transition flex items-center justify-center gap-2 text-xs">
            結婚観の相性診断でわかる
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Empathy Section */}
      <div className="w-full py-8 px-5 bg-white">
        <h2 className="text-sm font-bold text-center mb-5 font-serif">こんな違和感、ありませんか？</h2>
        
        <div className="space-y-2.5">
          <div className="flex gap-2.5 items-start">
            <span className="text-pink-500 text-base font-serif flex-shrink-0 pt-0.5">○</span>
            <p className="text-xs text-gray-700 pt-0.5 font-serif leading-snug">記念日より仕事を優先される</p>
          </div>
          <div className="flex gap-2.5 items-start">
            <span className="text-pink-500 text-base font-serif flex-shrink-0 pt-0.5">●</span>
            <p className="text-xs text-gray-700 pt-0.5 font-serif leading-snug">結婚への具体的な考えを聞きたいけど聞けない</p>
          </div>
          <div className="flex gap-2.5 items-start">
            <span className="text-pink-500 text-base font-serif flex-shrink-0 pt-0.5">◎</span>
            <p className="text-xs text-gray-700 pt-0.5 font-serif leading-snug">好きな人の気持ちに不安を感じている</p>
          </div>
          <div className="flex gap-2.5 items-start">
            <span className="text-pink-500 text-base font-serif flex-shrink-0 pt-0.5">◆</span>
            <p className="text-xs text-gray-700 pt-0.5 font-serif leading-snug">人んで婚活をしてくれていない</p>
          </div>
          <div className="flex gap-2.5 items-start">
            <span className="text-pink-500 text-base font-serif flex-shrink-0 pt-0.5">■</span>
            <p className="text-xs text-gray-700 pt-0.5 font-serif leading-snug">もっと結婚の話をしたい</p>
          </div>
        </div>

        {/* Gray Box */}
        <div className="mt-5 bg-gray-600 text-white rounded-lg p-3.5 text-center">
          <p className="text-xs font-serif leading-snug">
            こういった違和感を感じているあなたが<br />今すべきことを、恋愛心理学をもとに<br />診断いたします。
          </p>
        </div>

        {/* Secondary CTA */}
        <button className="w-full mt-5 bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-full transition flex items-center justify-center gap-2 text-xs">
          結婚観の相性診断でわかる
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Diagnostic Questions Section */}
      <div className="w-full py-8 px-5 bg-white">
        <h2 className="text-sm font-bold text-center mb-6 font-serif">読むだけで分かること</h2>
        
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className="mb-6">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-9 h-9 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold font-serif text-xs">
                0{num}
              </div>
              <div className="flex-grow">
                <p className="text-xs text-gray-700 font-serif mb-1.5 leading-snug">
                  診断項目{num}: マッチングアプリで出会った彼との結婚観の相性や、関係の将来性について診断します。
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((circle) => (
                    <div key={circle} className="w-4 h-4 rounded-full bg-gray-300"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Results Section */}
      <div className="w-full py-8 px-5 bg-pink-100">
        <h2 className="text-sm font-bold text-center mb-5 font-serif">あなたの診断結果</h2>
        
        {/* Pie Chart Placeholder */}
        <div className="flex justify-center mb-5">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 rounded-full border-8 border-pink-500 flex items-center justify-center bg-gradient-to-br from-pink-300 to-pink-500">
              <div className="text-center">
                <p className="text-2xl font-bold text-white font-serif">68%</p>
                <p className="text-xs text-white font-serif mt-0.5">結婚観が合致</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-700 font-serif text-center leading-snug">
          あなたと彼の結婚観が一致している可能性があります。
        </p>
      </div>

      {/* Bottom Info Section */}
      <div className="w-full py-6 px-5 bg-white border-t border-gray-200">
        <div className="text-center text-xs text-gray-600 font-serif space-y-0.5">
          <p>ナゾヨラシ / 恋愛心理学コンサルタント</p>
          <p>東京都渋谷区 / 090-1234-5678</p>
          <p>info@nazoyorashi.jp</p>
        </div>
      </div>
    </div>
  );
}
