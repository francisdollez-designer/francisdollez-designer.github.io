import svgPaths from "../imports/svg-8ezuhf0e4g";
import img01Av1 from "figma:asset/61a9f1f0e52473ebfe45ba6bd668dabbc11b3d2a.png";
import img01Ap1 from "figma:asset/94ea2644af6db594e6e94d7321b36f664fff28b6.png";
import img01Av2 from "figma:asset/c300c3c54a3df185127c34014ce08e3c608355c4.png";
import img01Ap2 from "figma:asset/fa2f03009f05a3e30bb933a58740bde38e3a9e77.png";
import img01Av3 from "figma:asset/9060f1766c5430f74936fb8ce65bb80e36855936.png";
import img01Ap3 from "figma:asset/2b7abfc38573b8811a4b7596c64ddecacb4c4905.png";
import img01Av4 from "figma:asset/d43495a384d1f79db479c9674a4fbc5452b45942.png";
import img01Ap4 from "figma:asset/0aa225b1187bdb5868ff63510a267920e34e8458.png";
import img01Av5 from "figma:asset/e2df98c4f9937120a4cc08ba5af734f613799450.png";
import img01Ap5 from "figma:asset/f927d0acf82364c1677bf242ccdb4d5d49d1a930.png";

// ─── République Française marianne logo ──────────────────────────────────────
function MarianneLogo({ size = "sm" }: { size?: "sm" | "lg" }) {
  const isLg = size === "lg";
  const bleuW = isLg ? 25.94 : 15.56;
  const bleuH = isLg ? 20 : 11.996;
  const rougeW = isLg ? 24.29 : 14.57;
  const rougeH = isLg ? 20 : 12;
  const logoW = isLg ? 55 : 33;
  const logoH = isLg ? 20 : 12;
  const bleuLeft = isLg
    ? "calc(50% - 14.53px)"
    : "calc(50% - 8.72px)";
  const rougeLeft = isLg
    ? "calc(50% + 15.35px)"
    : "calc(50% + 9.22px)";
  const deviseW = isLg ? 52 : 32;
  const deviseH = isLg ? 37 : 22;

  return (
    <div
      className="flex flex-col items-start p-3"
      style={{
        fontFamily: "Marianne, sans-serif",
        gap: isLg ? 6 : 4,
      }}
    >
      <div
        className="relative"
        style={{ width: logoW, height: logoH }}
      >
        {/* Bleu */}
        <svg
          style={{
            position: "absolute",
            left: bleuLeft,
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: bleuW,
            height: bleuH,
          }}
          viewBox={`0 0 ${bleuW} ${bleuH}`}
          fill="none"
        >
          {isLg ? (
            <>
              <path d={svgPaths.p25eee620} fill="#000091" />
              <path d={svgPaths.p286d3e00} fill="#000091" />
              <path
                clipRule="evenodd"
                d={svgPaths.p9924880}
                fill="#000091"
                fillRule="evenodd"
              />
            </>
          ) : (
            <>
              <path d={svgPaths.p39401900} fill="#000091" />
              <path d={svgPaths.p227ecf00} fill="#000091" />
              <path
                clipRule="evenodd"
                d={svgPaths.p24bf5e70}
                fill="#000091"
                fillRule="evenodd"
              />
            </>
          )}
        </svg>
        {/* Rouge */}
        <svg
          style={{
            position: "absolute",
            left: rougeLeft,
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: rougeW,
            height: rougeH,
          }}
          viewBox={`0 0 ${rougeW} ${rougeH}`}
          fill="none"
        >
          <path
            d={isLg ? svgPaths.p294f7c80 : svgPaths.p2e29380}
            fill="#E1000F"
          />
        </svg>
      </div>
      <div
        className="font-bold uppercase"
        style={{
          fontSize: isLg ? 20 : 12,
          lineHeight: isLg ? "21px" : "12px",
          letterSpacing: isLg ? "0.1px" : "0.06px",
        }}
      >
        <p className="mb-0">
          {isLg ? "Intitulé " : "Intitulé"}
        </p>
        <p>{isLg ? "officiel" : "Officiel"}</p>
      </div>
      <svg
        style={{ width: deviseW, height: deviseH }}
        viewBox={isLg ? "0 0 52 37" : "0 0 31.9995 21.9995"}
        fill="none"
      >
        {isLg ? (
          <g>
            <path
              clipRule="evenodd"
              d={svgPaths.p6bbd300}
              fill="black"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p2bb7eb30}
              fill="black"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p21bca8f2}
              fill="black"
              fillRule="evenodd"
            />
          </g>
        ) : (
          <g>
            <path
              clipRule="evenodd"
              d={svgPaths.p13d13180}
              fill="black"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p1ad7f700}
              fill="black"
              fillRule="evenodd"
            />
            <path
              clipRule="evenodd"
              d={svgPaths.p224d2180}
              fill="black"
              fillRule="evenodd"
            />
          </g>
        )}
      </svg>
    </div>
  );
}

// ─── DomiFa Logo ─────────────────────────────────────────────────────────────
function DomifaLogo() {
  return (
    <div className="relative h-[29px] w-[148px] overflow-clip shrink-0">
      <div className="absolute inset-[5.16%_86.17%_21.05%_0]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 73.3164 76.0034"
        >
          <path d={svgPaths.pa4ce700} fill="#1212FF" />
        </svg>
      </div>
      <div className="absolute inset-[5.16%_45.47%_21.05%_38.07%]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 87.2192 76.0034"
        >
          <path d={svgPaths.p64cf480} fill="#1212FF" />
        </svg>
      </div>
      <div className="absolute inset-[5.16%_35.85%_21.05%_60.4%]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 19.8769 76.0034"
        >
          <path d="M0 0H19.8769V76.0034H0V0Z" fill="#1212FF" />
        </svg>
      </div>
      <div className="absolute inset-[5.16%_19.25%_21.05%_70.01%]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 56.915 76.0034"
        >
          <path d={svgPaths.p3f2f1b00} fill="#1212FF" />
        </svg>
      </div>
      <div className="absolute inset-[5.16%_0.63%_21.05%_83.32%]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 85.0467 76.0034"
        >
          <path d={svgPaths.p3c566b00} fill="#1212FF" />
        </svg>
      </div>
      <div className="absolute inset-[0_66.55%_15.79%_17.05%]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 86.8932 86.7368"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p3517a500}
            fill="#1212FF"
            fillRule="evenodd"
          />
        </svg>
      </div>
      <div className="absolute inset-[76.32%_72.09%_0_22.59%]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 28.2194 24.3946"
        >
          <path d={svgPaths.p1f730f00} fill="#1212FF" />
        </svg>
      </div>
      <div className="absolute inset-[18.32%_70.59%_39.58%_21.21%]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 43.4467 43.3684"
        >
          <path d={svgPaths.p23a49180} fill="#1212FF" />
        </svg>
      </div>
    </div>
  );
}

// ─── Chevron Icon ─────────────────────────────────────────────────────────────
function ChevronIcon() {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12.728 7.778"
      fill="none"
    >
      <path
        clipRule="evenodd"
        d={svgPaths.p380d1200}
        fill="#00008F"
        fillRule="evenodd"
      />
    </svg>
  );
}

// ─── External Link Icon ───────────────────────────────────────────────────────
function ExternalLinkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        clipRule="evenodd"
        d={svgPaths.p2c6c7480}
        fill="#000091"
        fillRule="evenodd"
      />
    </svg>
  );
}

// ─── Info Icon ────────────────────────────────────────────────────────────────
function InfoIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
      <path
        clipRule="evenodd"
        d={svgPaths.p3d6f4000}
        fill="#000091"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d={svgPaths.p2d558e00}
        fill="#000091"
        fillRule="evenodd"
      />
    </svg>
  );
}

// ─── Hero Illustration (from Figma) ───────────────────────────────────────────
function HeroIllustration() {
  return (
    <div className="relative shrink-0 w-full max-w-[240px] aspect-square">
      <div className="absolute inset-[4.82%_6.75%_4.16%_6.68%]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 676.984 672.66"
        >
          <path d={svgPaths.p3077f00} fill="#DAE6FD" />
        </svg>
      </div>
      <div className="absolute inset-[9.18%_6.37%_39.51%_77%]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 130.112 379.18"
        >
          <g>
            <path d={svgPaths.p27622e40} fill="#91B3FA" />
            <path d={svgPaths.p14518d00} fill="white" />
          </g>
        </svg>
      </div>
      <div className="absolute inset-[30.35%_6.15%_9.93%_5.89%]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 687.825 441.336"
        >
          <g>
            <g>
              <path d={svgPaths.p9623800} fill="#000091" />
              <path d={svgPaths.p2fbcaa40} fill="#ECECFE" />
              <path
                d={svgPaths.p11872180}
                fill="white"
                opacity="0.66"
              />
            </g>
            <path d={svgPaths.p110f680} fill="#000091" />
            <g>
              <path
                d={svgPaths.p39cee970}
                fill="#6A6AF4"
                opacity="0.37"
              />
              <path
                d={svgPaths.p1fa01680}
                fill="#6A6AF4"
                opacity="0.37"
              />
              <path
                d={svgPaths.p32dfdd00}
                fill="#6A6AF4"
                opacity="0.37"
              />
              <path
                d={svgPaths.p2d08e980}
                fill="#6A6AF4"
                opacity="0.37"
              />
              <path
                d={svgPaths.p341d6200}
                fill="#6A6AF4"
                opacity="0.37"
              />
              <path
                d={svgPaths.p40fdd00}
                fill="#6A6AF4"
                opacity="0.37"
              />
              <path
                d={svgPaths.p2e636a80}
                fill="#6A6AF4"
                opacity="0.37"
              />
              <path
                d={svgPaths.p64b3e80}
                fill="#6A6AF4"
                opacity="0.37"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="absolute inset-[32.39%_7.08%_14.12%_59.61%]">
        <svg
          className="absolute block inset-0 size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 260.52 395.223"
        >
          <defs>
            <linearGradient
              id="p0_544"
              gradientUnits="userSpaceOnUse"
              x1="134.547"
              x2="164.446"
              y1="186.729"
              y2="265.962"
            >
              <stop stopColor="#FEBBBA" />
              <stop offset="1" stopColor="#FF928E" />
            </linearGradient>
            <linearGradient
              id="p1_544"
              gradientUnits="userSpaceOnUse"
              x1="-81.5188"
              x2="-21.0216"
              y1="569.641"
              y2="468.812"
            >
              <stop stopColor="#4042E2" />
              <stop offset="1" stopColor="#4F52FF" />
            </linearGradient>
            <linearGradient
              id="p2_544"
              gradientUnits="userSpaceOnUse"
              x1="198.779"
              x2="179.994"
              y1="324.484"
              y2="396.305"
            >
              <stop stopColor="#4042E2" />
              <stop offset="1" stopColor="#4F52FF" />
            </linearGradient>
            <linearGradient
              id="p3_544"
              gradientUnits="userSpaceOnUse"
              x1="181.081"
              x2="181.081"
              y1="314.738"
              y2="387.603"
            >
              <stop stopColor="#4042E2" />
              <stop offset="1" stopColor="#4F52FF" />
            </linearGradient>
            <linearGradient
              id="p4_544"
              gradientUnits="userSpaceOnUse"
              x1="286.086"
              x2="247.966"
              y1="343.801"
              y2="393.524"
            >
              <stop stopColor="#4042E2" />
              <stop offset="1" stopColor="#4F52FF" />
            </linearGradient>
            <linearGradient
              id="p5_544"
              gradientUnits="userSpaceOnUse"
              x1="258.335"
              x2="250.925"
              y1="331.902"
              y2="409.708"
            >
              <stop stopColor="#4042E2" />
              <stop offset="1" stopColor="#4F52FF" />
            </linearGradient>
            <linearGradient
              id="p6_544"
              gradientUnits="userSpaceOnUse"
              x1="253.549"
              x2="242.854"
              y1="374.813"
              y2="374.813"
            >
              <stop stopColor="#FEBBBA" />
              <stop offset="1" stopColor="#FF928E" />
            </linearGradient>
            <linearGradient
              id="p7_544"
              gradientUnits="userSpaceOnUse"
              x1="196.892"
              x2="187.978"
              y1="374.113"
              y2="374.113"
            >
              <stop stopColor="#FEBBBA" />
              <stop offset="1" stopColor="#FF928E" />
            </linearGradient>
            <linearGradient
              id="p8_544"
              gradientUnits="userSpaceOnUse"
              x1="266.48"
              x2="199.567"
              y1="81.7261"
              y2="251.301"
            >
              <stop stopColor="#CB236D" />
              <stop offset="1" stopColor="#4C246D" />
            </linearGradient>
            <linearGradient
              id="p9_544"
              gradientUnits="userSpaceOnUse"
              x1="158.338"
              x2="218.835"
              y1="226.965"
              y2="126.136"
            >
              <stop stopColor="#4042E2" />
              <stop offset="1" stopColor="#4F52FF" />
            </linearGradient>
            <linearGradient
              id="p10_544"
              gradientUnits="userSpaceOnUse"
              x1="170.278"
              x2="165.887"
              y1="152.463"
              y2="125.382"
            >
              <stop stopColor="#FEBBBA" />
              <stop offset="1" stopColor="#FF928E" />
            </linearGradient>
            <linearGradient
              id="p11_544"
              gradientUnits="userSpaceOnUse"
              x1="150.835"
              x2="4.01851"
              y1="2.79564"
              y2="131.511"
            >
              <stop stopColor="#09005D" />
              <stop offset="1" stopColor="#1A0F91" />
            </linearGradient>
            <linearGradient
              id="p12_544"
              gradientUnits="userSpaceOnUse"
              x1="102.082"
              x2="-2.08845"
              y1="-49.6983"
              y2="135.183"
            >
              <stop stopColor="#4042E2" />
              <stop offset="1" stopColor="#4F52FF" />
            </linearGradient>
            <linearGradient
              id="p13_544"
              gradientUnits="userSpaceOnUse"
              x1="304.518"
              x2="119.427"
              y1="-54.5069"
              y2="181.859"
            >
              <stop stopColor="#09005D" />
              <stop offset="1" stopColor="#1A0F91" />
            </linearGradient>
            <linearGradient
              id="p14_544"
              gradientUnits="userSpaceOnUse"
              x1="51.3794"
              x2="186.812"
              y1="28.8253"
              y2="-74.6477"
            >
              <stop stopColor="#4042E2" />
              <stop offset="1" stopColor="#4F52FF" />
            </linearGradient>
            <linearGradient
              id="p15_544"
              gradientUnits="userSpaceOnUse"
              x1="125.699"
              x2="21.5323"
              y1="-36.3896"
              y2="148.486"
            >
              <stop stopColor="#4042E2" />
              <stop offset="1" stopColor="#4F52FF" />
            </linearGradient>
            <linearGradient
              id="p16_544"
              gradientUnits="userSpaceOnUse"
              x1="135.648"
              x2="103.667"
              y1="177.967"
              y2="263.454"
            >
              <stop stopColor="#FEBBBA" />
              <stop offset="1" stopColor="#FF928E" />
            </linearGradient>
            <linearGradient
              id="p17_544"
              gradientUnits="userSpaceOnUse"
              x1="212.461"
              x2="147.683"
              y1="167.176"
              y2="239.288"
            >
              <stop stopColor="#FEBBBA" />
              <stop offset="1" stopColor="#FF928E" />
            </linearGradient>
            <linearGradient
              id="p18_544"
              gradientUnits="userSpaceOnUse"
              x1="163.774"
              x2="224.271"
              y1="230.227"
              y2="129.398"
            >
              <stop stopColor="#4042E2" />
              <stop offset="1" stopColor="#4F52FF" />
            </linearGradient>
            <linearGradient
              id="p19_544"
              gradientUnits="userSpaceOnUse"
              x1="217.134"
              x2="152.356"
              y1="171.375"
              y2="243.486"
            >
              <stop stopColor="#FEBBBA" />
              <stop offset="1" stopColor="#FF928E" />
            </linearGradient>
            <linearGradient
              id="p20_544"
              gradientUnits="userSpaceOnUse"
              x1="151.73"
              x2="176.808"
              y1="117.042"
              y2="101.746"
            >
              <stop stopColor="#FEBBBA" />
              <stop offset="1" stopColor="#FF928E" />
            </linearGradient>
            <linearGradient
              id="p21_544"
              gradientUnits="userSpaceOnUse"
              x1="190.082"
              x2="157.685"
              y1="85.6228"
              y2="111.211"
            >
              <stop stopColor="#09005D" />
              <stop offset="1" stopColor="#1A0F91" />
            </linearGradient>
            <linearGradient
              id="p22_544"
              gradientUnits="userSpaceOnUse"
              x1="158.317"
              x2="180.879"
              y1="122.746"
              y2="108.984"
            >
              <stop stopColor="#FEBBBA" />
              <stop offset="1" stopColor="#FF928E" />
            </linearGradient>
          </defs>
          <g>
            <g>
              <path
                d={svgPaths.p3750c800}
                fill="url(#p0_544)"
              />
              <path
                d={svgPaths.p2e0dae00}
                fill="url(#p1_544)"
              />
            </g>
            <path d={svgPaths.p6f6c4e0} fill="url(#p2_544)" />
            <path d={svgPaths.p1ecda00} fill="url(#p3_544)" />
            <path d={svgPaths.p18f4e080} fill="url(#p4_544)" />
            <path d={svgPaths.p27eeb9b0} fill="url(#p5_544)" />
            <path d={svgPaths.p39fef7f0} fill="url(#p6_544)" />
            <path d={svgPaths.p7847f00} fill="url(#p7_544)" />
            <path d={svgPaths.p3152da00} fill="#000091" />
            <path d={svgPaths.p7a4c280} fill="url(#p8_544)" />
            <path d={svgPaths.p290d500} fill="url(#p9_544)" />
            <path d={svgPaths.p8361e80} fill="url(#p10_544)" />
            <g>
              <path
                d={svgPaths.p37777f00}
                fill="url(#p11_544)"
              />
              <path
                d={svgPaths.p3e120980}
                fill="url(#p12_544)"
              />
              <path
                d={svgPaths.p2610a000}
                fill="url(#p13_544)"
              />
              <path
                d={svgPaths.p2967e800}
                fill="url(#p14_544)"
              />
              <path
                d={svgPaths.p19f169f0}
                fill="url(#p15_544)"
              />
            </g>
            <path d={svgPaths.p14a41980} fill="url(#p16_544)" />
            <path d={svgPaths.p1001f000} fill="url(#p17_544)" />
            <path d={svgPaths.p16c1aa00} fill="url(#p18_544)" />
            <path d={svgPaths.p57dab00} fill="url(#p19_544)" />
            <g>
              <path
                d={svgPaths.p473e940}
                fill="url(#p20_544)"
              />
              <path
                d={svgPaths.p37f51a00}
                fill="url(#p21_544)"
              />
              <path
                d={svgPaths.p3d262c00}
                fill="url(#p22_544)"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

// ─── Screenshot card (before/after) ──────────────────────────────────────────
interface ScreenshotCardProps {
  label: "AVANT" | "AVEC DSFR";
  image: string;
  imageHeight?: number;
  imageTopOffset?: number;
  imageHeightPercent?: string;
}

function ScreenshotCard({
  label,
  image,
  imageHeightPercent,
  imageTopOffset,
}: ScreenshotCardProps) {
  return (
    <div className="flex flex-col gap-2 items-start flex-1 min-w-0">
      {/* Badge */}
      <div className="bg-[#fee7fc] px-2 rounded inline-flex items-center">
        <span
          className="font-bold uppercase text-[#6e445a] text-xs"
          style={{
            fontFamily: "Marianne, sans-serif",
            lineHeight: "24px",
          }}
        >
          {label}
        </span>
      </div>
      {/* Screenshot */}
      <div
        className="relative w-full overflow-hidden shadow-[0px_0px_0px_2px_white,0px_0px_0px_4px_#0a76f6] rounded-sm"
        style={{ paddingBottom: "73%" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={image}
            alt={label}
            className="absolute left-0 w-full max-w-none"
            style={{
              height: imageHeightPercent ?? "100%",
              top:
                imageTopOffset != null
                  ? `${imageTopOffset}%`
                  : "0",
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Section: Exemple de changement ──────────────────────────────────────────
interface SectionExampleProps {
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeHeightPercent?: string;
  afterHeightPercent?: string;
  beforeTopOffset?: number;
  afterTopOffset?: number;
}

function SectionExample({
  title,
  beforeImage,
  afterImage,
  beforeHeightPercent,
  afterHeightPercent,
  beforeTopOffset,
  afterTopOffset,
}: SectionExampleProps) {
  return (
    <div className="flex flex-col gap-3 items-start py-2 w-full">
      <h3
        className="text-black w-full"
        style={{
          fontFamily: "Marianne, sans-serif",
          fontWeight: 700,
          fontSize: 28,
          lineHeight: "36px",
        }}
      >
        {title}
      </h3>
      <div className="flex flex-col sm:flex-row gap-5 w-full">
        <ScreenshotCard
          label="AVANT"
          image={beforeImage}
          imageHeightPercent={beforeHeightPercent}
          imageTopOffset={beforeTopOffset}
        />
        <ScreenshotCard
          label="AVEC DSFR"
          image={afterImage}
          imageHeightPercent={afterHeightPercent}
          imageTopOffset={afterTopOffset}
        />
      </div>
    </div>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
function Header() {
  const navItems = [
    "Structures",
    "Domiciliés",
    "Usagers",
    "Statistiques",
    "Documentation",
    "Aide",
  ];

  return (
    <header className="bg-white w-full shadow-[0px_2px_6px_0px_rgba(0,0,18,0.16)]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 lg:px-24 py-2 border-b border-[#ddd]">
        <div className="flex items-center gap-6">
          <MarianneLogo size="sm" />
          <DomifaLogo />
        </div>
        <div className="hidden md:flex items-center gap-4">
          <button
            className="flex items-center gap-1 text-sm font-medium text-[#161616]"
            style={{ fontFamily: "Marianne, sans-serif" }}
          >
            <span>N1 - Dépliant</span>
            <ChevronIcon />
          </button>
          <button
            className="flex items-center gap-1 px-3 py-1 border border-[#ddd] text-[#000091] text-sm"
            style={{
              fontFamily: "Marianne, sans-serif",
              fontWeight: 500,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p8d53680}
                fill="#000091"
                fillRule="evenodd"
              />
            </svg>
            <span>Mon espace</span>
            <ChevronIcon />
          </button>
        </div>
      </div>
      {/* Navigation */}
      <nav className="hidden md:flex items-center px-4 lg:px-24 overflow-x-auto">
        {navItems.map((item) => (
          <button
            key={item}
            className="flex items-center gap-1 px-4 py-4 text-sm text-[#161616] whitespace-nowrap hover:bg-gray-50"
            style={{ fontFamily: "Marianne, sans-serif" }}
          >
            <span>{item}</span>
            <ChevronIcon />
          </button>
        ))}
      </nav>
    </header>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="bg-[#e9edfe] w-full">
      <div className="flex flex-row items-center justify-between px-4 sm:px-8 lg:px-24 py-6 gap-6">
        <div className="flex flex-col gap-2 flex-1 min-w-0">
          <h1
            className="text-[#000091]"
            style={{
              fontFamily: "Marianne, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(32px, 5vw, 56px)",
              lineHeight: "1.14",
            }}
          >
            DomiFa se met aux couleurs du DSFR
          </h1>
          <p
            className="text-[#000091]"
            style={{
              fontFamily: "Marianne, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: "1.6",
            }}
          >
            Votre interface DomiFa évolue avec un nouveau design
            au couleurs de l'état&nbsp;!
          </p>
        </div>
        <div className="hidden sm:flex shrink-0 w-[160px] md:w-[200px] lg:w-[240px]">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}

// ─── Main Content ─────────────────────────────────────────────────────────────
function MainContent() {
  return (
    <main className="bg-white w-full">
      <div className="px-4 sm:px-8 lg:px-24 py-6 flex flex-col gap-6">
        {/* Intro paragraph */}
        <p
          className="text-black"
          style={{
            fontFamily: "Marianne, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(20px, 3vw, 40px)",
            lineHeight: "1.2",
          }}
        >
          Dans une démarche d'amélioration continue, l'interface
          de{" "}
          <a
            href="https://domifa.fabrique.social.gouv.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            DomiFa
          </a>{" "}
          va prochainement évoluer avec l'adoption du{" "}
          <a
            href="https://www.systeme-de-design.gouv.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Design System de l'État (DSFR)
          </a>
          .
        </p>

        {/* Callout: Qu'est-ce que le DSFR? */}
        <div className="flex w-full">
          <div className="bg-[#eee] flex flex-1 gap-3">
            <div className="bg-[#6a6af4] self-stretch w-1 shrink-0" />
            <div className="flex-1 flex flex-col gap-4 pt-4 pb-8 pr-6 sm:pr-12">
              <div className="size-6 flex items-center justify-center shrink-0">
                <InfoIcon />
              </div>
              <div className="pl-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p
                    className="text-[#161616]"
                    style={{
                      fontFamily: "Marianne, sans-serif",
                      fontWeight: 700,
                      fontSize: 24,
                      lineHeight: "32px",
                    }}
                  >
                    Qu'est-ce que le DSFR ?
                  </p>
                  <p
                    className="text-[#3a3a3a]"
                    style={{
                      fontFamily: "Marianne, sans-serif",
                      fontWeight: 400,
                      fontSize: 18,
                      lineHeight: "28px",
                    }}
                  >
                    Le{" "}
                    <a
                      href="https://www.systeme-de-design.gouv.fr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Design System de l'État (DSFR)
                    </a>{" "}
                    est le référentiel officiel utilisé par les
                    services publics numériques. Il définit des
                    règles de design communes pour proposer des
                    interfaces claires, accessibles et
                    cohérentes sur l'ensemble des sites de
                    l'État.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pourquoi ce changement */}
        <h2
          className="text-black w-full"
          style={{
            fontFamily: "Marianne, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(24px, 3vw, 40px)",
            lineHeight: "1.2",
          }}
        >
          Pourquoi ce changement&nbsp;?
        </h2>

        {/* Reason paragraph */}
        <p
          className="text-black"
          style={{
            fontFamily: "Marianne, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: "24px",
          }}
        >
          L'adoption du DSFR permet de renforcer la lisibilité
          des services publics en ligne.
          <br />
          Associé aux sites en{" "}
          <a
            href="http://gouv.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            gouv.fr
          </a>
          , il constitue un repère fiable pour vous assurer que
          vous êtes sur un site officiel de l'administration.
        </p>

        {/* Two columns: Ce qui changera / Ce qui ne changera pas */}
        <div
          className="flex flex-col sm:flex-row gap-6 w-full"
          style={{
            fontFamily: "Marianne, sans-serif",
            fontSize: 16,
            lineHeight: "24px",
          }}
        >
          <div className="flex-1 min-w-0">
            <p className="font-bold mb-6">
              😉 Ce qui changera pour vous :
            </p>
            <ul className="list-disc pl-6 space-y-1 text-black">
              <li>
                Une interface plus claire et plus homogène
              </li>
              <li>Une navigation plus simple et intuitive</li>
              <li>Une meilleure accessibilité pour tous</li>
            </ul>
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold mb-6">
              😅 Ce qui ne changera pas :
            </p>
            <ul className="list-disc pl-6 space-y-1 text-black">
              <li>Vos habitudes</li>
              <li>Les fonctionnalités</li>
              <li>Vos accès et vos données</li>
            </ul>
          </div>
        </div>

        {/* Exemple de changement */}
        <div className="flex flex-col gap-4 pt-10 w-full">
          <h2
            className="text-black w-full"
            style={{
              fontFamily: "Marianne, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(24px, 3vw, 40px)",
              lineHeight: "1.2",
            }}
          >
            Exemple de changement
          </h2>

          <SectionExample
            title="DomiFa"
            beforeImage={img01Av1}
            afterImage={img01Ap1}
            beforeHeightPercent="278%"
            afterHeightPercent="310%"
            beforeTopOffset={-0.31}
            afterTopOffset={0.02}
          />

          <SectionExample
            title="Tableau de bord"
            beforeImage={img01Av2}
            afterImage={img01Ap2}
            beforeHeightPercent="100%"
            afterHeightPercent="100%"
          />

          <SectionExample
            title="Fiche Domiciliés"
            beforeImage={img01Av3}
            afterImage={img01Ap3}
            beforeHeightPercent="160%"
            afterHeightPercent="126%"
            beforeTopOffset={-0.3}
            afterTopOffset={-0.12}
          />

          <SectionExample
            title="Nouvelle demande"
            beforeImage={img01Av4}
            afterImage={img01Ap4}
            beforeHeightPercent="160%"
            afterHeightPercent="126%"
            beforeTopOffset={-0.3}
            afterTopOffset={-0.12}
          />

          <SectionExample
            title="Prise de rendez-vous"
            beforeImage={img01Av5}
            afterImage={img01Ap5}
            beforeHeightPercent="136%"
            afterHeightPercent="133%"
            beforeTopOffset={0.41}
            afterTopOffset={-0.12}
          />
        </div>
      </div>
    </main>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const footerLinks = [
    { label: "info.gouv.fr", href: "https://www.info.gouv.fr" },
    {
      label: "service-public.fr",
      href: "https://www.service-public.fr",
    },
    {
      label: "legifrance.gouv.fr",
      href: "https://www.legifrance.gouv.fr",
    },
    { label: "data.gouv.fr", href: "https://www.data.gouv.fr" },
  ];

  const mentions = [
    "Accessibilité : partiellement conforme",
    "Mentions légales",
    "Conditions générales d'utilisation",
    "Politique de confidentialité",
    "Plan du site",
    "Nos partenaires",
  ];

  return (
    <footer className="bg-white w-full border-t border-[#ddd]">
      {/* Brand block */}
      <div className="border-b border-[#ddd]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-4 sm:px-8 lg:px-24 py-4 gap-6">
          <MarianneLogo size="lg" />
          <div className="flex flex-col gap-4 py-4 flex-1 min-w-0">
            <p
              className="text-[#3a3a3a] max-w-xl"
              style={{
                fontFamily: "Marianne, sans-serif",
                fontWeight: 400,
                fontSize: 14,
                lineHeight: "24px",
              }}
            >
              Texte optionnel 3 lignes maximum.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Consectetur et vel quam auctor semper. Cras
              si amet mollis dolor.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-0.5 text-[#3a3a3a] hover:underline"
                  style={{
                    fontFamily: "Marianne, sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    lineHeight: "24px",
                  }}
                >
                  <span>{link.label}</span>
                  <ExternalLinkIcon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mentions */}
      <div className="px-4 sm:px-8 lg:px-24 py-4 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2 items-center">
          {mentions.map((mention, index) => (
            <span
              key={mention}
              className="flex items-center gap-2"
            >
              {index > 0 && (
                <span className="text-[#ddd] select-none">
                  |
                </span>
              )}
              <span
                className="text-[#666] cursor-pointer hover:underline"
                style={{
                  fontFamily: "Marianne, sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: "20px",
                }}
              >
                {mention}
              </span>
            </span>
          ))}
          <span className="flex items-center gap-1 ml-2">
            <span className="text-[#ddd] select-none">|</span>
            <div className="flex items-center gap-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  clipRule="evenodd"
                  d={svgPaths.pafd6700}
                  fill="#000091"
                  fillRule="evenodd"
                />
              </svg>
              <span
                className="text-[#666] cursor-pointer hover:underline"
                style={{
                  fontFamily: "Marianne, sans-serif",
                  fontWeight: 400,
                  fontSize: 12,
                  lineHeight: "20px",
                }}
              >
                Paramètres d'affichage
              </span>
            </div>
          </span>
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          <span
            className="text-[#666]"
            style={{
              fontFamily: "Marianne, sans-serif",
              fontWeight: 400,
              fontSize: 12,
              lineHeight: "20px",
            }}
          >
            Sauf mention explicite de propriété intellectuelle
            détenue par des tiers, les contenus de ce site sont
            proposés sous{" "}
            <a
              href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              licence etalab-2.0
            </a>
          </span>
          <ExternalLinkIcon />
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-white flex flex-col items-center min-h-screen w-full">
      <div className="w-full flex flex-col">
        <Header />
        <HeroSection />
        <MainContent />
        <div className="w-full border-t border-[#ddd]" />
        <Footer />
      </div>
    </div>
  );
}