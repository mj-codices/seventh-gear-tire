interface IconProps {
  className?: string;
}

export default function Chevrons({ className = "text-red-500/80" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      /* Removing hardcoded width/height lets you control size completely via Tailwind classes like h-6 w-6 */
      className={`h-4 fill-current ${className}`}
      fillRule="nonzero"
    >
      <g
        fill="currentColor"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
      >
        <g transform="scale(5.33333,5.33333)">
          <path d="M39.04,30.62l-12.25,12.24l-1.53,-1.52c-1.64,-1.64 -1.64,-4.3 0,-5.94l9.28,-9.28zM22.04,30.62l-12.25,12.24l-1.53,-1.52c-1.64,-1.64 -1.64,-4.3 0,-5.94l9.28,-9.28zM25.263,12.604l15.895,15.895l4.499,-4.499l-18.865,-18.864l-1.529,1.529c-1.64,1.64 -1.64,4.299 0,5.939zM8.263,12.604l15.895,15.895l4.499,-4.499l-18.865,-18.864l-1.529,1.529c-1.64,1.64 -1.64,4.299 0,5.939z"></path>
        </g>
      </g>
    </svg>
  );
}
