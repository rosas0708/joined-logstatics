import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

new_header_template = """<!-- //header -->
<header class="custom-header">
	<!-- Top Bar -->
	<div class="top-bar">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-8 col-sm-12 top-info text-md-left text-center">
					<span class="fa fa-envelope-open-o mr-2"></span>
					<a href="mailto:info@joinedlink.com" class="contact-link mr-4">info@joinedlink.com</a>
					<span class="fa fa-phone mr-2"></span>
					<span class="contact-text mr-2">+86-17802096929</span>
					<span class="support-text" data-i18n="top_helpline">(24/7 Helpline)</span>
				</div>
				<div class="col-md-4 col-sm-12 text-md-right text-center lang-switcher-container">
					<div class="lang-switcher">
						<span class="fa fa-globe mr-1"></span>
						<a href="?lang=zh" data-lang="zh" data-i18n="lang_zh" class="lang-link">CH</a>
						<span class="lang-sep mx-1">/</span>
						<a href="?lang=en" data-lang="en" data-i18n="lang_en" class="lang-link">EN</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Main Nav -->
	<div class="main-nav shadow-sm">
		<div class="container">
			<nav class="navbar-custom">
				<div id="logo">
					<h1>
						<a href="index.html" class="logo-link">
							<span data-i18n="header_title" class="sr-only">Joined Link Logistics Co., Ltd.</span>
						</a>
					</h1>
				</div>
				<label for="drop" class="toggle" data-i18n="nav_menu">
                    <span class="fa fa-bars"></span> Menu
                </label>
				<input type="checkbox" id="drop" />
				<ul class="menu mt-md-2 ml-auto mb-0 align-items-center">
					<li class="mr-lg-4 mr-2 {home_active}"><a href="index.html" data-i18n="nav_home">Home</a></li>
					<li class="mr-lg-4 mr-2 {services_active}"><a href="services.html" data-i18n="nav_services">Services</a></li>
					<li class="mr-lg-4 mr-2 {about_active} about-nav">
						<a href="about-detail.html?section=profile" data-i18n="nav_about">About Us</a>
						<ul class="service-submenu">
							<li><a href="about-detail.html?section=profile" data-i18n="about_nav_profile">Company Profile</a></li>
							<li><a href="about-detail.html?section=philosophy" data-i18n="about_nav_philosophy">Service Philosophy</a></li>
							<li><a href="about-detail.html?section=org" data-i18n="about_nav_org">Organization Structure</a></li>
							<li><a href="about-detail.html?section=partners" data-i18n="about_nav_partners">Partners</a></li>
						</ul>
					</li>
					<li class="mr-lg-4 mr-2 {contact_active}"><a href="contact.html" data-i18n="nav_contact">Contact</a></li>
					<li class="quote-btn"><a href="#subscribe" data-i18n="nav_subscribe" class="btn btn-primary btn-custom shadow-sm">Subscribe</a></li>
				</ul>
			</nav>
		</div>
	</div>
</header>
<!-- //header -->"""

for file in html_files:
    with open(file, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    # Check if file has header
    if '<header>' not in content and '<header class="custom-header">' not in content:
        continue
        
    home_active = 'active' if file == 'index.html' else ''
    about_active = 'active' if file == 'about.html' else ''
    services_active = 'active' if file == 'services.html' else ''
    contact_active = 'active' if file == 'contact.html' else ''
    
    new_header = new_header_template.format(
        home_active=home_active,
        about_active=about_active,
        services_active=services_active,
        contact_active=contact_active
    )
    
    # Replace old header with new header
    pattern = re.compile(r'<!-- //header -->\s*<header>.*?</header>\s*<!-- //header -->', re.DOTALL)
    if pattern.search(content):
        new_content = pattern.sub(new_header, content)
    else:
        pattern2 = re.compile(r'<header>.*?</header>', re.DOTALL)
        new_content = pattern2.sub(new_header, content)
    
    # Write back
    with open(file, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
print("Updated HTML files.")

custom_css = """
/* --- Custom Header Overrides --- */
.custom-header {
    position: fixed;
    z-index: 999;
    width: 100%;
    background: transparent;
    transition: all 0.3s ease;
    top: 0;
}

.custom-header .top-bar {
    background: #0b1f4a;
    color: rgba(255, 255, 255, 0.9);
    padding: 10px 0;
    font-size: 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.custom-header .top-bar a,
.custom-header .top-bar span {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    transition: color 0.3s;
}

.custom-header .top-bar a:hover {
    color: #fff;
}

.custom-header .support-text {
    font-size: 12px;
    opacity: 0.7;
}

.custom-header .main-nav {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    padding: 0;
    width: 100vw;
    margin-left: calc(50% - 50vw);
}

.custom-header #logo a {
    color: #0b1f4a;
    font-weight: 700;
    padding-left: 120px;
    height: 70px;
    display: flex;
    align-items: center;
    background-size: 100px auto;
    background-position: left center;
}
.custom-header .navbar-custom {
    display: flex;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
}

.custom-header ul.menu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    align-items: center;
}

.custom-header ul.menu li {
    margin: 0 !important;
    padding: 0 10px;
}

.custom-header ul.menu li a {
    color: #333;
    font-weight: 600;
    padding: 25px 5px !important;
    text-transform: uppercase;
    font-size: 14px;
    position: relative;
    text-decoration: none;
    display: inline-block;
}

.custom-header ul.menu li a:after {
    content: '';
    position: absolute;
    bottom: 20px;
    left: 5px;
    right: 5px;
    height: 3px;
    background: var(--brand-600, #2a6df4);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.custom-header ul.menu li.active a:after,
.custom-header ul.menu li a:hover:after {
    transform: scaleX(1);
}
.custom-header ul.menu li.active a {
    color: var(--brand-600, #2a6df4);
}

.custom-header ul.menu li.quote-btn a {
    background: var(--brand-600, #2a6df4);
    color: #fff !important;
    border-radius: 30px;
    padding: 10px 25px !important;
    box-shadow: 0 4px 15px rgba(42, 109, 244, 0.3);
    transition: all 0.3s ease;
}

.custom-header ul.menu li.quote-btn a:after {
    display: none;
}

.custom-header ul.menu li.quote-btn a:hover {
    background: var(--brand-800, #0f2f6f);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(15, 47, 111, 0.4);
}

/* Mobile Toggle */
.custom-header label.toggle {
    margin-bottom: 0;
    cursor: pointer;
    font-size: 20px;
    color: #0b1f4a;
    padding: 10px 15px;
    display: none;
}

.custom-header input#drop {
    display: none;
}

/* Override existing CSS for nav */
nav {
    padding: 0 !important;
    background: transparent !important;
    box-shadow: none !important;
    margin-left: 0 !important;
}
.custom-header nav {
    width: 100% !important;
}

@media (max-width: 991px) {
    .custom-header label.toggle {
        display: block;
    }
    .custom-header ul.menu {
        display: none;
        flex-direction: column;
        width: 100vw;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        background: #fff;
        padding: 20px 0;
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
    .custom-header input#drop:checked ~ ul.menu {
        display: flex;
    }
    .custom-header ul.menu li {
        width: 100%;
        text-align: center;
        margin: 0 !important;
        padding: 0 !important;
    }
    .custom-header ul.menu li a {
        display: block;
        padding: 15px !important;
    }
    .custom-header ul.menu li a:after {
        display: none;
    }
    .custom-header .navbar-custom {
        padding: 10px 15px;
    }
    .custom-header #logo a {
        padding-left: 90px;
        background-size: 80px auto;
        height: 50px;
    }
}
@media (max-width: 767px) {
    .custom-header .top-bar {
        font-size: 13px;
        padding: 8px 0;
    }
    .custom-header .top-info {
        margin-bottom: 5px;
    }
}
"""

with open('css/style.css', 'a', encoding='utf-8') as f:
    f.write(custom_css)

print("Updated CSS.")
