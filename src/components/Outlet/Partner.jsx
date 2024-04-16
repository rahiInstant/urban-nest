const Partner = () => {
  return (
    <div className="mt-14">
      <h1 className="text-3xl md:text-4xl lg:text-[55px] font-black text-center">
        Our valuable partner
      </h1>
      <hr className="mb-5 mt-3 lg:mt-5" />
      <div className="flex flex-col lg:flex-row  mt-5 gap-5 items-center justify-center">
        <img src="/part_01.png" alt="" className="h-24 w-44 rotate-3"/>
        <img src="/part_02.png" alt="" className="h-24 w-44 -rotate-3"/>
        <img src="/part_03.svg" alt="" className="h-24 w-44 rotate-3"/>
        <img src="/part_04.png" alt="" className="h-24 w-44 -rotate-3"/>

      </div>
    </div>
  );
};

export default Partner;
