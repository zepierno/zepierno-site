// Sparkmark — o elemento de assinatura do site.
// Um traço de série temporal estilizado, lido tanto como "linha de tendência"
// (o mundo de Ads/dados de Zé) quanto como simples gesto gráfico ao lado do nome.
// Os pontos não são aleatórios: sobem, recuam um pouco, sobem mais — o formato
// de uma curva de aprendizado/funil real, não um enfeite genérico.
//
// `animate`: quando true, o traço se desenha (stroke-dasharray) ao montar —
// reservado para a home. Nas páginas internas, renderiza estático (sem draw-on).
export default function Sparkmark({
  className = "",
  style,
  animate = false,
  delayMs = 0,
}: {
  className?: string;
  style?: React.CSSProperties;
  animate?: boolean;
  delayMs?: number;
}) {
  const points = "0,28 12,24 24,26 36,16 48,18 60,9 72,11 84,3 96,5";
  // Comprimento aproximado da polyline, usado pelo stroke-dasharray para o draw-on.
  const pathLength = 130;

  return (
    <svg
      viewBox="0 0 96 32"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={
          animate
            ? {
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength,
                animation: `sparkmark-draw 900ms ease-out ${delayMs}ms forwards`,
              }
            : undefined
        }
      />
      <circle
        cx="96"
        cy="5"
        r="2.5"
        fill="currentColor"
        style={
          animate
            ? {
                opacity: 0,
                animation: `sparkmark-dot 300ms ease-out ${delayMs + 850}ms forwards`,
              }
            : undefined
        }
      />
    </svg>
  );
}
