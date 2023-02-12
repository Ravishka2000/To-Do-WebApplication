import React from "react";

const Header = () => {
	return (
		<div className="shadow px-5 text-bg-dark">
			<header className="d-flex flex-wrap justify-content-center py-4">
				<a
					href="/"
					className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-light text-decoration-none"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						classNameName="bi bi-layers-fill"
						viewBox="0 0 16 16"
					>
						<path d="M7.765 1.559a.5.5 0 0 1 .47 0l7.5 4a.5.5 0 0 1 0 .882l-7.5 4a.5.5 0 0 1-.47 0l-7.5-4a.5.5 0 0 1 0-.882l7.5-4z" />
						<path d="m2.125 8.567-1.86.992a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882l-1.86-.992-5.17 2.756a1.5 1.5 0 0 1-1.41 0l-5.17-2.756z" />
					</svg>
					<span className="fs-4 ms-4">TODO</span>
				</a>

				<ul className="nav nav-pills">
					<li className="nav-item">
						<a href="/" className="nav-link text-light-emphasis">
							TODO
						</a>
					</li>
					<li className="nav-item">
						<a href="/" className="nav-link text-light-emphasis">
							ADD TODO
						</a>
					</li>
				</ul>
			</header>
		</div>
	);
};

export default Header;
