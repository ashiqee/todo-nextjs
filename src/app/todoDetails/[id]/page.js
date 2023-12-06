const PageDetails = async ({ params }) => {
  const res = await fetch(`http://localhost:3001/todos/${params.id}`, {
    // next: { revalidate: 5 },
    cache: "no-store",
  });

  const todoDetail = await res.json();
  console.log(todoDetail);
  return (
    <div className="text-center flex justify-center h-screen content-center  items-center ">
      <div>
        <h2 className="text-3xl">Task Details</h2>
        <h2 className="text-2xl">{todoDetail?.text}</h2>
        <h2 className="text-2xl">
          {todoDetail?.completed ? <>Done</> : <>pending</>}
        </h2>
      </div>
    </div>
  );
};

export default PageDetails;
