export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="h-16 border-b">
        <nav>{/* 导航内容 */}</nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t mt-auto">
        {/* 页脚内容 */}
      </footer>
    </div>
  );
} 