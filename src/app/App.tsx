import { useEffect, useState } from "react";
import SpLP from "@/imports/Sp診断lpデザインカンプ/index";
import PcLP from "@/imports/Pc診断lpデザインカンプ/index";

const SP_DESIGN_WIDTH = 390;
const SP_DESIGN_HEIGHT = 5300;
const PC_DESIGN_WIDTH = 1440;
const PC_DESIGN_HEIGHT = 7148;

export default function App() {
  const [state, setState] = useState({ spScale: 1, pcScale: 1, isMobile: true, ready: false });

  useEffect(() => {
    const update = () => {
      const vw = window.innerWidth;
      const isMobile = vw < 1024;
      setState({ spScale: vw / SP_DESIGN_WIDTH, pcScale: vw / PC_DESIGN_WIDTH, isMobile, ready: true });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!state.ready) return null;

  return (
    <div className="bg-white w-full overflow-x-hidden">
      <style>{`
        /* SP pill buttons (rounded-[30px] with shadow) */
        div[class*="rounded-[30px]"][class*="shadow"],
        /* PC pill buttons (rounded-[45px] with shadow) */
        div[class*="rounded-[45px]"][class*="shadow"],
        /* PC hero gradient button (rounded-[45px], no shadow, has border) */
        div[class*="rounded-[45px]"][class*="bg-gradient-to-b"],
        /* Footer circle arrow buttons */
        div[class*="size-[60px]"][class*="flex"][class*="items-center"] {
          cursor: pointer;
        }

        /* Text and icons inside all CTA buttons */
        [data-name*="CTA"] *,
        [data-name*="ボタン"] *,
        div[class*="size-[60px]"][class*="flex"][class*="items-center"] * {
          cursor: pointer;
        }

        div[class*="rounded-[30px]"][class*="shadow"]:active,
        div[class*="rounded-[45px]"][class*="shadow"]:active,
        div[class*="rounded-[45px]"][class*="bg-gradient-to-b"]:active,
        div[class*="size-[60px]"][class*="flex"][class*="items-center"]:active {
          filter: brightness(0.88);
        }
      `}</style>

      {/* Mobile: SP design (<1024px) */}
      {state.isMobile && (
        <div style={{ width: "100vw", height: SP_DESIGN_HEIGHT * state.spScale, position: "relative", overflow: "hidden" }}>
          <div style={{ width: SP_DESIGN_WIDTH, height: SP_DESIGN_HEIGHT, position: "absolute", top: 0, left: 0, transformOrigin: "top left", transform: `scale(${state.spScale})` }}>
            <SpLP />
          </div>
        </div>
      )}

      {/* Desktop: PC design (≥1024px) */}
      {!state.isMobile && (
        <div style={{ width: "100vw", height: PC_DESIGN_HEIGHT * state.pcScale, position: "relative", overflow: "hidden" }}>
          <div style={{ width: PC_DESIGN_WIDTH, height: PC_DESIGN_HEIGHT, position: "absolute", top: 0, left: 0, transformOrigin: "top left", transform: `scale(${state.pcScale})` }}>
            <PcLP />
          </div>
        </div>
      )}
    </div>
  );
}
