import React from 'react'
import Image from "next/image";

export default function Luna() {
  return (
    <div className="relative flex justify-end mt-24 overflow-hidden">
      <div className="relative w-[300px] h-[300px]">
        <Image className="z-20 absolute right-[-50px]" width={300} height={300} alt="luna" src="/luna.png" />
        <Image className="z-10 absolute top-0 left-[-80px] w-96 h-40" width={600} height={600} alt="luna" src="/nube-white.png" />
        <Image className="z-10 absolute bottom-0 left-[-80px]" width={300} height={300} alt="luna" src="/nube-white-down.png" />
        <Image className="z-30 absolute bottom-0 right-0" width={600} height={600} alt="luna" src="/nube-black.png" />
      </div>
    </div>
  )
}
