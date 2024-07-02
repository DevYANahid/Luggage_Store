import Sidebar from '@/Components/Frontend_Components/Sidebar/Sidebar';
import Topbar from '@/Components/Frontend_Components/Topbar/Topbar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
     <>
        <Topbar />
        <Sidebar />
     </>
    );
}
