import Image from "next/image"
import { Button } from "@ui/components/button"

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="flex flex-col items-center justify-between min-h-screen p-24 w-screen h-screen top-[0] absolute gradient blur-3xl opacity-30"></div>
      <div className="relative flex items-center">
        <div className="flex relative z-0 pb-16 flex-col gap-8 justify-between items-center pt-[64px]">
          <div className="z-50 flex items-center justify-center">
            <div className="absolute min-w-[614px] min-h-[614px]">
              <Image
                alt="Turborepo"
                height={614}
                src="circles.svg"
                width={614}
                style={{ pointerEvents: "none" }}
              />
            </div>
            <div className="text-sm">
              <div className="relative flex flex-col items-center p-6 leading-relaxed text-white bg-black border border-opacity-25 bg-opacity-40 border-slate-300 rounded-xl">
                Turborepo Docs with: <span className="text-base font-bold underline underline-offset-2">tailwindcss</span> & <span className="text-base font-bold underline underline-offset-2">shadcn/ui</span> pre-configured.
                <Button className="mt-8">Shadcn/UI Button</Button>
              </div>              
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}