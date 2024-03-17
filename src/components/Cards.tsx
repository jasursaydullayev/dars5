import Image from "next/image";

function Cards() {
  return (
    <div>
      <div className="container flex gap-[30px] flex-wrap justify-center items-center mb-[18px]">
      <div className="px-[17px] shadow-xl w-[370px] pb-[22px] bg-white">
        <Image
          className="min-w-[370px] ml-[-17.5px] mb-[6px]"
          alt=""
          src={"/first-img.svg"}
          width={370}
          height={280}
        />
        <h4 className="text-[18px] text-[#458BD1] mb-[10px]">
          Ул. Петра Мстиславца, 24
        </h4>
        <div className="flex justify-between">
          <div className="text-[14px]">
            <p>Спальных мест: 2</p>
            <p>Комнат: 1</p>
          </div>
          <div>
            <div className="flex items-center gap-[5px]">
              <Image src={"/loc.svg"} alt="" width={11} height={14} />
              <p className="text-[14px] underline opacity-60">Маяк Минска</p>
            </div>
            <div className="flex items-center gap-[5px] mb-[15px]">
              <Image src={"/m.svg"} alt="" width={19} height={14} />
              <p className="text-[14px] underline opacity-60">
                Восток (0,24km)
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="text-[14px]  text-[#458BD1] w-[160px] text-center border border-[#458BD1] py-[8px]">
            Связаться
          </button>
          <div className="flex items-center gap-[10px]">
            <Image src={"/telegram.svg"} alt="web-svg" width={20} height={20} />
            <Image src={"/whats-up.svg"} alt="web-svg" width={20} height={20} />
            <Image src={"/phone.svg"} alt="web-svg" width={20} height={20} />
          </div>
        </div>
      </div>
      <div className="px-[17px] shadow-xl w-[370px] pb-[22px] bg-white">
        <Image
          className="min-w-[370px] ml-[-17.5px] mb-[6px]"
          alt=""
          src={"/second.png"}
          width={370}
          height={280}
        />
        <h4 className="text-[18px] text-[#458BD1] mb-[10px]">
          Ул. Веры Хоружей, 10/2
        </h4>
        <div className="flex justify-between">
          <div className="text-[14px]">
            <p>Спальных мест: 2</p>
            <p>Комнат: 1</p>
          </div>
          <div>
            <div className="flex items-center gap-[5px]">
              <Image src={"/loc.svg"} alt="" width={11} height={14} />
              <p className="text-[14px] underline opacity-60">Маяк Минска</p>
            </div>
            <div className="flex items-center gap-[5px] mb-[15px]">
              <Image src={"/m.svg"} alt="" width={19} height={14} />
              <p className="text-[14px] underline opacity-60">
                Восток (0,24km)
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-[11px] mt-[6px]">
          <div className="flex gap-[17px]">
            <p className="text-[#458BD1] text-[14px] underline mb-[1px]">
              +375 (29) 668-98-89
            </p>
            <div className="flex items-center gap-[10px]">
              <Image
                src={"/telegram.svg"}
                alt="web-svg"
                width={20}
                height={20}
              />
              <Image
                src={"/whats-up.svg"}
                alt="web-svg"
                width={20}
                height={20}
              />
              <Image src={"/phone.svg"} alt="web-svg" width={20} height={20} />
            </div>
          </div>
          <p className="underline text-[12px] text-[#000] opacity-40">скрыть</p>
        </div>
      </div>
      <div className="px-[17px] shadow-xl w-[370px] pb-[22px] bg-white">
        <Image
          className="min-w-[370px] ml-[-17.5px] mb-[6px]"
          alt=""
          src={"/third.png"}
          width={370}
          height={280}
        />
        <h4 className="text-[18px] text-[#458BD1] mb-[10px]">
          Пр-т Независимости, 52
        </h4>
        <div className="flex justify-between">
          <div className="text-[14px]">
            <p>Спальных мест: 2</p>
            <p>Комнат: 1</p>
          </div>
          <div>
            <div className="flex items-center gap-[5px]">
              <Image src={"/loc.svg"} alt="" width={11} height={14} />
              <p className="text-[14px] underline opacity-60">Маяк Минска</p>
            </div>
            <div className="flex items-center gap-[5px] mb-[15px]">
              <Image src={"/m.svg"} alt="" width={19} height={14} />
              <p className="text-[14px] underline opacity-60">
                Восток (0,24km)
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="text-[14px]  text-[#458BD1] w-[160px] text-center border border-[#458BD1] py-[8px]">
            Связаться
          </button>
          <div className="flex items-center gap-[10px]">
            <Image src={"/telegram.svg"} alt="web-svg" width={20} height={20} />
            <Image src={"/whats-up.svg"} alt="web-svg" width={20} height={20} />
            <Image src={"/phone.svg"} alt="web-svg" width={20} height={20} />
          </div>
        </div>
      </div>
      <div className="px-[17px] shadow-xl w-[370px] pb-[22px] bg-white">
        <Image
          className="min-w-[370px] ml-[-17.5px] mb-[6px]"
          alt=""
          src={"/first-img.svg"}
          width={370}
          height={280}
        />
        <h4 className="text-[18px] text-[#458BD1] mb-[10px]">
          Ул. Петра Мстиславца, 24
        </h4>
        <div className="flex justify-between">
          <div className="text-[14px]">
            <p>Спальных мест: 2</p>
            <p>Комнат: 1</p>
          </div>
          <div>
            <div className="flex items-center gap-[5px]">
              <Image src={"/loc.svg"} alt="" width={11} height={14} />
              <p className="text-[14px] underline opacity-60">Маяк Минска</p>
            </div>
            <div className="flex items-center gap-[5px] mb-[15px]">
              <Image src={"/m.svg"} alt="" width={19} height={14} />
              <p className="text-[14px] underline opacity-60">
                Восток (0,24km)
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button className="text-[14px]  text-[#458BD1] w-[160px] text-center border border-[#458BD1] py-[8px]">
            Связаться
          </button>
          <button className="text-[14px] bg-[#FFDF42]  text-[#211A1D] w-[160px] text-center py-[8px]">
          Подробнее
          </button>
        </div>
      </div>
      <div className="px-[17px] shadow-xl w-[370px] pb-[22px] bg-white">
        <Image
          className="min-w-[370px] ml-[-17.5px] mb-[6px]"
          alt=""
          src={"/second.png"}
          width={370}
          height={280}
        />
        <h4 className="text-[18px] text-[#458BD1] mb-[10px]">
          Ул. Веры Хоружей, 10/2
        </h4>
        <div className="flex justify-between">
          <div className="text-[14px]">
            <p>Спальных мест: 2</p>
            <p>Комнат: 1</p>
          </div>
          <div>
            <div className="flex items-center gap-[5px]">
              <Image src={"/loc.svg"} alt="" width={11} height={14} />
              <p className="text-[14px] underline opacity-60">Маяк Минска</p>
            </div>
            <div className="flex items-center gap-[5px] mb-[15px]">
              <Image src={"/m.svg"} alt="" width={19} height={14} />
              <p className="text-[14px] underline opacity-60">
                Восток (0,24km)
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-[11px] mt-[6px]">
          <div className="flex gap-[17px]">
            <p className="text-[#458BD1] text-[14px] underline mb-[1px]">
              +375 (29) 668-98-89
            </p>
            <div className="flex items-center gap-[10px]">
              <Image
                src={"/telegram.svg"}
                alt="web-svg"
                width={20}
                height={20}
              />
              <Image
                src={"/whats-up.svg"}
                alt="web-svg"
                width={20}
                height={20}
              />
              <Image src={"/phone.svg"} alt="web-svg" width={20} height={20} />
            </div>
          </div>
          <p className="underline text-[12px] text-[#000] opacity-40">скрыть</p>
        </div>
      </div>
      <div className="px-[17px] shadow-xl w-[370px] pb-[22px] bg-white">
        <Image
          className="min-w-[370px] ml-[-17.5px] mb-[6px]"
          alt=""
          src={"/third.png"}
          width={370}
          height={280}
        />
        <h4 className="text-[18px] text-[#458BD1] mb-[10px]">
          Пр-т Независимости, 52
        </h4>
        <div className="flex justify-between">
          <div className="text-[14px]">
            <p>Спальных мест: 2</p>
            <p>Комнат: 1</p>
          </div>
          <div>
            <div className="flex items-center gap-[5px]">
              <Image src={"/loc.svg"} alt="" width={11} height={14} />
              <p className="text-[14px] underline opacity-60">Маяк Минска</p>
            </div>
            <div className="flex items-center gap-[5px] mb-[15px]">
              <Image src={"/m.svg"} alt="" width={19} height={14} />
              <p className="text-[14px] underline opacity-60">
                Восток (0,24km)
              </p>
            </div>
          </div>
        </div>
            <div className="flex items-center justify-between">
          <button className="text-[14px]  text-[#458BD1] w-[160px] text-center border border-[#458BD1] py-[8px]">
            Связаться
          </button>
          <button className="text-[14px] bg-[#FFDF42]  text-[#211A1D] w-[160px] text-center py-[8px]">
          Подробнее
          </button>
        </div>
      </div>
      <div className="px-[17px] shadow-xl w-[370px] pb-[22px] bg-white">
        <Image
          className="min-w-[370px] ml-[-17.5px] mb-[6px]"
          alt=""
          src={"/first-img.svg"}
          width={370}
          height={280}
        />
        <h4 className="text-[18px] text-[#458BD1] mb-[10px]">
          Ул. Петра Мстиславца, 24
        </h4>
        <div className="flex justify-between">
          <div className="text-[14px]">
            <p>Спальных мест: 2</p>
            <p>Комнат: 1</p>
          </div>
          <div>
            <div className="flex items-center gap-[5px]">
              <Image src={"/loc.svg"} alt="" width={11} height={14} />
              <p className="text-[14px] underline opacity-60">Маяк Минска</p>
            </div>
            <div className="flex items-center gap-[5px] mb-[15px]">
              <Image src={"/m.svg"} alt="" width={19} height={14} />
              <p className="text-[14px] underline opacity-60">
                Восток (0,24km)
              </p>
            </div>
          </div>
        </div>
            <div className="flex items-center justify-between">
          <button className="text-[14px]  text-[#458BD1] w-[160px] text-center border border-[#458BD1] py-[8px]">
            Связаться
          </button>
          <button className="text-[14px] bg-[#FFDF42]  text-[#211A1D] w-[160px] text-center py-[8px]">
          Подробнее
          </button>
        </div>
      </div>
      <div className="px-[17px] shadow-xl w-[370px] pb-[22px] bg-white">
        <Image
          className="min-w-[370px] ml-[-17.5px] mb-[6px]"
          alt=""
          src={"/second.png"}
          width={370}
          height={280}
        />
        <h4 className="text-[18px] text-[#458BD1] mb-[10px]">
          Ул. Веры Хоружей, 10/2
        </h4>
        <div className="flex justify-between">
          <div className="text-[14px]">
            <p>Спальных мест: 2</p>
            <p>Комнат: 1</p>
          </div>
          <div>
            <div className="flex items-center gap-[5px]">
              <Image src={"/loc.svg"} alt="" width={11} height={14} />
              <p className="text-[14px] underline opacity-60">Маяк Минска</p>
            </div>
            <div className="flex items-center gap-[5px] mb-[15px]">
              <Image src={"/m.svg"} alt="" width={19} height={14} />
              <p className="text-[14px] underline opacity-60">
                Восток (0,24km)
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-[11px] mt-[6px]">
          <div className="flex gap-[17px]">
            <p className="text-[#458BD1] text-[14px] underline mb-[1px]">
              +375 (29) 668-98-89
            </p>
            <div className="flex items-center gap-[10px]">
              <Image
                src={"/telegram.svg"}
                alt="web-svg"
                width={20}
                height={20}
              />
              <Image
                src={"/whats-up.svg"}
                alt="web-svg"
                width={20}
                height={20}
              />
              <Image src={"/phone.svg"} alt="web-svg" width={20} height={20} />
            </div>
          </div>
          <p className="underline text-[12px] text-[#000] opacity-40">скрыть</p>
        </div>
      </div>
      <div className="px-[17px] shadow-xl w-[370px] pb-[22px] bg-white">
        <Image
          className="min-w-[370px] ml-[-17.5px] mb-[6px]"
          alt=""
          src={"/third.png"}
          width={370}
          height={280}
        />
        <h4 className="text-[18px] text-[#458BD1] mb-[10px]">
          Пр-т Независимости, 52
        </h4>
        <div className="flex justify-between">
          <div className="text-[14px]">
            <p>Спальных мест: 2</p>
            <p>Комнат: 1</p>
          </div>
          <div>
            <div className="flex items-center gap-[5px]">
              <Image src={"/loc.svg"} alt="" width={11} height={14} />
              <p className="text-[14px] underline opacity-60">Маяк Минска</p>
            </div>
            <div className="flex items-center gap-[5px] mb-[15px]">
              <Image src={"/m.svg"} alt="" width={19} height={14} />
              <p className="text-[14px] underline opacity-60">
                Восток (0,24km)
              </p>
            </div>
          </div>
        </div>
            <div className="flex items-center justify-between">
          <button className="text-[14px]  text-[#458BD1] w-[160px] text-center border border-[#458BD1] py-[8px]">
            Связаться
          </button>
          <button className="text-[14px] bg-[#FFDF42]  text-[#211A1D] w-[160px] text-center py-[8px]">
          Подробнее
          </button>
        </div>
      </div>
      <div className="px-[17px] shadow-xl w-[370px] pb-[22px] bg-white">
        <Image
          className="min-w-[370px] ml-[-17.5px] mb-[6px]"
          alt=""
          src={"/first-img.svg"}
          width={370}
          height={280}
        />
        <h4 className="text-[18px] text-[#458BD1] mb-[10px]">
          Ул. Петра Мстиславца, 24
        </h4>
        <div className="flex justify-between">
          <div className="text-[14px]">
            <p>Спальных мест: 2</p>
            <p>Комнат: 1</p>
          </div>
          <div>
            <div className="flex items-center gap-[5px]">
              <Image src={"/loc.svg"} alt="" width={11} height={14} />
              <p className="text-[14px] underline opacity-60">Маяк Минска</p>
            </div>
            <div className="flex items-center gap-[5px] mb-[15px]">
              <Image src={"/m.svg"} alt="" width={19} height={14} />
              <p className="text-[14px] underline opacity-60">
                Восток (0,24km)
              </p>
            </div>
          </div>
        </div>
            <div className="flex items-center justify-between">
          <button className="text-[14px]  text-[#458BD1] w-[160px] text-center border border-[#458BD1] py-[8px]">
            Связаться
          </button>
          <button className="text-[14px] bg-[#FFDF42]  text-[#211A1D] w-[160px] text-center py-[8px]">
          Подробнее
          </button>
        </div>
      </div>
      <div className="px-[17px] shadow-xl w-[370px] pb-[22px] bg-white">
        <Image
          className="min-w-[370px] ml-[-17.5px] mb-[6px]"
          alt=""
          src={"/second.png"}
          width={370}
          height={280}
        />
        <h4 className="text-[18px] text-[#458BD1] mb-[10px]">
          Ул. Веры Хоружей, 10/2
        </h4>
        <div className="flex justify-between">
          <div className="text-[14px]">
            <p>Спальных мест: 2</p>
            <p>Комнат: 1</p>
          </div>
          <div>
            <div className="flex items-center gap-[5px]">
              <Image src={"/loc.svg"} alt="" width={11} height={14} />
              <p className="text-[14px] underline opacity-60">Маяк Минска</p>
            </div>
            <div className="flex items-center gap-[5px] mb-[15px]">
              <Image src={"/m.svg"} alt="" width={19} height={14} />
              <p className="text-[14px] underline opacity-60">
                Восток (0,24km)
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-[11px] mt-[6px]">
          <div className="flex gap-[17px]">
            <p className="text-[#458BD1] text-[14px] underline mb-[1px]">
              +375 (29) 668-98-89
            </p>
            <div className="flex items-center gap-[10px]">
              <Image
                src={"/telegram.svg"}
                alt="web-svg"
                width={20}
                height={20}
              />
              <Image
                src={"/whats-up.svg"}
                alt="web-svg"
                width={20}
                height={20}
              />
              <Image src={"/phone.svg"} alt="web-svg" width={20} height={20} />
            </div>
          </div>
          <p className="underline text-[12px] text-[#000] opacity-40">скрыть</p>
        </div>
      </div>
      <div className="px-[17px] shadow-xl w-[370px] pb-[22px] bg-white">
        <Image
          className="min-w-[370px] ml-[-17.5px] mb-[6px]"
          alt=""
          src={"/third.png"}
          width={370}
          height={280}
        />
        <h4 className="text-[18px] text-[#458BD1] mb-[10px]">
          Пр-т Независимости, 52
        </h4>
        <div className="flex justify-between">
          <div className="text-[14px]">
            <p>Спальных мест: 2</p>
            <p>Комнат: 1</p>
          </div>
          <div>
            <div className="flex items-center gap-[5px]">
              <Image src={"/loc.svg"} alt="" width={11} height={14} />
              <p className="text-[14px] underline opacity-60">Маяк Минска</p>
            </div>
            <div className="flex items-center gap-[5px] mb-[15px]">
              <Image src={"/m.svg"} alt="" width={19} height={14} />
              <p className="text-[14px] underline opacity-60">
                Восток (0,24km)
              </p>
            </div>
          </div>
        </div>
            <div className="flex items-center justify-between">
          <button className="text-[14px]  text-[#458BD1] w-[160px] text-center border border-[#458BD1] py-[8px]">
            Связаться
          </button>
          <button className="text-[14px] bg-[#FFDF42]  text-[#211A1D] w-[160px] text-center py-[8px]">
          Подробнее
          </button>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between mx-[70px] mt-[-68px]">
      <Image src={'/parametr.svg'} alt="parametr-svg" width={60} height={60} />
      <Image src={'/up.svg'} alt="parametr-svg" width={60} height={60} />
    </div>
    <div className="container flex items-center justify-between">
   <div className="flex items-center">
   <p className="text-[19px] text-black mx-[17px] opacity-65">Показать на странице:</p>
    <span className="text-[#458BD1] ml-[-10px] flex items-center gap-[3px]">12 <Image src={'/bottom-y.svg'} alt="parametr-svg" width={10} height={15}/></span>
   </div>
   <Image className="cursor-pointer" src={'/carusel.svg'} alt="carusel-svg" width={272} height={26}/>
   <div className="flex items-center mr-[17px]">
   <p className="text-[19px] text-black mx-[17px] opacity-65">Найдено результатов:</p>
    <span className="text-[#458BD1] ml-[-10px]">285</span>
   </div>
    </div>
    </div>
  );
}

export default Cards;
