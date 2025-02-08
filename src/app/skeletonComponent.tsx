import Skeleton from "@mui/material/Skeleton";

const SkeletonComponent = () => {
    return (
      <div className="w-[460px] h-[630px] p-8">
        <Skeleton
          height={400}
          variant="rounded"
          animation={"pulse"}
          className="mb-2"
        />
        <Skeleton
          height={35}
          variant="rounded"
          animation={"pulse"}
          className="mb-2"
        />
        <Skeleton
          height={50}
          variant="rounded"
          animation={"pulse"}
          className="mb-2"
        />
        <div className="flex justify-between">
          <Skeleton
            width={100}
            height={30}
            variant="rounded"
            animation={"pulse"}
            className="mb-2"
          />
          <Skeleton
            width={100}
            height={30}
            variant="rounded"
            animation={"pulse"}
            className="mb-2"
          />
        </div>
      </div>
    );
  };
  export default SkeletonComponent