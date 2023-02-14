interface LayoutProps {
  children: React.ReactNode;
}

import { useRouter } from "next/router";

import Footer from "@/components/Footer";
import ColorFilters from "@/components/ColorFilters";
import NavigationBar from "@/components/NavigationBar";

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <main className={`font-sans`}>
      <div className="block m-auto max-w-full">
        <div className="block">
          <NavigationBar />
          <div className="flex flex-1 flex-col max-w-full">
            {children}
            {router.route !== "/" && <Footer />}
          </div>
        </div>
      </div>
      <ColorFilters />
    </main>
  );
};
export default Layout;
