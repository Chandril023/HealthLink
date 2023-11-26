import React from 'react'

const Gallery = () => {
    return (
        <>
            {/* ======= Gallery Section ======= */}
            <section id="gallery" className="gallery">
                <div className="container">
                    <div className="section-title">
                        <h2>Gallery</h2>
                        <p>
                        Explore our app's gallery section for an immersive visual journey into the world of healthcare excellence. This curated collection offers a glimpse into our state-of-the-art facilities, showcases our dedicated medical professionals in action, and highlights the advanced technologies that power our services. From behind-the-scenes glimpses to patient success stories, our gallery provides a visual narrative of our commitment to delivering top-notch healthcare experiences. Join us in celebrating moments of care, innovation, and the pursuit of well-being through the captivating visuals in our app's gallery.
                        </p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row g-0">
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a
                                    href="assets/img/gallery/gallery-1.jpg"
                                    className="galelry-lightbox"
                                >
                                    <img
                                        src="assets/img/gallery/gallery-1.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a
                                    href="assets/img/gallery/gallery-2.jpg"
                                    className="galelry-lightbox"
                                >
                                    <img
                                        src="assets/img/gallery/gallery-2.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a
                                    href="assets/img/gallery/gallery-3.jpg"
                                    className="galelry-lightbox"
                                >
                                    <img
                                        src="assets/img/gallery/gallery-3.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a
                                    href="assets/img/gallery/gallery-4.jpg"
                                    className="galelry-lightbox"
                                >
                                    <img
                                        src="assets/img/gallery/gallery-4.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a
                                    href="assets/img/gallery/gallery-5.jpg"
                                    className="galelry-lightbox"
                                >
                                    <img
                                        src="assets/img/gallery/gallery-5.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a
                                    href="assets/img/gallery/gallery-6.jpg"
                                    className="galelry-lightbox"
                                >
                                    <img
                                        src="assets/img/gallery/gallery-6.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a
                                    href="assets/img/gallery/gallery-7.jpg"
                                    className="galelry-lightbox"
                                >
                                    <img
                                        src="assets/img/gallery/gallery-7.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a
                                    href="assets/img/gallery/gallery-8.jpg"
                                    className="galelry-lightbox"
                                >
                                    <img
                                        src="assets/img/gallery/gallery-8.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Gallery Section */}
        </>

    )
}

export default Gallery
