import ReactPaginate from "react-paginate";
import { BsArrowRight } from "react-icons/bs";

export default function Pagination({
  totalPages = 1,
  onClick = () => null,
  totalItems = 0,
  viewedItems = 0,
}) {
  const handlePageClick = (btn) => {
    onClick(btn.selected + 1);
  };

  return (
    <div className="grid container select-none grid-cols-2 lg:grid-cols-3 items-center justify-end pt-12">
      <ReactPaginate
        breakLabel={<span className="text-gray-300 text-xl">...</span>}
        breakLinkClassName="py-2 px-4 rounded-lg outline-none focus-within:ring-1 focus-within:ring-brand focus-within:ring-offset-2"
        nextLabel={
          <div className="flex items-center gap-4">
            Next <BsArrowRight />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        marginPagesDisplayed={1}
        previousLabel={null}
        renderOnZeroPageCount={null}
        containerClassName="flex items-center gap-4 justify-center justify-self-center text-xl select-none text-gray-400 col-start-1 lg:col-start-2"
        nextLinkClassName="text-gray-800 hover:text-brand duration-75 active:text-brand select-none outline-none focus-within:text-brand"
        pageLinkClassName="py-2 px-4 flex items-center justify-center rounded-lg  outline-none focus-within:ring-1 focus-within:ring-brand focus-within:ring-offset-2"
        activeLinkClassName="bg-brand text-white"
      />

      <div>
        <p className="text-xl text-end text-gray-800 duration-150 hover:text-brand">
          Showing {viewedItems} items out of {totalItems} items
        </p>
      </div>
    </div>
  );
}
