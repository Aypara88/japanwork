import { useEffect, useState } from "react";
import SpLP from "@/imports/Sp診断lpデザインカンプ/index";
import PcLP from "@/imports/Pc診断lpデザインカンプ/index";

const SP_DESIGN_WIDTH = 390;
const SP_DESIGN_HEIGHT = 5295;
const PC_DESIGN_WIDTH = 1440;
const PC_DESIGN_HEIGHT = 7763;

// SP Final CTA section — replaces the lowercase <cta /> that React won't render
function SpFinalCta() {
  return (
    <div>
      {/* Pink background section */}
      <div className="absolute bg-[#dc546b] h-[510px] left-0 top-[4436px] w-[390px]" />
      {/* Header text */}
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Serif_JP:Black',sans-serif] font-black leading-[0] left-1/2 text-[#fef8ee] text-[28px] text-center top-[4469px] tracking-[2.8px] w-[342px]">
        <p className="leading-[38px] mb-0">まだ、一人で結論を</p>
        <p className="leading-[38px]">出さないでください。</p>
      </div>
      {/* Body text */}
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Serif_JP:Bold',sans-serif] font-bold leading-[0] left-[calc(50%+6.5px)] text-[#fef8ee] text-[18px] text-center top-[4560px] tracking-[1.8px] w-[367px] whitespace-pre-wrap">
        <p className="leading-[28px] mb-0">
          本当に既婚者なのか。
          <br aria-hidden />
          慰謝料を請求できる可能性があるのか。
          <br aria-hidden />
          今後どのように対応すればよいのか。
        </p>
        <p className="leading-[28px] mb-0">
          <br aria-hidden />
          次のページでは、
        </p>
        <p className="leading-[28px] mb-0">独身偽装問題に詳しい弁護士が、</p>
        <p className="leading-[28px] mb-0">あなたのケースで知っておきたい</p>
        <p className="leading-[28px] mb-0">ポイントを分かりやすく</p>
        <p className="leading-[28px]">解説しています。</p>
      </div>
      {/* CTA button background */}
      <div className="-translate-x-1/2 absolute bg-white h-[70px] left-[calc(50%+0.5px)] rounded-[45px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] top-[4833px] w-[343px]" />
      {/* Checkmark icon */}
      <div className="absolute left-[310px] size-[30px] top-[4853px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <g>
            <path d="M9 14.5001L14 19.5001" stroke="#DC546B" strokeLinecap="round" strokeWidth="3" />
            <path d="M14.3064 19.203L22.9998 10.5" stroke="#DC546B" strokeLinecap="round" strokeWidth="3" />
            <circle cx="15" cy="15" r="13.5" stroke="#DC546B" strokeWidth="3" />
          </g>
        </svg>
      </div>
      {/* CTA text */}
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Sans_JP:Bold',sans-serif] font-bold leading-[0] left-[calc(50%-16.5px)] text-[24px] text-black text-center text-shadow-[2px_2px_4px_rgba(0,0,0,0.25)] top-[4848px] tracking-[2.4px] whitespace-nowrap">
        <p className="leading-[30px] mb-0">私の場合を</p>
        <p className="leading-[30px]">詳しく確認する</p>
      </div>
    </div>
  );
}

// PC Final CTA section — replaces the lowercase <cta /> that React won't render
function PcFinalCta() {
  return (
    <div>
      {/* Pink background */}
      <div className="-translate-x-1/2 absolute bg-[#dc546b] h-[696px] left-1/2 top-[6067px] w-[1440px]" />
      {/* Header */}
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Serif_JP:Bold',sans-serif] font-bold leading-[1.5] left-[calc(50%+0.5px)] text-[48px] text-center text-white top-[6148px] tracking-[4.8px] whitespace-nowrap">
        まだ、一人で結論を出さないでください。
      </p>
      {/* Body */}
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Noto_Serif_JP:Bold',sans-serif] font-bold leading-[0] left-1/2 text-[#fef8ee] text-[0px] text-center top-[6267px] tracking-[2.4px] w-[1120px] whitespace-pre-wrap">
        <p className="font-['Noto_Serif_JP:Bold',sans-serif] font-bold leading-[48px] mb-0 text-[28px]">
          本当に既婚者なのか。
          <br aria-hidden />
          慰謝料を請求できる可能性があるのか。
          <br aria-hidden />
          今後どのように対応すればよいのか。
        </p>
        <p className="font-['Noto_Serif_JP:Bold',sans-serif] font-bold leading-[48px] mb-0 text-[28px]">
          <br aria-hidden />
          次のページでは、独身偽装問題に詳しい弁護士が、
        </p>
        <p className="font-['Noto_Serif_JP:Bold',sans-serif] font-bold leading-[48px] text-[28px]">
          あなたのケースで知っておきたいポイントを分かりやすく解説しています。
        </p>
      </div>
      {/* CTA button background */}
      <div className="-translate-x-1/2 absolute bg-white h-[80px] left-[calc(50%+0.5px)] rounded-[45px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] top-[6592px] w-[667px]" />
      {/* Checkmark icon */}
      <div className="absolute left-[954px] size-[40px] top-[6611px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g>
            <circle cx="20" cy="20" r="18.5" stroke="#FA5B76" strokeWidth="3" />
            <line stroke="#FA5B76" strokeWidth="3" x1="9.8549" x2="15.3293" y1="20.9603" y2="26.6537" />
            <line stroke="#FA5B76" strokeWidth="3" x1="30.1156" x2="14.9888" y1="10.935" y2="28.3551" />
          </g>
        </svg>
      </div>
      {/* CTA text */}
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP:Black',sans-serif] font-black leading-[24px] left-[calc(50%-240px)] text-[32px] text-black top-[6620px] tracking-[6.4px] whitespace-nowrap">
        私の場合を詳しく確認する
      </p>
    </div>
  );
}

export default function App() {
  const [scale, setScale] = useState({ sp: 1, pc: 1, isMobile: true, ready: false });

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const isMobile = vw < 1024;
      setScale({
        sp: vw / SP_DESIGN_WIDTH,
        pc: vw / PC_DESIGN_WIDTH,
        isMobile,
        ready: true,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!scale.ready) return null;

  return (
    <div className="bg-white w-full overflow-x-hidden">
      <style>{`
        div[class*="rounded-[30px]"][class*="shadow"] {
          cursor: pointer;
        }
        div[class*="rounded-[45px]"][class*="shadow"] {
          cursor: pointer;
        }
        div[class*="rounded-[30px]"][class*="shadow"]:active {
          filter: brightness(0.88);
        }
        div[class*="rounded-[45px]"][class*="shadow"]:active {
          filter: brightness(0.88);
        }
      `}</style>

      {/* Mobile layout: SP design (<1024px) */}
      {scale.isMobile && (
        <div
          style={{
            width: "100vw",
            height: SP_DESIGN_HEIGHT * scale.sp,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              width: SP_DESIGN_WIDTH,
              height: SP_DESIGN_HEIGHT,
              position: "absolute",
              top: 0,
              left: 0,
              transformOrigin: "top left",
              transform: `scale(${scale.sp})`,
            }}
          >
            <SpLP />
            <SpFinalCta />
          </div>
        </div>
      )}

      {/* Desktop layout: PC design (>=1024px) */}
      {!scale.isMobile && (
        <div
          style={{
            width: "100vw",
            height: PC_DESIGN_HEIGHT * scale.pc,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              width: PC_DESIGN_WIDTH,
              height: PC_DESIGN_HEIGHT,
              position: "absolute",
              top: 0,
              left: 0,
              transformOrigin: "top left",
              transform: `scale(${scale.pc})`,
            }}
          >
            <PcLP />
            <PcFinalCta />
          </div>
        </div>
      )}
    </div>
  );
}
