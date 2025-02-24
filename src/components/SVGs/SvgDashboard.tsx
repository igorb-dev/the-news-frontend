import * as React from "react"
import { SVGProps } from "react"
const SvgDashboard = ({ fill = "#222", ...props }: SVGProps<SVGSVGElement>) => (
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
      d="M6 14v-2m4 2v-4m4 4V6M4 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4Z"
    />
  </svg>
)
export default SvgDashboard
