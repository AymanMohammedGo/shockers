"use client";
import Image from "next/image";
import { useState } from "react";

const AccordionItem = ({ id, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2 id={`accordion-collapse-heading-${id}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-seconds border  border-seconds  focus:ring-4  hover:text-primary  hover:bg-seconds  gap-3 ${
            isOpen ? "rounded-t-xl" : ""
          }`}
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={`accordion-collapse-body-${id}`}
        >
          <span>{title}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 shrink-0 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${id}`}
        className={`${isOpen ? "" : "hidden"}`}
        aria-labelledby={`accordion-collapse-heading-${id}`}
      >
        <div className="p-5 border  border-seconds bg-seconds  ">
          {children}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      <AccordionItem id="1" title="Architectural Services">
        <p className="mb-2 text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum
          similique praesentium a, doloremque accusamus voluptatem harum eum
          quos quis ut iure, sunt, quisquam eligendi velit fuga ipsa? Maiores,
          quisquam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dolores commodi, molestiae itaque sapiente debitis dicta sequi rem
          repudiandae quo dolorem sed temporibus odio voluptate rerum iusto enim
          quasi possimus quidem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ad illum similique praesentium a, doloremque
          accusamus voluptatem harum eum quos quis ut iure, sunt, quisquam
          eligendi velit fuga ipsa? Maiores, quisquam? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Dolores commodi, molestiae itaque
          sapiente debitis dicta sequi rem repudiandae quo dolorem sed
          temporibus odio voluptate rerum iusto enim quasi possimus quidem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum
          similique praesentium a, doloremque accusamus voluptatem harum eum
          quos quis ut iure, sunt, quisquam eligendi velit fuga ipsa? Maiores,
          quisquam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dolores commodi, molestiae itaque sapiente debitis dicta sequi rem
          repudiandae quo dolorem sed temporibus odio voluptate rerum iusto enim
          quasi possimus quidem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ad illum similique praesentium a, doloremque
          accusamus voluptatem harum eum quos quis ut iure, sunt, quisquam
          eligendi velit fuga ipsa? Maiores, quisquam? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Dolores commodi, molestiae itaque
          sapiente debitis dicta sequi rem repudiandae quo dolorem sed
          temporibus odio voluptate rerum iusto enim quasi possimus quidem.
        </p>
        <Image
          className=" w-full"
          src="/assets/services.jpg"
          width={500}
          height={500}
          alt="project"
        />
      </AccordionItem>
      <AccordionItem id="2" title="Architectural Services">
        <p className="mb-2 text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum
          similique praesentium a, doloremque accusamus voluptatem harum eum
          quos quis ut iure, sunt, quisquam eligendi velit fuga ipsa? Maiores,
          quisquam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dolores commodi, molestiae itaque sapiente debitis dicta sequi rem
          repudiandae quo dolorem sed temporibus odio voluptate rerum iusto enim
          quasi possimus quidem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ad illum similique praesentium a, doloremque
          accusamus voluptatem harum eum quos quis ut iure, sunt, quisquam
          eligendi velit fuga ipsa? Maiores, quisquam? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Dolores commodi, molestiae itaque
          sapiente debitis dicta sequi rem repudiandae quo dolorem sed
          temporibus odio voluptate rerum iusto enim quasi possimus quidem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum
          similique praesentium a, doloremque accusamus voluptatem harum eum
          quos quis ut iure, sunt, quisquam eligendi velit fuga ipsa? Maiores,
          quisquam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dolores commodi, molestiae itaque sapiente debitis dicta sequi rem
          repudiandae quo dolorem sed temporibus odio voluptate rerum iusto enim
          quasi possimus quidem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ad illum similique praesentium a, doloremque
          accusamus voluptatem harum eum quos quis ut iure, sunt, quisquam
          eligendi velit fuga ipsa? Maiores, quisquam? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Dolores commodi, molestiae itaque
          sapiente debitis dicta sequi rem repudiandae quo dolorem sed
          temporibus odio voluptate rerum iusto enim quasi possimus quidem.
        </p>
        <Image
          className=" w-full"
          src="/assets/services.jpg"
          width={500}
          height={500}
          alt="project"
        />
      </AccordionItem>
      <AccordionItem id="3" title="Architectural Services">
        <p className="mb-2 text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum
          similique praesentium a, doloremque accusamus voluptatem harum eum
          quos quis ut iure, sunt, quisquam eligendi velit fuga ipsa? Maiores,
          quisquam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dolores commodi, molestiae itaque sapiente debitis dicta sequi rem
          repudiandae quo dolorem sed temporibus odio voluptate rerum iusto enim
          quasi possimus quidem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ad illum similique praesentium a, doloremque
          accusamus voluptatem harum eum quos quis ut iure, sunt, quisquam
          eligendi velit fuga ipsa? Maiores, quisquam? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Dolores commodi, molestiae itaque
          sapiente debitis dicta sequi rem repudiandae quo dolorem sed
          temporibus odio voluptate rerum iusto enim quasi possimus quidem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illum
          similique praesentium a, doloremque accusamus voluptatem harum eum
          quos quis ut iure, sunt, quisquam eligendi velit fuga ipsa? Maiores,
          quisquam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dolores commodi, molestiae itaque sapiente debitis dicta sequi rem
          repudiandae quo dolorem sed temporibus odio voluptate rerum iusto enim
          quasi possimus quidem. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ad illum similique praesentium a, doloremque
          accusamus voluptatem harum eum quos quis ut iure, sunt, quisquam
          eligendi velit fuga ipsa? Maiores, quisquam? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Dolores commodi, molestiae itaque
          sapiente debitis dicta sequi rem repudiandae quo dolorem sed
          temporibus odio voluptate rerum iusto enim quasi possimus quidem.
        </p>
        <Image
          className=" w-full"
          src="/assets/services.jpg"
          width={500}
          height={500}
          alt="project"
        />
      </AccordionItem>
    </div>
  );
};

export default Accordion;
