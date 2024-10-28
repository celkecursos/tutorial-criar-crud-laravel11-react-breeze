import PrimaryButton from '@/Components/Button/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function UserIndex({ auth, user }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Usuário</h2>}
        >
            <Head title="Usuário" />

            <div className="py-4 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg dark:bg-gray-800">
                    <div className="flex justify-between items-center m-4">
                        <h3 className="text-lg">Visualizar</h3>
                        <div className="flex space-x-4">
                            <Link href={route('users.index')}>
                                <PrimaryButton>Listar</PrimaryButton>
                            </Link>
                        </div>
                    </div>

                    {/* Imprimir os dados do usuário */}
                    <div className="bg-gray-50 text-sm dark:bg-gray-700 p-4 rounded-lg shadow-md">
                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-700 dark:text-gray-200">ID</p>
                            <p className="text-gray-600 dark:text-gray-400">{user.id}</p>
                        </div>

                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-700 dark:text-gray-200">Nome</p>
                            <p className="text-gray-600 dark:text-gray-400">{user.name}</p>
                        </div>

                        <div className="mb-4">
                            <p className="text-md font-semibold text-gray-700 dark:text-gray-200">E-mail</p>
                            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
                        </div>

                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}