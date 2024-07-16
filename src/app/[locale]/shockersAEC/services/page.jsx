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
      <div className="max-w-screen-xxl m-auto w-full my-6 p-2">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Architectural Services</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea illo
              est doloremque perferendis iure enim totam unde ullam temporibus,
              earum eveniet laborum commodi tempore sequi consectetur id
              deserunt, assumenda iste. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate recusandae assumenda delectus, quidem
              soluta ipsum? Adipisci, maiores quisquam ducimus praesentium esse
              corrupti alias laudantium, possimus necessitatibus rerum quae
              architecto? Dolores.
              <Image
                className=" w-full"
                src="/assets/services.jpg"
                width={500}
                height={500}
                alt="project"
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Engineering Services</AccordionTrigger>
            <AccordionContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              ea fugit at ab laudantium facere voluptatibus autem amet voluptas
              aperiam cumque fuga in ad, recusandae accusamus voluptates
              inventore itaque optio! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Consectetur optio dolor, at est exercitationem
              sit impedit aliquid minus fugiat hic corrupti distinctio possimus
              dolore fuga inventore fugit pariatur aliquam architecto.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Construction Services</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
              sapiente ipsam repellendus similique, eos accusamus sunt magnam
              necessitatibus consequatur non dolorem nisi quas adipisci
              provident maiores dignissimos deleniti possimus. A. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Doloremque minus unde
              dolor rem officia esse quod dolorum ea id tempora, eveniet in
              accusamus libero ipsa consectetur aliquid explicabo illo possimus.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Services;
