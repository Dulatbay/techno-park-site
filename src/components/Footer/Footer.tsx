function Footer() {
    return (
        <footer className="text-center text-lg-start text-muted bg-dark p-4">
            <section className="">
                <div className="container text-center text-md-start">
                    <div className="row">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem"></i>Techno Park
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum eveniet incidunt nobis. Asperiores illo natus neque, numquam odio repellat!
                            </p>
                        </div>


                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home"></i> ул. Абылай хана, 1/1, г. Каскелен</p>
                            <p>
                                <i className="fas fa-envelope"></i>
                                technopark@sdu.edu.kz
                            </p>
                            <p><i className="fas fa-phone"></i> +7 727 307 95 65</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="text-center">
                © 2023 Copyright:
                <a className="text-reset fw-bold" href="#">Techno Park</a>
            </div>
        </footer>
    );
}

export default Footer;