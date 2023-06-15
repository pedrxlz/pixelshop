export const CardSkeleton = () => {
  return (
    <div className="group relative animate-pulse">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
        <div
          width={1920}
          height={1080}
          src={""}
          alt={"skeleton"}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>

      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 text-ellipsis overflow-hidden whitespace-nowrap w-40 h-4 bg-slate-200 rounded">
            <span aria-hidden="true" className="absolute inset-0" />
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900 h-4 bg-slate-200 w-14 rounded"></p>
      </div>
    </div>
  );
};
