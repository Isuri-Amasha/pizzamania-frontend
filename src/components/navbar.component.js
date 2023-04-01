
function navbar() {
  return (
    <div>
      <nav className="flex flex-col w-full px-6 py-4 bg-white shadow sm:flex-row sm:text-left sm:justify-between sm:items-baseline">
        <div className="mb-2 sm:mb-0">
          <a href="/home" className="text-xl no-underline duration-300 text-grey-darkest hover:text-blue-dark hover:font-bold">Home</a>
        </div>
        <div className='text-lg font-light hover:text-blue-dark'>
          <a href="/employee" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Employees</a>
          <a href="/customer" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Customer</a>
          <a href="/order" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Orders</a>
          <a href="/kitchenOrder" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Kitchen</a>
          <a href="/inventory" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Inventory</a>
          <a href="/three" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Delivery</a>
          <a href="/three" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Schedules</a>
          <a href="/three" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Feedbacks</a>
          <a href="/three" className="m-2 text-black no-underline duration-300 hover:text-blue-800 hover:font-normal">Payments</a>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
            <button class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign Up</button>
          </div>
          <div class="flex flex-col sm:flex-row sm:text-left sm:justify-between">
            <button class="flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign In</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbar;