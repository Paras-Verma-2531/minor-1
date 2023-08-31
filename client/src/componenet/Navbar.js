import React from 'react'

const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand h3" href="#">Blood_Bank Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <form className="d-flex">
                            <a className="btn btn-info btn-lg mx-2" href="/login" role="button">
                                Login
                            </a>
                            <a className="btn btn-warning btn-lg mx-2" href="/signup" role="button">
                                Signup
                            </a>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar