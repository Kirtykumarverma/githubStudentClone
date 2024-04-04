export function FooterSection() {
  return (
    <div className="container flex justify-between py-10">
      <div className="text-3xl font-medium">Github</div>
      <div className="flex gap-5 pr-16">
        <div>
          <h3>Product</h3>
          {Products.map((product) => (
            <ul>
              <li className="text-gray-400 py-2">{product.name}</li>
            </ul>
          ))}
        </div>
        <div>
          <h1>Platform</h1>
          {Platform.map((platform) => (
            <ul>
              <li className="text-gray-400">{platform.name}</li>
            </ul>
          ))}
        </div>
        <div>
          <h1>Support</h1>
          {Support.map((support) => (
            <ul>
              <li className="text-gray-400">{support.name}</li>
            </ul>
          ))}
        </div>
        <div>
          <h1>Company</h1>
          {Company.map((company) => (
            <ul>
              <li className="text-gray-400">{company.name}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

const Products = [
  { name: "Features" },
  { name: "Security" },
  { name: "Enterprise" },
  { name: "Customer stories" },
  { name: "Pricing" },
  { name: "Resources" },
];

const Platform = [
  { name: "Developer API" },
  { name: "Partners" },
  { name: "Github Desktop" },
];

const Support = [
  { name: "Docs" },
  { name: "Community Forum" },
  { name: "Professional Services" },
  { name: "Status" },
  { name: "Contact Github" },
];

const Company = [
  { name: "About" },
  { name: "Blog" },
  { name: "Careers" },
  { name: "Press" },
  { name: "Social Impact" },
  { name: "Shop" },
];
