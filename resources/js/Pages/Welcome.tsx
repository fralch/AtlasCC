import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import Navbar from "@/Components/NavBar";
import Slider from "@/Components/Slider";
import Nosotros from "@/Components/nosotros";

export default function Welcome() {
    return (
        <div>
            <Head title="Atlas" />
            <Navbar />
            <Slider />
            <Nosotros />

            <main className="bg-gray-100">
                {/* Hero Section */}
                

                {/* Appointment Form */}
                
            </main>
        </div>
    );
}
