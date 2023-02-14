import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({ route, totalPages, currentPage }: any) => {
  const prevPage = parseInt(currentPage) - 1 > 0;
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages);

  return (
    <>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <nav className="flex items-center justify-between">
          {!prevPage && (
            <Button variant="disabled">
              <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
            </Button>
          )}
          {prevPage && (
            <Link
              href={
                currentPage - 1 === 1
                  ? `/${route}/`
                  : `/${route}/page/${currentPage - 1}`
              }
            >
              <Button>
                <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
              </Button>
            </Link>
          )}
          <span className="text-lg font-bold marker-line bg-dark-500 text-light-500 dark:bg-light-500 dark:text-dark-500 !py-2 !px-3 leading-normal tracking-wider">
            {currentPage} de {totalPages}
          </span>
          {!nextPage && (
            <Button variant="disabled">
              Próxima <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
          {nextPage && (
            <Link href={`/${route}/page/${currentPage + 1}`}>
              <Button>
                Próxima <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              {/* <button rel="next"></button> */}
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};

export default Pagination;
