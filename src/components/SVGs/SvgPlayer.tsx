import * as React from "react"
import { SVGProps } from "react"
const SvgPlayer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.4 21.6V18A3.6 3.6 0 0 1 6 14.4h6.6m4.2-3.129L19.2 8.7m0 0 2.4 2.572M19.2 8.7v6.6M14.4 6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
    />
  </svg>
)
export default SvgPlayer
