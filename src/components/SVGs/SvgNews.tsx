import * as React from "react"
import { SVGProps } from "react"
const SvgNews = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.4 3.6h19.2M12 8.8h9.6M12 14h9.6M2.4 19.2h19.2M2.4 14.4v-6l4.8 3-4.8 3Z"
    />
  </svg>
)
export default SvgNews
