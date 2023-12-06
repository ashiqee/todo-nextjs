import Link from "next/link";

const TodoList = async () => {
  const res = await fetch("http://localhost:3001/todos", {
    // next: { revalidate: 5 },
    cache: "no-store",
  });
  const todoData = await res.json();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-slate-900 text-white">
            <tr>
              <th>#</th>
              <th>Task Details</th>
              <th>Status</th>
              <th>See More</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {todoData?.map((data, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{data.text}</td>
                <td>{data?.completed ? <>Done</> : <>pending</>}</td>
                <td>
                  {" "}
                  <Link href={`/todoDetails/${data.id}`}>
                    {" "}
                    <button> details </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;
