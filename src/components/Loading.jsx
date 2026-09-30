export default function Loading() {
  return (
    <div className='absolute inset-0 flex h-full w-full items-center justify-center bg-black/30'>
      <span className='h-12 w-12 animate-spin rounded-full border-[3px] border-solid border-white border-b-transparent'></span>
    </div>
  );
}
