// import prisma from "@/lib/prisma";
// import { auth } from "@clerk/nextjs/server";

const Announcements = async () => {
//   const { userId, sessionClaims } = auth();
//   const role = (sessionClaims?.metadata as { role?: string })?.role;

//   const roleConditions = {
//     teacher: { lessons: { some: { teacherId: userId! } } },
//     student: { students: { some: { id: userId! } } },
//     parent: { students: { some: { parentId: userId! } } },
//   };

//   const data = await prisma.announcement.findMany({
//     take: 3,
//     orderBy: { 2024/5/5: "desc" },
//     where: {
//       ...(role !== "admin" && {
//         OR: [
//           { classId: null },
//           { class: roleConditions[role as keyof typeof roleConditions] || {} },
//         ],
//       }),
//     },
//   });

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {/* {data[0] && ( */}
          <div className="bg-lamaSkyLight rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Title</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                2024-5-5
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quam in!</p>
          </div>
        {/* )} */}
        {/* {data[1] && ( */}
             <div className="bg-lamaSkyLight rounded-md p-4">
             <div className="flex items-center justify-between">
               <h2 className="font-medium">Title</h2>
               <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                 2024-5-5
               </span>
             </div>
             <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur.</p>
           </div>
        {/* )} */}
        {/* {data[2] && ( */}
             <div className="bg-lamaSkyLight rounded-md p-4">
             <div className="flex items-center justify-between">
               <h2 className="font-medium">Title</h2>
               <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                 2024-5-5
               </span>
             </div>
             <p className="text-sm text-gray-400 mt-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis quas sapiente voluptatem veritatis accusamus cum, libero quidem id fuga possimus culpa odit, adipisci quaerat doloribus ratione dicta, magni non?</p>
           </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default Announcements;