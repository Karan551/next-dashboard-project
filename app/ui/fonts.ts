import { Inter, Nunito, Lusitana } from 'next/font/google';


const inter = Inter({ subsets: ['latin'], weight: "700" });

const nunito = Nunito({
    preload: true,
    weight: "700",
    fallback: ["arial"]
});

const lustiana = Lusitana({ weight: "700", subsets: ['latin'] });

export { inter, nunito,lustiana };