import { Inter, Nunito, Lusitana } from 'next/font/google';


const inter = Inter({ subsets: ['latin'], weight: "700" });

const nunito = Nunito({
    weight: "700",
    fallback: ["arial"],
    subsets:["latin"]
});

const lusitana = Lusitana({ weight: "700", subsets: ['latin'] });

export { inter, nunito,lusitana };