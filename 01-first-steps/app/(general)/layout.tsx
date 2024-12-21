import { Navbar } from "@/components";


export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar></Navbar>
      <main className="flex flex-col text-center p-24">
          <span className="text-lg/">Hola mundo</span>
          { children }
      </main>
    </div>
  );
}