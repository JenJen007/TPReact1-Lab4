export interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
}

interface GenericTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
  onView?: (row: T) => void;
  onToggle?: (row: T) => void;
  loading?: boolean;
  toggleField?: keyof T;
}

export function GenericTable<T extends { id: number | string }>({
  columns,
  data,
  onEdit,
  onDelete,
  onView,
  onToggle,
  loading = false,
  toggleField = 'enabled' as keyof T,
}: GenericTableProps<T>) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 shadow-md">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            {columns.map((col) => (
              <th key={col.key as string} className="py-3 px-4 font-semibold text-lg text-black">
                {col.label}
              </th>
            ))}
            <th className="py-3 px-4 font-semibold text-lg text-black">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr><td colSpan={columns.length + 1} className="text-center py-6">Cargando...</td></tr>
          ) : (
            data.map((row) => (
              <tr key={row.id} className="border-b hover:bg-gray-100 transition-colors">
                {columns.map((col) => (
                  <td key={col.key as string} className="py-3 px-4">
                    {col.render ? col.render(row) : String((row as Record<string, unknown>)[col.key as string])}
                  </td>
                ))}
                <td className="py-3 px-4 flex gap-3 items-center">
                  {onToggle && (
                    <button onClick={() => onToggle(row)} className="focus:outline-none">
                      {/* Toggle estilo switch */}
                      <span className={`inline-block w-10 h-6 rounded-full relative shadow ${row[toggleField] ? 'bg-pink-200' : 'bg-gray-200'}`}>
                        <span className={`absolute left-1 top-1 w-4 h-4 rounded-full transition bg-pink-600 shadow ${row[toggleField] ? 'translate-x-4' : ''}`}></span>
                      </span>
                    </button>
                  )}
                  {onView && (
                    <button onClick={() => onView(row)} className="text-black hover:text-pink-600">
                      <span className="material-icons">visibility</span>
                    </button>
                  )}
                  {onEdit && (
                    <button onClick={() => onEdit(row)} className="text-black hover:text-pink-600">
                      <span className="material-icons">edit</span>
                    </button>
                  )}
                  {onDelete && (
                    <button onClick={() => onDelete(row)} className="text-black hover:text-red-600">
                      <span className="material-icons">delete</span>
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
