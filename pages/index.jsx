

import SearchInput from '@/components/searchbar'
import Card from '@/components/Card'


export default function Home() {
   

    return (
        <>
      
           
            <div className="flex items-center justify-center mt-28">
            <SearchInput/>
            </div>
            <div className="flex items-center justify-center mt-30">
  <div className="w-[1298px] h-[473px] bg-gradient-to-b from-amber-200 via-amber-400 to-orange-500 rounded-[25px] border-2 border-amber-300 opacity-100">
  <div className="padding-left-3px"><svg width="797" height="207" viewBox="0 0 797 207" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.6865 147.789L1.73384 173.072C1.21121 173.624 0.919922 174.355 0.919922 175.115V200.672C0.919922 202.308 2.24289 203.636 3.87884 203.642L793.899 206.59C795.543 206.596 796.88 205.265 796.88 203.62V58.8017C796.88 58.3532 796.702 57.923 796.385 57.6058C795.81 57.0316 794.909 56.9465 794.238 57.4032L761.172 79.888C759.653 80.9206 757.571 80.3415 756.803 78.6732L726.241 12.2342C725.291 10.1684 722.467 9.89303 721.135 11.7364L706.496 32.0063C705.557 33.3073 703.754 33.6266 702.424 32.7274L655.881 1.24204C654.928 0.597513 653.689 0.561119 652.7 1.14862L505.796 88.4182C504.891 88.956 503.792 88.9874 502.87 88.4791C468.276 69.4056 402.184 32.2287 403.355 29.8862C404.515 27.566 327.415 83.5865 285.996 113.876C284.476 114.987 282.338 114.407 281.559 112.692L263.145 72.1823C262.153 69.9992 259.116 69.8315 257.89 71.8922L226.063 125.36C224.95 127.231 222.269 127.308 221.05 125.504L188.899 77.9198C187.75 76.2204 185.266 76.1686 184.048 77.8188L142.521 134.082C141.455 135.525 139.363 135.702 138.071 134.458L102.887 100.577C101.584 99.3215 99.4692 99.5144 98.4141 100.985L53.3169 163.848C52.2948 165.273 50.2675 165.507 48.9479 164.352L29.7984 147.596C28.5983 146.546 26.7832 146.631 25.6865 147.789Z" fill="url(#paint0_linear_1_3051)"/>
<defs>
<linearGradient id="paint0_linear_1_3051" x1="400.385" y1="50.6762" x2="399.642" y2="206.601" gradientUnits="userSpaceOnUse">
<stop stop-color="#31DE81"/>
<stop offset="1" stop-color="#F59838" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
   </div>
  </div>
</div>

<div className="w-[1440px] h-[0px] mt-12 shadow border-2 border-red-800" ></div>
<div className="flex items-center justify-center mt-12">
<div className="w-[1285px] bg-gradient-to-t from-amber-300  to-orange-300 rounded-[30px] border-2 border-red-800" >
<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 items-center p-6 justify-center">
      <Card/>
      <Card />
      <Card />
    <Card/>
      <Card />
      <Card />
    </div>
</div>
</div>
         
           
        </>
    )
}
