export default function Home() {
  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-[#db4439] to-[#75241e] overflow-hidden shadow-lg">
      <div className="w-36 h-13 absolute right-5 top-14">
        <div className="w-full h-full bg-[#eaecd7] rounded-full" />
        <div className="absolute inset-0 flex items-center justify-center text-[#db4439] text-base font-bold font-poppins">Click</div>
      </div>
      <div className="absolute transform rotate-6 w-1/3 h-auto left-2/4 top-1/4">
        <div className="w-full h-auto bg-[#d9d9d9]" />
        <img className="h-auto rounded-lg" src="https://wallup.net/wp-content/uploads/2017/11/17/239445-coffee-coffee_beans-cup.jpg" alt="Placeholder" />
      </div>
      <div className="absolute left-30 top-1/4 text-[#eaecd7] text-8xl font-black font-poppins leading-tight max-w-lg">BlaBla Coffe!</div>
      <div className="absolute left-30 top-2/3 text-[#eaecd7] text-2xl font-poppins leading-snug max-w-lg">Your NO.1 Choice</div>
      <div className="absolute left-16 top-12 text-[#eaecd7] text-2xl font-poppins">Home</div>
      <div className="absolute left-1/4 transform -translate-x-1/2 top-12 text-[#eaecd7] text-2xl font-poppins">Menu</div>
      <div className="absolute left-1/2 top-12 text-[#eaecd7] text-2xl font-poppins">Login</div>
      <div className="w-full h-24 absolute bottom-0 bg-white" />
      <div className="absolute left-10 bottom-6 text-[#db4439] text-2xl font-black font-poppins leading-tight">Contact Information</div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 text-[#db4439] text-2xl font-black font-poppins leading-tight">Company Policy</div>
      <div className="absolute right-10 bottom-6 text-[#db4439] text-2xl font-black font-poppins leading-tight">Be our partner today</div>
    </div>
  );
}
