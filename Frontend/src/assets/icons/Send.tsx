/**
 * Componente de ícone de envio.
 *
 * Este componente renderiza um ícone de envio utilizando SVG.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} [props.className] - Classe CSS adicional para estilização.
 * @returns {JSX.Element} O ícone de envio renderizado.
 */
export default function SendIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
      ></path>
    </svg>
  );
}
