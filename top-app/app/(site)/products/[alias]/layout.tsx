export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div style={{ border: '1px solid #fff'}}>
          {children}
        </div>
  );
}
