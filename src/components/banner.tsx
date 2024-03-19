export function Banner() {
  return (
    <div className="top-0 left-0 absolute m-0 p-0 -z-10 min-h-[80vh]">
      <div className="absolute bg-background/85 dark:bg-background/90 w-full h-full" />
      <video className="w-full object-cover min-h-[80vh]" autoPlay muted loop>
        <source
          className="object-cover h-full"
          src={"./video.mp4"}
          type="video/mp4"
        />
      </video>
    </div>
  );
}
