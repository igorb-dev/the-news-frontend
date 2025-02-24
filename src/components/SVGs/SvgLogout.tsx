import * as React from "react"
import { SVGProps } from "react"
const SvgLogout = ({ fill = "#222", ...props }: SVGProps<SVGSVGElement>) => (
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
      d="M7.794 13.5v1.75c0 .464.186.91.517 1.237.33.329.78.513 1.248.513h6.176c.468 0 .917-.184 1.248-.513.331-.328.517-.773.517-1.237V4.75c0-.464-.186-.91-.517-1.237A1.772 1.772 0 0 0 15.735 3H9.56c-.468 0-.917.184-1.248.513a1.743 1.743 0 0 0-.517 1.237V6.5m5.294 3.5H2.5m0 0 2.647 2.625M2.5 10l2.647-2.625"
    />
  </svg>
)
export default SvgLogout
