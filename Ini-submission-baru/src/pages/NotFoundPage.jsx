import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <section className="not-found">
            <h2>404 - Halaman tidak ditemukan</h2>
            <p>Maaf, halaman yang Anda cari tidak tersedia.</p>
            <Link to="/">Kembali ke beranda</Link>
        </section>
    );
}

export default NotFoundPage;