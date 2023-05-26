import { MainNav } from "@/components/main-nav";

interface HomeLayoutProps {
  children: React.ReactNode;
}
export default function MainLayout({ children }: HomeLayoutProps) {
  return (
    <div className="min-h-screen">
      <MainNav />
      {children}
    </div>
  );
}
