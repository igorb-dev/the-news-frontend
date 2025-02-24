import { SVGProps } from "react"
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.33 7.615h10.12M6.873 2v1.832m0 0H17.5m-10.625 0c-1.76 0-3.187 1.451-3.187 3.242v10.809c0 1.79 1.428 3.242 3.188 3.242H17.5c1.76 0 3.187-1.452 3.187-3.243V7.074c0-1.79-1.428-3.242-3.188-3.242M17.5 2v1.832m-7.436 13.51v-6.485l-2.125 1.621m7.968 4.864v-6.485l-2.125 1.621"
    />
  </svg>
)
export default SvgCalendar
