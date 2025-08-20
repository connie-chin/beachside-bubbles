import dog_logo from '../assets/dog_logo.png';

export function Footer() {
  return (
    <div className="bg-[#87CEEB] flex flex-col h-[300px] items-center justify-content pt-[50px] ">
      <h3
        className="flex flex-col text-center justify-content font-bold text-3xl"
        style={{ fontFamily: "'Love Ya Like A Sister', cursive" }}>
        We are excited and looking forward to taking care of your furry friends!
        <br></br>
        Please do not hesitate to call with any questions!
      </h3>

      <img src={dog_logo} alt="logo" width="150px" className="pt-[30px]" />
    </div>
  );
}
