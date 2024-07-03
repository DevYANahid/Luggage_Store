import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Topbar from './Backend/Topbar/Topbar';
import Sidebar from './Backend/Sidebar/Sidebar';

export default function Dashboard() {
    return (
     <>
       <Topbar />
       <Sidebar />
     </>
    );
}
