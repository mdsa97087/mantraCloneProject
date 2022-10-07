function Pagination({ onChange, current, total }) {
      const prev = (
            <button
                  disabled={current === 1}
                  onClick={() => {
                        onChange(current - 1);
                  }}
            >
                  Prev
            </button>
      );
      const currentPage = (
            <button
                  onClick={() => {
                        onChange(current);
                  }}
            >
                  {current}
            </button>
      );
      const next = (
            <button
                  disabled={current === total}
                  onClick={() => {
                        onChange(current + 1);
                  }}
            >
                  Next
            </button>
      );
      return (
            <div>
                  <div>
                        {prev}
                        {currentPage}
                        {next}
                  </div>
                  <div>
                        Total Pages: <b>{total}</b>
                  </div>
            </div>
      );
}

export default Pagination;
