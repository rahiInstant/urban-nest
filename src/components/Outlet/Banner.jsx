const Banner = ({ imgLink }) => {
  console.log(imgLink)
  return (
    <div
      id="ban"
      className={`h-[500px] rounded-lg  bg-[url('/public/slide_02.jpg')] bg-cover bg-center`}
    ></div>
  );
};

export default Banner;
