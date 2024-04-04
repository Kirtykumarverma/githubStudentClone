import "../App.css";
export function HeroSection() {
  return (
    <div className="tan-gradient py-14 border-b-2 ">
      <div className="container flex items-start flex-col ">
        <div className="text-5xl font-medium py-7">
          <h1>GitHub Student Developer Pack</h1>
        </div>
        <div className="text-xl pb-6">
          <p>
            <span className="font-semibold">
              Learn to ship software like a pro.
            </span>{" "}
            There's no substitute for hands-on experience. But for most{" "}
            <br></br>
            students, real world tools can be cost-prohibitive. That's why we
            created the GitHub Student<br></br> Developer Pack with some of our
            partners and friends.
          </p>
        </div>
        <div className="font-medium text-sm">
          Love the pack? Spread the word
        </div>
      </div>
    </div>
  );
}
