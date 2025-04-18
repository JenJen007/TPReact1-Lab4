import { useEffect, useState } from 'react';
import { GenericTable } from '../GenericTable';
import { GenericForm } from '../GenericForm';
import { categoryTableConfig, categoryFormConfig } from '../configs/categoryConfig';
import { Categoria } from '../../models/Categoria';

export function CategoriesCrud() {
  const [categories, setCategories] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Categoria | null>(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/categoria')
      .then(res => res.json())
      .then((data: Categoria[]) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  const handleSave = (values: Partial<Categoria>) => {
    setLoading(true);
    const method = editing ? 'PUT' : 'POST';
    const url = editing ? `http://localhost:8080/api/categoria/${editing.id}` : 'http://localhost:8080/api/categoria';
    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then(res => res.json())
      .then(() => {
        setShowForm(false);
        setEditing(null);
        return fetch('http://localhost:8080/api/categoria')
          .then(res => res.json())
          .then((data: Categoria[]) => setCategories(data));
      })
      .finally(() => setLoading(false));
  };

  const handleDelete = (row: Categoria) => {
    setLoading(true);
    fetch(`http://localhost:8080/api/categoria/${row.id}`, { method: 'DELETE' })
      .then(() => fetch('http://localhost:8080/api/categoria'))
      .then(res => res.json())
      .then((data: Categoria[]) => setCategories(data))
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Categorías</h1>
        <button
          onClick={() => { setEditing(null); setShowForm(true); }}
          className="bg-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-pink-700"
        >
          Nueva Categoría
        </button>
      </div>
      <GenericTable<Categoria>
        columns={categoryTableConfig.columns}
        data={categories}
        onEdit={row => { setEditing(row); setShowForm(true); }}
        onDelete={handleDelete}
        loading={loading}
      />
      <GenericForm<Categoria>
        fields={categoryFormConfig}
        initialValues={editing || {}}
        open={showForm}
        onSave={handleSave}
        onCancel={() => { setShowForm(false); setEditing(null); }}
        loading={loading}
        title={editing ? 'Editar Categoría' : 'Nueva Categoría'}
      />
    </div>
  );
}
