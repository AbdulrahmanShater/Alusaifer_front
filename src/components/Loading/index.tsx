import Image from 'next/image';

export function LoadingPage() {
    return (
        <>
            <div className="h-screen w-screen flex flex-row justify-center items-center content-center">
                <div className={`loading-bar flex flex-col justify-center items-center gap-4 p-12 w-40 h-40`}>
                    <Image src="/img/smallLogo.png" alt="img" className="w-full h-auto object-contain" width={200} height={200} />
                </div>
            </div>
        </>
    )
} 