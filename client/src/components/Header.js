import React from 'react'

const Header = () => {
	return (
		<header className="py-3 text-bg-dark">
			<div className="container mx-4">
				<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

					<a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-layers-fill" viewBox="0 0 16 16">
							<path d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z" />
							<path d="m2.125 8.567-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z" />
						</svg>
						<h2 className='ms-3'>TODO</h2>
					</a>

					<ul className="ms-5 ps-5 nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
						<li><a href="/" className="nav-link px-2 text-secondary">TODO</a></li>
						<li><a href="/" className="nav-link px-2 text-secondary">ADD TODO</a></li>
					</ul>

					<div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
					</div>

					<div className="text-end">
						<button type="button" className="btn btn-outline-light me-2">Login</button>
						<button type="button" className="btn btn-warning">Sign-up</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;
