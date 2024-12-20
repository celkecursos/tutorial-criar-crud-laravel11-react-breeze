import AlertMessage from '@/Components/Alert/AlertMessage';
import InfoButton from '@/Components/Button/InfoButton';
import WarningButton from '@/Components/Button/WarningButton';
import ConfirmDeleteButton from '@/Components/Delete/ConfirmDeleteButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function UserShow({ auth, user }) {

    const {flash} = usePage().props;
    
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
                        <div className="flex space-x-1">
                            <Link href={route('users.index')}>
                                <InfoButton className="text-sm">Listar</InfoButton>
                            </Link>
                            <Link href={route('users.edit', { user: user.id})}>
                                <WarningButton className="text-sm">Editar</WarningButton>
                            </Link>
                            <ConfirmDeleteButton id={user.id} routeName="users.destroy" />
                        </div>
                    </div>

                    {/* Exibir mensagens de alerta */}
                    <AlertMessage message={flash} />

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
