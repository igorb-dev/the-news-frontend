import { SVGProps } from "react"
const SvgUser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.4 21.6V18a3.6 3.6 0 0 0-3.6-3.6H7.2A3.6 3.6 0 0 0 3.6 18v3.6M15.6 6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
    />
  </svg>
)
export default SvgUser
