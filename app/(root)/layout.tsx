import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { MobileIcon } from "@radix-ui/react-icons";
import Image from "next/image"; // Ensure correct import for Image component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const loggedIn = { firstName: 'Kenan', lastName: 'Blair'}

  return (
    <main className = "flex h-screen w-full font-inter">
        <Sidebar user = {loggedIn}/>
        <div className = "flex size-full flex-col">
          <div className = "root-layout">
            <Image src = "/icons/logo.svg" width = {30} height = {30} alt = "menu icon"/>
            <div>
              <MobileNav user = {loggedIn}/>
            </div>
          </div>
          {children}
        </div>
    </main>
  );
}
