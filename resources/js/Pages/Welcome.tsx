import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import Navbar from "@/Components/NavBar";
import Slider from "@/Components/Slider";
import Nosotros from "@/Components/nosotros";
import Servicios from "@/Components/Servicios";
import Membresias from "@/Components/membresias";
import Doctores from "@/Components/doctores";
import Preguntas from "@/Components/preguntas";
import Contactanos from "@/Components/contactanos";

export default function Welcome() {
    return (
        <div style={{ fontFamily: 'Poppins', fontWeight: '300', overflowX: 'hidden' }}>
            <Head title="Atlas" />
            <Navbar />
            <Slider />
            <section id="nosotros">
                <Nosotros />
            </section>
            <section id="servicios">
                <Servicios />
            </section>
            <section id="membresias">
                <Membresias />
            </section>
            <section id="doctores">
                <Doctores />
            </section>
            <section id="preguntas">
                <Preguntas />
            </section>
            <section id="contactanos">
                <Contactanos />
            </section>
            <main className="bg-gray-100">
                {/* Hero Section */}

                {/* Appointment Form */}
            </main>
        </div>
    );
}
