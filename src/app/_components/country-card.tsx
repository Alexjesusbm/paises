"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface CountryCardProps {
  name:string;
  flag:string;
}

export const CountryCard = ({name, flag}: CountryCardProps) => {

  return (
    <Card className="p-4">
      
        <div className="flex relative w-full h-24 md:h-32">
          <Image
          src={flag}
          alt={`Bandeira da ${name}`}
          fill
          />
        </div>
        <p className="text-center py-2">{name}</p>
    </Card>
  );
};

