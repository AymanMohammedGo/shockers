"use client";
import ImageOverlaysTop from "@/components/ImageOverlaysTop";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
const Services = () => {
  return (
    <>
      <ImageOverlaysTop namePage="SERVICES" title="Shockers AEC" />
      <div className="max-w-screen-xxl m-auto w-full  p-2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="my-5">
            <AccordionTrigger className="font-bold text-2xl md:text-4xl text-seconds">
              Architectural Services
            </AccordionTrigger>
            <AccordionContent className="text-xl ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea illo
              est doloremque perferendis iure enim totam unde ullam temporibus,
              earum eveniet laborum commodi tempore sequi consectetur id
              deserunt, assumenda iste. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate recusandae assumenda delectus, quidem
              soluta ipsum? Adipisci, maiores quisquam ducimus praesentium esse
              corrupti alias laudantium, possimus necessitatibus rerum quae
              architecto? Dolores.Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea illo est doloremque perferendis iure enim
              totam unde ullam temporibus, earum eveniet laborum commodi tempore
              sequi consectetur id deserunt, assumenda iste. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Voluptate recusandae
              assumenda delectus, quidem soluta ipsum? Adipisci, maiores
              quisquam ducimus praesentium esse corrupti alias laudantium,
              possimus necessitatibus rerum quae architecto? Dolores.
              <Image
                className=" w-full my-3 h-[600px] object-cover"
                src="/assets/services.jpg"
                width={1000}
                height={200}
                alt="project"
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="my-5">
            <AccordionTrigger className="font-bold text-2xl md:text-4xl text-seconds">
              Engineering Services
            </AccordionTrigger>
            <AccordionContent className="text-xl ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea illo
              est doloremque perferendis iure enim totam unde ullam temporibus,
              earum eveniet laborum commodi tempore sequi consectetur id
              deserunt, assumenda iste. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate recusandae assumenda delectus, quidem
              soluta ipsum? Adipisci, maiores quisquam ducimus praesentium esse
              corrupti alias laudantium, possimus necessitatibus rerum quae
              architecto? Dolores.Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea illo est doloremque perferendis iure enim
              totam unde ullam temporibus, earum eveniet laborum commodi tempore
              sequi consectetur id deserunt, assumenda iste. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Voluptate recusandae
              assumenda delectus, quidem soluta ipsum? Adipisci, maiores
              quisquam ducimus praesentium esse corrupti alias laudantium,
              possimus necessitatibus rerum quae architecto? Dolores.
              <Image
                className=" w-full my-3 h-[600px] object-cover"
                src="/assets/services.jpg"
                width={1000}
                height={200}
                alt="project"
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="my-5">
            <AccordionTrigger className="font-bold text-2xl md:text-4xl text-seconds">
              Construction Services
            </AccordionTrigger>
            <AccordionContent className="text-xl ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea illo
              est doloremque perferendis iure enim totam unde ullam temporibus,
              earum eveniet laborum commodi tempore sequi consectetur id
              deserunt, assumenda iste. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate recusandae assumenda delectus, quidem
              soluta ipsum? Adipisci, maiores quisquam ducimus praesentium esse
              corrupti alias laudantium, possimus necessitatibus rerum quae
              architecto? Dolores.Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Ea illo est doloremque perferendis iure enim
              totam unde ullam temporibus, earum eveniet laborum commodi tempore
              sequi consectetur id deserunt, assumenda iste. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Voluptate recusandae
              assumenda delectus, quidem soluta ipsum? Adipisci, maiores
              quisquam ducimus praesentium esse corrupti alias laudantium,
              possimus necessitatibus rerum quae architecto? Dolores.
              <Image
                className=" w-full my-3 h-[600px] object-cover"
                src="/assets/services.jpg"
                width={1000}
                height={200}
                alt="project"
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Services;
