import React from "react";

const Review = () => {
  return (
    <section className="bg-[#f4e4d4] h-[50vh] w-full font-['Arial_Narrow'] ">
      <div className="flex justify-between items-center">
        <div className="ml-44">
          <h2 className="text-4xl text-[#052331ea] font-semibold leading-relaxed tracking-widest ml-96 ">
            TESTIMONIAL
          </h2>
          <hr className="border-t-2 border-dashed border-[#e6510c] w-full mb-4 mt-4" />

          <div className='container grid grid-cols-3 gap-5 text-white font-["Arial_Narrow"] '>
            <div className="box 1">
              <div className="bg-[#052331ea] w-[25vw] h-[30vh] rounded-2xl mt-5  flex  items-center justify-center tracking-wide">
                The staff here is incredible! They went above and <br /> beyond
                to make sure our dog, Max, felt <br /> comfortable and received
                the best care possible.
                <br /> We couldn't be happier!
                <br />
              </div>
              <div className='text-white font-semibold font-["Rockwell"] -mt-12 ml-32'>
                Sarah L.
              </div>
              <div className=" rounded-full w-12 h-12 flex items-center justify-center -mt-50 ml-38">
             <img src="https://static.vecteezy.com/system/resources/thumbnails/006/059/952/small/dog-icon-isolated-on-white-background-puppy-head-pictogram-free-vector.jpg" alt="" className="rounded-full " />
             </div>

            </div>

            <div className="box 2">
              <div className="bg-[#052331ea] w-[25vw] h-[30vh] rounded-2xl mt-5  flex  items-center justify-center tracking-wide">
                Amazing service and compassionate care! Our <br /> cat,
                Whiskers, had a complicated procedure, and <br />
                the team made us feel confident every step of the <br /> way.
                Highly recommend!
              </div>
              <div className='text-white font-semibold font-["Rockwell"] -mt-12 ml-32'>
                John M.
              </div>
              <div className=" w-12 h-12 rounded-full flex items-center justify-center -mt-50 ml-38">
              <img src="data:image/png;base64,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
              // +AhXirF/f6nLyAAAAAElFTkSuQmCC" alt="" className="rounded-full" />
              </div>
            </div>

            <div className="box 3">
              <div className="bg-[#052331ea] w-[25vw] h-[30vh] rounded-2xl mt-5  flex  items-center justify-center tracking-wide">
                We've trusted this clinic with our pets for years,
                <br /> and they never disappoint. Their knowledge,
                <br /> kindness, and attention to detail make all the <br />
                difference.
              </div>
              <div className='text-white font-semibold font-["Rockwell"] -mt-12 ml-32'>
                Laura M.
              </div>
              <div className=" w-12 h-12 rounded-full flex items-center justify-center -mt-50 ml-38">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAwFBMVEX///8kMzYAAAD///4jMjUmNTgAGR0lNDb///0lMzgnNjkADBAjNDclMzUAGRx+hocAAAcfLjGUmpwAFhkAEhX29/fT1tYdKy4AAAoAFhqcoaGZnJ+usrNCSUsAERe4vL3d4OCFjY/w8vJQVlgUJipZYGEpMTPN0NESHiA4QUOQlZXEx8hgaWrd3+AeLS54f4FudXgIICQxNzoiJSVMUFM+Q0QUJSUwOTheZWcYKiolLC66wL8ZJiwEIiQwQUJCT1BDk4AVAAAKuklEQVR4nO2cCXfaOhaAkZBQZMsGgY3AMWBAgNnCkqXZOvn//2quZKBJmzdn5pxJePjpa5N6o0eXq7tpcaXicDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDsd/QfXcDTgf1eo/WHiH4x9E3E6bw812M0yW8bnb8q3Ey63X9f3Wblfr+/7Npn3uBn0bWdJr9HVAAYTgl/aj7czcKL3Xj9OenxPOGQCCC8QRlf3ntOyCX4HSJ74SoG9G5C7yfb+vCZww5dfLbvbxAHcpYogKXbvfDptpMpxMa4oJwfGq3MLHi+jVQwR5sn+Xrotro1lTtcAEEF6ct3FfCRj0JpIUCeYp3By9u5ONMWWc+oOzte3r2WJj6YJqtfztTrPBEVf79Vma9Q3EC5+B6ISqqRH9o19fYAh3/vA8LftqqpVBLgXYOvL8xAj+UfZ4EgquotFffPrCyVqKgtIJ7U4+u91WEPpw87tb9S3EP3JGTI8n+PMMdlFDTM+/uVXfQxODrQM07xX93fy0l1lxF06WtzwgeRkz+/aUC8ZB8ah/CuOj+vPtPDmdjV85jdLzNO8ribctCGIaDJ50j/EtXmHCND5JW+9TsducqYFfhOncy4hACKtPNJX62K1nmFBE9d3Rty86FKlxdp5GfiGTLqdKZm+a3qhjApN0mOAB37cP8S5pUCTV7Iyt/BKMiomfVhjIftL7skEQ57p31HuzQylplcrgq/Bn2/eEvssqbzmVtaNm44kvhcJJofUq2DtDIt+WqZoDybK9RLQLecuqJoK+9exX5vIjbkTDY4YXTzQSSM9LltqlEUN8Cna+6Auajw9XryrxbLA+JbezqQATkFG5Iny8/cmovwVhZ6HkBH9erV13IQoS1ihXFd/eK4TwEmTPxhryl+1nD63nioPiWWv82d2LZRlKqkJ72PQpYtFnYxSbyBT2nKlamZxdZdhCtLWyh8brIbX/M4gnGFGu3pTk+PdxjUsmHucUFYl6FWQUnO7uT/IdfHwSScbVvp3mT36zROP0sdBc7o7ue96FRHY3/dDtR/VcUe7519VK+oxXJZI964K5z7PD2XqqBKEqmpxUP0rnEYEgiK0PnO2nJRq1g9yVPowPKUu10v4hzXhlC/fqg3Z7lq5u8KsXcOGPK0Ui9CP5j//dRZE2OHrYjo49ed2DiBcwSvJud6d33dpDQCHb78ATleqV+XLS8nj6BGT/+WvGKWkR0DsjnHMipYQ6liPvCR8fAPHj8ti7qcvD5nFkNvMUEnJa0zcgM0cMMYaQ9qwrPC6/KY/sQ6jLw5MNDzrg6dRLMt5F2ozgUSjeAikPIbBsDH2j9+PZpEtpCIXqqJ1sFXh33nhgnMpGqer2Ewuj98VRp76ipLa0Kh6GjCCcrlpm/BY3y6d14+sQ2m0OrmyJKVI9W7m2G9IWNtkkEowHeFge934ihVR9tz3E9wQztCvGZja+x5WGr2E0aQjESBmFN7mNPuY2mz6j3Wt7KDUNurZaHz12oHyleFOyMRuQLLzhT15mV5zEYy1QbpP5GeYBfy4qunjjC8oofhyVzNfHnuY3YTESPYKkjtzaVD4By3+dHDQdD3FAGWs8ZuYbKg/xJKfELwJ8NpdIPttEBkIfrdVPD9UxQoxGk+w8jfwqki46jlCuoZCRgS3UNi1K+7/mnKvXDYYIa81LVMUBsx0UsZF14lDEcTnNzOGmFbD++5ItxZIGrFvcLQvr+Q048bQ4BL0b6exUBDvp3Xq4FCuKWH5fqlHq+o6x0K62yHqSk9uZcWgLsPew/uG5QXTDIB4W/qAkDn8QUSZy491HY01ZEeNS/Oe06/JWM+JpXJoJySpENo1oaNPabShYlJiLmU8Y0cuPTy5fH2hAdf5SnJaBBfZYMfE+xJTu6rZU93KGwg+raKtXleXzjiOq8hItMwwVFfkE5HzBnKm7zIgJyQ2XRfc+7RmqVta9LgvgelIpS5bTbCBBjKsfYcnk68xIO5oqQfP5xwLGCB+ZVeU4KUtls74HOdVzVqnMc8ZrtoK5uu7wgDWsq39v2utxDXJ72Vq86w8XTepTcHdQqyQdRF9vbBqfjR849/Dw9+ptNIY4T2XjNGd5ddlfQbxtMUZByZlS8G8x0byMOHRvvMo+PJoNJaECSptTTXvZooNEEbg7AkIP++DHXwupEkwoRf379Jfq48Gdb5bhBYjyaFuKgr4KHl4iCv6uPSXI8w8JXR0TJJBq9YZFIpslk1xzyGzDvtlcEX269PYCSSKzrspPhyFjws7LVs26cglnQjfwz3+9zW86OEcsYDKqN3FgVpXfl0LzUKJHFCL684QQSNrvi1o1TqMQUTNFpfM8f5VgApTqaDGqLCKJkNcqyWLDeAJJnSDKTkl05wcfNnvDOy7MRjnOzX45SOdzu1Wy2eIgfNjLLt7XWVYRochuIGCef3ccnBuM85ZWZm5O3jyF0f1xLw1UegHy8v5hNOPCg/2oHklhZiIIIl5/fCrUXxaTudr93On9uH7y+YOe6SHEy6flWIUSJ/jVCGTEZ+F8cIrdo/ZstlzO2lmRyVbNWgztMSSY8PL9yxmb/P/Bijl4CHmxiwCBT6v/lRsf9HzJBX1qPXmIaf/yhbdkW/8VChuEOGOooZOs8kfiNnp5w9oLkOj30l4NAr3ySzJVGac/fGXm3gGu/N7i5YPys5fmuJ8TShjxJ+1Ku9f1AqoeyrIQJavjjrQdn3CiavndJnlpZ6OsvUwX214eaglfDH/FdqRnve97gim/NFuoss0+UiBhYMweqT7GuNPpmN81yalNANT4aOS9iNqpyuLssiOdpZ30ul3JROH1GCIQ3onZEA99HeKA2P1aSD9ameSel2nXZLase9LYPKes0D90A0HNEiQQXr5bajZaYQF1kP/pIuQLZTQFn4fyVmunVRH2lN6FUf764EGfx6bWuyr6+Kpj+gQuz6aK0WMIVUzeTBeb1aOEns53b4/bYbJsj32j/mLsorDvTS5p4OFVOco6s9KOIs+upo/jgQ/Wnt9lI6vZ7LEDKQ07jV1UzSQ1lALMn5RD+KylILXDVtjRnTb7RYrEvWot3IPi7v1GggWW0O39u1IIH+QeIv6ycnVl194Qz3+fv2ww4dyL9oWopuMnuTL9ZF6CqcomFoLasSuzNZ4glh/X5BQOrt4Bz+91e79ETbvKC1h4f/GzdbNbyOd18W6T2HugXNV+681m+gqx2rtNFusdxAVam16c5u0MU3tTPzB/gpiuVws4HL6FjHD91izubDbr4uEEQ+JLH3bFZ4bDYTLREPmZvn057Ce8nFmrq8q6h/0DGvIZ4Wl7DIaPiKeO9/D+oNhmrkRA5fEjPlYeEQF8HbeXVdaZraHxuC8o5bR4k5WF2VM7msEZPZAf/VmSP3nkcNF8EtmBe8SfPt1q9XfFDratGubFPoIQboetir8E/QHVYNLFSIev6a8H7MNBADZ/c2EvCYi3+GcY1ro187dWCw8/lvB0VJz6+PBur+Wzbx80FM8VB90/p/H+zmTN5EjTcjy+Ph1fW5rX18l1/TCKO1s0P+dSX3r3+3DzJzV5/O7q77ft+03j0tQ1DofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HP8z/wZjk9Zqm
                ucyHQAAAABJRU5ErkJggg==" alt="" className="rounded-full "/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
