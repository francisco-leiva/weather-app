export default function Loading() {
  return (
    <div className='flex h-[100dvh] w-[100dvw] items-center justify-center bg-black/30'>
      <span className='h-12 w-12 animate-spin rounded-full border-[3px] border-solid border-white border-b-transparent'></span>
    </div>
  );
}
