import { LeftSideBar, RightSideBar, MobileNav } from "@/app/layouts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col'>
      <main className='flex bg-black-1'>
        <LeftSideBar />

        <section className='border-2 border-red-500 flex min-h-screen flex-1 flex-col px-4 sm:px-14'>
          
          <div className='mx-auto flex w-full max-w-5xl flex-col max-sm:px-4'>
            <MobileNav />

            <div className='flex flex-col md:pb-14'>
              Toaster
              {children}
            </div>
          </div>
        </section>

        <RightSideBar />
      </main>
    </div>
  );
}
