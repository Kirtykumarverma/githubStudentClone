import { OfferCards } from "./OfferCards";
import AIIMage from "../assets/AI.jpg";
import githubimg from "../assets/github.png";
import securityimg from "../assets/security.png";

const partnerProducts = [
  {
    image: AIIMage,
    imageHeading: "Tools",
    productHeading: "AI Prompting & Technical Writing",
    productDescription:
      "This Experience offers the tools, top tips and resources you'll need to get started becoming a technical wizard with words.",
    offerHeading: "Offers in this bundle",
  },
  {
    image: securityimg,
    imageHeading: "Tools",
    productHeading: "Security and Monitoring",
    productDescription:
      "Explore industry standard tools that keep your code safe, your permissions secure and your infrastructure monitored so that you can confidently scale your brilliant ideas.",
    offerHeading: "Offers in this bundle",
  },

  {
    image: githubimg,
    imageHeading: "Primer",
    productHeading: "Primer: Copilot",
    productDescription:
      "What is Copilot and how do you get started using it? Use this Experience as a Primer on Copilot. We share tutorials, guides and templates to learn how to use AI in your development process.",
    offerHeading: "Offers in this bundle",
  },
  {
    image: AIIMage,
    imageHeading: "Tools",
    productHeading: "AI Prompting & Technical Writing",
    productDescription:
      "This Experience offers the tools, top tips and resources you'll need to get started becoming a technical wizard with words.",
    offerHeading: "Offers in this bundle",
  },
  {
    image: securityimg,
    imageHeading: "Tools",
    productHeading: "Security and Monitoring",
    productDescription:
      "Explore industry standard tools that keep your code safe, your permissions secure and your infrastructure monitored so that you can confidently scale your brilliant ideas.",
    offerHeading: "Offers in this bundle",
  },

  {
    image: githubimg,
    imageHeading: "Primer",
    productHeading: "Primer: Copilot",
    productDescription:
      "What is Copilot and how do you get started using it? Use this Experience as a Primer on Copilot. We share tutorials, guides and templates to learn how to use AI in your development process.",
    offerHeading: "Offers in this bundle",
  },
  {
    image: AIIMage,
    imageHeading: "Tools",
    productHeading: "AI Prompting & Technical Writing",
    productDescription:
      "This Experience offers the tools, top tips and resources you'll need to get started becoming a technical wizard with words.",
    offerHeading: "Offers in this bundle",
  },
  {
    image: securityimg,
    imageHeading: "Tools",
    productHeading: "Security and Monitoring",
    productDescription:
      "Explore industry standard tools that keep your code safe, your permissions secure and your infrastructure monitored so that you can confidently scale your brilliant ideas.",
    offerHeading: "Offers in this bundle",
  },

  {
    image: githubimg,
    imageHeading: "Primer",
    productHeading: "Primer: Copilot",
    productDescription:
      "What is Copilot and how do you get started using it? Use this Experience as a Primer on Copilot. We share tutorials, guides and templates to learn how to use AI in your development process.",
    offerHeading: "Offers in this bundle",
  },
  {
    image: AIIMage,
    imageHeading: "Tools",
    productHeading: "AI Prompting & Technical Writing",
    productDescription:
      "This Experience offers the tools, top tips and resources you'll need to get started becoming a technical wizard with words.",
    offerHeading: "Offers in this bundle",
  },
  {
    image: securityimg,
    imageHeading: "Tools",
    productHeading: "Security and Monitoring",
    productDescription:
      "Explore industry standard tools that keep your code safe, your permissions secure and your infrastructure monitored so that you can confidently scale your brilliant ideas.",
    offerHeading: "Offers in this bundle",
  },

  {
    image: githubimg,
    imageHeading: "Primer",
    productHeading: "Primer: Copilot",
    productDescription:
      "What is Copilot and how do you get started using it? Use this Experience as a Primer on Copilot. We share tutorials, guides and templates to learn how to use AI in your development process.",
    offerHeading: "Offers in this bundle",
  },
  {
    image: AIIMage,
    imageHeading: "Tools",
    productHeading: "AI Prompting & Technical Writing",
    productDescription:
      "This Experience offers the tools, top tips and resources you'll need to get started becoming a technical wizard with words.",
    offerHeading: "Offers in this bundle",
  },
  {
    image: securityimg,
    imageHeading: "Tools",
    productHeading: "Security and Monitoring",
    productDescription:
      "Explore industry standard tools that keep your code safe, your permissions secure and your infrastructure monitored so that you can confidently scale your brilliant ideas.",
    offerHeading: "Offers in this bundle",
  },

  {
    image: githubimg,
    imageHeading: "Primer",
    productHeading: "Primer: Copilot",
    productDescription:
      "What is Copilot and how do you get started using it? Use this Experience as a Primer on Copilot. We share tutorials, guides and templates to learn how to use AI in your development process.",
    offerHeading: "Offers in this bundle",
  },
];

export function Offers() {
  return (
    <div className="container py-16 ">
      <div>
        <div className="text-2xl font-medium pb-4">
          <h1>Experiences</h1>
        </div>
        <p>
          Discover the best ways to use pack offers with Experiences.
          Experiences are curated bundles of pack partner products, GitHub
          tools, and other <br></br> resources that are designed for you learn
          new skills and make the most out of the Student Developer Pack and
          your journey in Global Campus.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {partnerProducts.map((product) => (
            <div>
              <OfferCards
                image={product.image}
                imageHeading={product.imageHeading}
                productHeading={product.productHeading}
                productDescription={product.productDescription}
                offerHeading={product.offerHeading}
              ></OfferCards>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
