import * as React from "react"
import { SVGProps } from "react"
const SvgCorrected = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#222"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 1 1-9-9c1.412 0 2.748.325 3.938.905m3.374 2.47-7.875 7.875L9.188 12"
    />
  </svg>
)
export default SvgCorrected
