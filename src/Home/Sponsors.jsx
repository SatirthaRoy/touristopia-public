import Marquee from "react-fast-marquee";

import { SiSamsung, SiVivo, SiAmazon, SiAnalogue, SiCodewars  } from "react-icons/si";

const Sponsors = () => {
  return (
    <div className="space-y-28">
      <h1 className='text-5xl md:text-7xl text-center font-bold'>Sponsors</h1>
      <Marquee gradient={false} className="*:md:text-9xl *:text-6xl *:text-gray-500">
        <div className="mx-10 md:mx-32"><SiSamsung/></div>
        <div className="mx-10 md:mx-32"><SiVivo/></div>
        <div className="mx-10 md:mx-32"><SiAmazon/></div>
        <div className="mx-10 md:mx-32"><SiAnalogue/></div>
        <div className="mx-10 md:mx-32"><SiCodewars/></div>
      </Marquee>
    </div>
  )
}

export default Sponsors