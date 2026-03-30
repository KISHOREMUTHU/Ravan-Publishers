import React from "react";
import {motion} from "framer-motion";

const images = import.meta.glob('../assets/*', {eager:true});

export default function Showcase(){
return(
<div className="p-10 grid grid-cols-2 md:grid-cols-3 gap-6">
{Object.values(images).map((img,i)=>(
<motion.div
key={i}
whileHover={{scale:1.08}}
className="overflow-hidden rounded-2xl"
>
<img src={img.default} className="rounded-2xl"/>
</motion.div>
))}
</div>
);
}