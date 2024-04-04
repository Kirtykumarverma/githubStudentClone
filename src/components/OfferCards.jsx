export function OfferCards(props) {
  return (
    <div className="grid col-span-3 py-10">
      <div className=" flex flex-col gap-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <img src={props.image} className="h-20 w-20" alt="AI" />
        <div>
          <p className="text-gray-400 font-normal">{props.imageHeading}</p>
        </div>
        <div className="text-lg font-medium">
          <h1>{props.productHeading}</h1>
        </div>
        <div>
          <p className="mb-3 text-sm text-gray-400">
            {props.productDescription}
          </p>
        </div>
        <div className="text-sm">
          <h1>{props.offerHeading}</h1>
          <div className="grid grid-cols-2 font-medium">
            <a>Github</a>
            <a>Microsoft Azure</a>
            <a>Educative</a>
            <a>POEditor</a>
          </div>
        </div>

        <div>
          <a
            href="#"
            className="inline-flex font-medium items-center text-blue-600 hover:underline"
          >
            Learn more About Coding
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
