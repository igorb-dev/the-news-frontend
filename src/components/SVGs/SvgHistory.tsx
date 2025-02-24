import { SVGProps } from "react"
const SvgHistory = ({ fill = "#222", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.75 18h-5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v4m-9.5-2h6m-6 3h6m-6 3h3m4.536 5-2.036-2.045m0 0L12.694 13m-1.944 1.955h6.023a1.477 1.477 0 0 0 0-2.955H14.75"
    />
  </svg>
)
export default SvgHistory
