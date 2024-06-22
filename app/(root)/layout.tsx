import { LeftSideBar } from "@/app/layouts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>
        <LeftSideBar />
        {children}
        <p>Right sideBar</p>
      </main>
    </div>
  );
}
