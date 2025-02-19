import "../App.css";
export function Navbar() {
  return (
    <div>
      <div className="flex justify-between container py-6 items-center border-b-2 border-gray-200">
        <div className="flex items-center  text-2xl">
          <a>
            <svg
              className="octicon octicon-mark-github mr-2"
              fill="#000000"
              viewBox="0 0 16 16"
              width="31"
              height="31"
              version="1.1"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path>
            </svg>
          </a>{" "}
          Education
        </div>
        <div className="flex gap-6 text-md">
          <div>Student</div>
          <div>Teachers</div>
          <div>School</div>
          <div>Benefits</div>
          <div>Evenst</div>
          <div>Global Campus</div>
          <div>Community Exchange</div>
          <div>SignIN</div>
        </div>
      </div>
    </div>
  );
}
