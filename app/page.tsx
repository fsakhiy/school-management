import Link from "next/link"

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-neutral-200 p-10">
      <div className="w-full h-full p-10 shadow-2xl rounded-2xl bg-white flex flex-col gap-16">
        <div>
          <div className="font-bold text-3xl">
            School Management System
          </div>
          <div>
            make managing student and employees attendances easy
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <button className="p-5 bg-blue-600 font-bold text-xl shadow-xl rounded-xl text-white hover:bg-blue-700 transition-colors"><Link href={'/auth/login/student'}>Student Login</Link></button>
          <button className="p-5 bg-blue-600 font-bold text-xl shadow-xl rounded-xl text-white hover:bg-blue-700 transition-colors"><Link href={'/auth/login/employee'}>Empoyee Login</Link></button>
        </div>
      </div>
    </div>
  )
}

export default HomePage