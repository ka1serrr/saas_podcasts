export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <p>Left sideBar</p>
        {children}
        <p>Right sideBar</p>
      </main>
    </div>
  );
}
