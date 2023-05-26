interface DocsLayoutProps {
  children: React.ReactNode;
}
export default function DocsLayout({ children }: DocsLayoutProps) {
  return <div className="h-screen flex flex-col">{children}</div>;
}
